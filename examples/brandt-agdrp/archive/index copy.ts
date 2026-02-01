import {
	LOGGER as log,
	type ComponentID,
	type ComponentInfo,
} from "@thi.ng/ecs";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import { $compile, type ComponentLike } from "@thi.ng/rdom";
import { FBO, glCanvas, defFBO, defTexture, TextureType } from "@thi.ng/webgl";
import { ecs, type CompSpecs } from "../src/ecs";
import * as Content from "../src/html";

/********************
 * CONFIGURATION
 *********************/
log.set(new ConsoleLogger("ecs", LogLevel.INFO));
const DEBUG_VIEW = true;
const vw = window.innerWidth;
const vh = window.innerHeight;

/********************
 * DOM SETUP
 *********************/
const sortedPages = Object.keys(Content)
	.filter((key) => key.startsWith("page"))
	.sort(
		(a, b) =>
			parseInt(a.replace("page", "")) - parseInt(b.replace("page", "")),
	)
	.map((key) => Content[key as keyof typeof Content]);

const pageWordCounts: number[] = Content.getPageCounts(sortedPages);
const book = div({ id: "pages" }, ...sortedPages);

await document.fonts.ready;
$compile(book).mount(document.getElementById("app")!);

/********************
 * WORD DOM DATA
 *********************/
const words = Array.from(document.getElementsByClassName("word"));
const word_count = words.length;
const TEX_SIZE = Math.ceil(Math.sqrt(word_count));
const dom_nodes = [...words] as HTMLElement[];
dom_nodes.forEach((el) => (el.dataset.id = dom_nodes.indexOf(el).toString()));
const { canvas } = glCanvas({
	version: 2,
	width: TEX_SIZE,
	height: TEX_SIZE,
	autoScale: false,
	parent: document.body,
});

const gl = canvas.getContext("webgl2");

if (DEBUG_VIEW) {
	Object.assign(canvas.style, {
		position: "fixed",
		top: "0",
		right: "0",
		zIndex: "9999",
		width: "128px",
		height: "128px",
		border: "1px solid cyan",
	});
} else {
	canvas.style.display = "none";
}

if (!gl) throw new Error("WebGL2 not supported!");
if (!gl.getExtension("EXT_color_buffer_float")) {
	console.error(
		"EXT_color_buffer_float not supported! Falling back to WebGL 2 defaults.",
	);
}
gl.getExtension("EXT_float_blend");

/********************
 * LAYOUT & DATA PACKING
 *********************/
exposeGlobal("ecs", ecs, true);
ecs.setCapacity(word_count);

const restComponent: any = ecs.components.get("rest");
const res: ComponentID<CompSpecs> = restComponent.vals;
const restValues = [...restComponent];
console.log(restValues);
const restState = new Float32Array(TEX_SIZE * TEX_SIZE * 4);

const u_rest = defTexture(gl, {
	width: TEX_SIZE,
	height: TEX_SIZE,
	format: gl.RGBA32F,
	type: gl.FLOAT,
	image: restState,
});

const state_0 = defFBO(gl);
const state_1 = defFBO(gl);

state_0.configure({
	//@ts-expect-error
	tex: defTexture(gl, {
		width: TEX_SIZE,
		height: TEX_SIZE,
		format: gl.RGBA32F,
		type: gl.FLOAT,
	}),
});

state_1.configure({
	//@ts-expect-error
	tex: defTexture(gl, {
		width: TEX_SIZE,
		height: TEX_SIZE,
		format: gl.RGBA32F,
		type: gl.FLOAT,
	}),
});

// 7. Create Entities
for (let i = 0; i < word_count; i++) {
	ecs.defEntity(restComponent?.vals[i]);
	const el = dom_nodes[i];
	const rect = el.getBoundingClientRect();

	// 2. Calculate Page Index (The Bucket)
	// "If I am at 2500px and the window is 1000px, I am on Page 2."
	const pageIndex = Math.floor(dom_nodes[i].offsetTop / vh);

	const anchor_x = rect.left + rect.width * 0.5;
	const anchor_y = rect.top + rect.height * 0.5;

	// 3. Normalize for GPU (Viewport Space)
	const norm_x = anchor_x / vw;
	const norm_y = 1.0 - (anchor_y % vh) / vh;

	const urge = Math.random();

	const ptr = i * 4;
	// 4. Write to Rest Buffer
	restState[ptr] = norm_x; // R
	restState[ptr + 1] = norm_y; // G
	restState[ptr + 2] = pageIndex; // B
	restState[ptr + 3] = i; // A

	restState.fill(0, ptr, ptr + 4);

	// Create a texture object
	const texture = gl.createTexture();
	// Bind the texture to the TEXTURE_2D target
	gl.bindTexture(gl.TEXTURE_2D, texture);
}

gl.texImage2D(
	gl.TEXTURE_2D,
	0,
	gl.RGBA32F,
	TEX_SIZE,
	TEX_SIZE,
	0,
	gl.RGBA,
	gl.FLOAT,
	restState,
);
// It's good practice to set texture parameters after defining the image
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

const fbo = defFBO(gl);

gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.fbo);

// for (let word of words) {
// 	const computedStyles = getComputedStyle(word);
// 	const valWght = parseFloat(computedStyles.getPropertyValue("--wght"));
// 	const valWdth = parseFloat(computedStyles.getPropertyValue("--wdth"));
// 	const valItal = parseFloat(computedStyles.getPropertyValue("--ital"));
// 	const valCont = parseFloat(computedStyles.getPropertyValue("--cont"));
// }

// 4. Write to State Buffer
console.log(`
All 3 numbers to right should match!
Total Words * 4: 		${word_count * 4}
===========================================
Entities * 4: 			${ecs.idgen.capacity * 4}
----------------------------------
Rest Component Buffer: ${restState.length}
----------------------------------
Bake Complete. Payload Size: ${restState.byteLength} bytes.);
----------------------------------
`);
