import { exposeGlobal } from "@thi.ng/expose";
import { ConsoleLogger } from "@thi.ng/logger";
import { ortho } from "@thi.ng/matrices";
import { fromRAF } from "@thi.ng/rstream";
import { gestureStream } from "@thi.ng/rstream-gestures";
import { Node2D } from "@thi.ng/scenegraph";
import {
	$x,
	F,
	M4,
	S2D,
	V2,
	V3,
	add,
	assign,
	defMain,
	distance,
	float,
	madd,
	mix,
	mul,
	sin,
	texture,
	vec3,
	vec4,
} from "@thi.ng/shader-ast";
import {
	additive,
	distManhattan2,
	fit1101,
	snoise3,
} from "@thi.ng/shader-ast-stdlib";
import { add2, copy, type ReadonlyVec } from "@thi.ng/vectors";
import {
	clearCanvas,
	compileModel,
	defQuadModel,
	defShader,
	glCanvas,
	LOGGER,
	type GLMat4,
	defTexture,
	defFBO,
	TextureFormat,
} from "@thi.ng/webgl";
import type { AppCtx } from "../src/api.js";
import { OpNode } from "../src/opnode.js";

import { ecs, anchors, state } from "../src/ecs.js";
import * as Content from "../src/html.js";
import { $compile } from "@thi.ng/rdom";
import { div } from "@thi.ng/hiccup-html";
/****************************************
 *
// import { LOGGER as log } from "@thi.ng/ecs";
// import { exposeGlobal } from "@thi.ng/expose";
// import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
// import { ortho } from "@thi.ng/matrices";
// import { fromRAF } from "@thi.ng/rstream"
// import { gestureStream } from "@thi.ng/rstream-gestures";
// import { $compile } from "@thi.ng/rdom";
// import { defn, ret, div as divvy, V2, sub, mul, $y } from "@thi.ng/shader-ast";
// import { Node2D } from "@thi.ng/scenegraph";
// import { TextureFormat, glCanvas, defFBO, defTexture } from "@thi.ng/webgl";

/********************
 * CONFIGURATION
 *********************/

LOGGER.set(new ConsoleLogger());
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

// const pageWordCounts: number[] = Content.getPageCounts(sortedPages);

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
const { gl, canvas } = glCanvas({
	version: 2,
	width: TEX_SIZE,
	height: TEX_SIZE,
	autoScale: false,
	ext: ["WEBGL_draw_buffers"],
	parent: document.body,
});

if (!gl) throw new Error("WebGL2 not supported!");
if (!gl.getExtension("EXT_color_buffer_float")) {
	console.error(
		"EXT_color_buffer_float not supported! Falling back to WebGL 2 defaults.",
	);
}

gl.getExtension("EXT_float_blend");

	// geo for offscreen rendering (shader nodes)
opQuad: compileModel(gl, defQuadModel()),

	// geo + shader for drawing to the window
	mainQuad: {
		...compileModel(gl, defQuadModel({ size: 1 })),
		shader: defShader(),
	},


/********************
 * LAYOUT & DATA PACKING
 *********************/
exposeGlobal("ecs", ecs, true);
ecs.setCapacity(word_count);
ecs.defEntity(["rest"]);
const restState = new Float32Array(TEX_SIZE * TEX_SIZE * 4);

// for (let i = 0; i < word_count; i++) {
// 	const el = dom_nodes[i];
// 	const rect = el.getBoundingClientRect();

// 	// 2. Calculate Page Index (The Bucket)
// 	// "If I am at 2500px and the window is 1000px, I am on Page 2."
// 	const pageIndex = Math.floor(dom_nodes[i].offsetTop / vh);

// 	const anchor_x = rect.left + rect.width * 0.5;
// 	const anchor_y = rect.top + rect.height * 0.5;

// 	// 3. Normalize for GPU (Viewport Space)
// 	const norm_x = anchor_x / vw;
// 	const norm_y = 1.0 - (anchor_y % vh) / vh;

// 	const urge = Math.random();

// 	const ptr = i * 4;
// 	// 4. Write to Rest Buffer
// 	restState[ptr] = norm_x; // R
// 	restState[ptr + 1] = norm_y; // G
// 	restState[ptr + 2] = pageIndex; // B
// 	restState[ptr + 3] = i; // A
// }
// console.log(restState);

// // 	// Create a texture object
// const texture = gl.createTexture();
// // 	// Bind the texture to the TEXTURE_2D target
// gl.bindTexture(gl.TEXTURE_2D, texture);

const texStateConfig = {
	width: TEX_SIZE,
	height: TEX_SIZE,
	format: TextureFormat.RGBA32F,
	internalFormat: TextureFormat.RGBA32F,
	type: gl.FLOAT,
	filter: gl.NEAREST,
	image: restState,
};

const fboPair = [1].map(() =>
	defFBO(gl, {
		tex: [defTexture(gl, texStateConfig)],
	}),
);

// const aspectCorrectedUV = defn(
// 	V2,
// 	"aspectCorrectedUV",
// 	[V2, V2],
// 	(fragCoord, resolution) => [
// 		ret(divvy(sub(mul(2, fragCoord), resolution), $y(resolution))),
// 	],
// );

// console.log(fboPair);

// const readState = defn(
// 	"vec4", // 1. Return Type
// 	"readState", // 2. Function Name (in GLSL)
// 	["sampler2D", "vec2"], // 3. Argument Types
// 	(tex, res) => {
// 		// Define a symbol (variable) for UV to keep code clean
// 		const uv = sym(divvy($xy(), res));

// 		return [
// 			// Return the texture lookup using that UV
// 			ret(texture(tex, uv)),
// 		];
// 	},
// );
// // 4. Write to State Buffer
// console.log(`
// All 3 numbers to right should match!
// Total Words * 4: 		${word_count * 4}
// ===========================================
// Entities * 4: 			${ecs.idgen.capacity * 4}
// ----------------------------------
// Rest Component Buffer: ${restState.length}
// ----------------------------------
// Bake Complete. Payload Size: ${restState.byteLength} bytes.);
// ----------------------------------
// `);
