import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import { $compile, type ComponentLike } from "@thi.ng/rdom";
import { FBO, glCanvas, defFBO, defTexture, TextureType } from "@thi.ng/webgl";
import { ecs, type CompSpecs } from "./ecs";
import * as Content from "./html";
import { LOGGER as log } from "@thi.ng/shader-ast";

/********************
 * PRE
 *********************/
//`everwun caldum ruuuuby, like, like, the red...uh huh, Roodey.`

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

const roots = [];

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

//********************
// * LAYOUT & DATA PACKING
//********************

// const u_rest = defTexture(gl, {
// 	width: TEX_SIZE,
// 	height: TEX_SIZE,
// 	format: gl.RGBA32F,
// 	type: gl.FLOAT,
// 	image: roots_buff,
// });

// const state_0 = defFBO(gl);
// const state_1 = defFBO(gl);

// state_0.configure({
// 	//@ts-expect-error
// 	tex: defTexture(gl, {
// 		width: TEX_SIZE,
// 		height: TEX_SIZE,
// 		format: gl.RGBA32F,
// 		type: gl.FLOAT,
// 	}),
// });

// state_1.configure({
// 	//@ts-expect-error
// 	tex: defTexture(gl, {
// 		width: TEX_SIZE,
// 		height: TEX_SIZE,
// 		format: gl.RGBA32F,
// 		type: gl.FLOAT,
// 	}),
// });
// 7. Create Entities

for (let i = 0; i < word_count; i++) {
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

	roots[ptr] = norm_x; // R
	roots[ptr + 1] = norm_y; // G
	roots[ptr + 2] = pageIndex; // B
	roots[ptr + 3] = i; // A

	//	const floats = ecs.defEntity(ecs.components.get("roots")?.vals);

	const u_roots = defTexture(gl, {
		width: TEX_SIZE,
		height: TEX_SIZE,
		format: gl.RGBA32F,
		type: gl.FLOAT,
		image: undefined,
	});
}

const fbo = defFBO(gl);

gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.fbo);

console.log(
	`
		All 3 numbers to right should match!
		Total Words * 4: 		${word_count * 4}
		===========================================
		ECS capacity: 			${ecs.idgen.capacity * 4}
`,
);
