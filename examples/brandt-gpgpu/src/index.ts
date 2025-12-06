import * as Content from "./html";
import { draw, defQuadModel, glCanvas, readPixels } from "@thi.ng/webgl";
import { $compile } from "@thi.ng/rdom";
import {
	defMain,
	uniform,
	vec3,
	vec4,
	assign,
	mul,
	add,
	div as div_ide,
	sym,
	$xy,
	$x,
	$y,
	// BUILT_INS
	gl_fragCoord,
	gl_fragColor,
	// TYPES
	type Vec3Term, // Use "term' for general inputs (vars or expressions)"
	type FloatTerm,
	type Vec2Sym,
} from "@thi.ng/shader-ast";
import { snoise3 } from "@thi.ng/shader-ast-stdlib";
import { div, div as divi } from "@thi.ng/hiccup-html";

// 2. Sort and Assemble
// Object.keys is not guaranteed to be ordered, so we sort by the number in "pageXX"
const sortedPages = Object.keys(Content)
	.filter((key) => key.startsWith("page")) // Safety filter
	.sort((a, b) => {
		// Extract number: "page2" -> 2, "page10" -> 10
		const numA = parseInt(a.replace("page", ""));
		const numB = parseInt(b.replace("page", ""));
		return numA - numB;
	})
	.map((key) => Content[key as keyof typeof Content]); // Grab the actual Hiccup content

// 3. Wrap in a container
const bookRoot = ["div#text-container", ...sortedPages];

// 1. Create the Context (No need to append to DOM)
const canvas = document.createElement("canvas");
canvas.width = 512; // resolution of noise map
canvas.height = 512;
const gl: WebGL2RenderingContext = canvas.getContext("webgl2")!;

if (!gl) throw new Error("WebGL2 not supported!");

// ---Inputs---
const u_resolution = uniform("vec2", "u_resolution");
const u_time = uniform("float", "u_time");
const u_stress = uniform("float", "u_stress");

// ---HELPER---: Returns a noise value with an offset (sample other area/time)
const getAxisNoise = (
	basePos: Vec3Term,
	timeVec: Vec3Term,
	offset: Vec3Term
) => {
	// 1. Apply Offset (Shift the "camera" for this specific axis)
	let p = sym(add(basePos, offset));
	// 2. Add Time
	assign(p, add(p, timeVec));
	// 3. Sample Noise
	// Using 3D noise: x, y, and z is mixed with time
	let n = snoise3(p);
	// 4. Normalize (-1..1 -> 0..1)
	return mul(add(n, 1.0), 0.5);
};

export const multiAxisShader = defMain(() => {
	// 1. FIX: Use gl_FragCoord to get the pixel position
	let uv: Vec2Sym = sym(div_ide($xy(gl_fragCoord), u_resolution));
	// fix aspect ratio
	assign($x(uv), mul($x(uv), div_ide($x(u_resolution), $y(u_resolution))));

	//2. Base Position (construct a vec3 from the vec2 'uv' and a float 0.0)
	let pos = sym(vec3(uv, 0.0));
	assign(pos, mul(pos, 3.0));

	// 3. Time Vector (z axis/dimension to animate noise)
	let t = vec3(0.0, 0.0, mul(u_time, 0.5));

	// 4. GENERATE 4 DISTINCT CHANNELS
	// We use large arbitrary offsets (vec3) so the patterns don't look same

	// R Channel -> Weight (Start at 0, 0)
	let r = getAxisNoise(pos, t, vec3(0.0, 0.0, 0.0));

	// G Channel -> Width (Offset by 100)
	let g = getAxisNoise(pos, t, vec3(12.5, 43.2, 0.0));

	// B Channel -> Ital (Offset by 200)
	let b = getAxisNoise(pos, t, vec3(-50.0, 10.0, 0.0));

	// A Channel -> Cont (Offset by 300)
	let a = getAxisNoise(pos, t, vec3(33.3, -90.0, 0.0));

	// 5. APPLY STRESS (Global Multiplier)
	// If stress is 0, everything stays calm (near 0.5 or 0.0
	// depending on mapping)
	// Can apply this to all channels or select 1, 2, etc.

	// Examples: Boosting all channels based on stress
	let output = sym(vec4(r, g, b, a));

	assign(output, mul(output, add(1.0, mul(u_stress, 2.0))));

	// 6. OUTPUT
	return [assign(gl_FragColor, output)];
});

// 2. Define Model
// in thi.ng - model in webGL is shader and geometry
const model = defQuadModel({
	gl: gl,
	// just need to provide the frag shader (my noise logic)
	shader: {
		fs: multiAxisShader,
	},

	// UNIFORMS
	uniforms: {
		u_time: "float",
		u_stress: "float",
		u_resolution: ["vec2", [512, 512]],
	},
});

// ---The Render Function---
function updateNoise(time: number, stress: number) {
	// A. Update Uniforms
	// Check if uniforms exist before assigning
	if (model.uniforms) {
		model.uniforms.u_time = time;
		model.uniforms.u_stress = stress;
	}

	// B. Draw (Runs the shader on the GPU)
	// Since we aren't showing the canvas, we just draw to the default buffer
	// (which is the canvas back-buffer)
	draw(model);

	// C. Read Back (The Bridge from GPU to CPU)
	// We read the pixels from the canvas into our CPU array.
	// format: RGBA, type: UNSIGNED_BYTE
	readPixels(gl, 0, 0, 512, 512, gl.RGBA, gl.UNSIGNED_BYTE, cpuBuffer);
	return cpuBuffer;
}
// 3. The CPU Buffer
// This is where we will download the texture data to
const cpuBuffer = new Uint8Array(512 * 512 * 4); // RGBA = 4 bytes per pixel

/**
 * STRUCTURE OF THE ARRAY (Stride = 4):
 * [0] centerX (px) - Relative to the viewport/page left
 * [1] localY (px) - Relative to the viewport/page top (0 to window.innerHeight)
 * [2] pageIndex    - Integer ID of which "scroll snap" page this word is on
 * [3] willPower	- Dampening, increase/decrease chance of tic
 */
const STRIDE = 4;
let wordLayoutMap: Float32Array;

async function bakeWordPositions() {
	// 1. CRITICAL: wait for variable font to fully load
	await document.fonts.ready;

	// 2. Select all words
	const words = document.querySelectorAll(".word");
	const totalWords = words.length;

	// 3. Allocate Memory (Re-use if exists to avoid GC thrashing on resize)
	if (!wordLayoutMap || wordLayoutMap.length !== totalWords * STRIDE) {
		wordLayoutMap = new Float32Array(totalWords * STRIDE);
	}

	// 4. Get Environmental Constants
	const pageHeight = window.innerHeight;
	const currentScrollY = window.scrollY;

	// Get container offset to ensure we normalize 0.0 to the text container
	// (Optional, depends if your text container has a left margin/padding)
	const container = document.querySelector("#text-container");
	const containerRect = container
		? container.getBoundingClientRect()
		: {
				left: 0,
				top: 0,
		  };
	const containerOffsetX = containerRect.left;

	// 5. The Batch Loop
	// Reading these sequentially , NO writes in between.
	for (let i = 0; i < totalWords; i++) {
		const rect = words[i].getBoundingClientRect();

		// CALCULATION A: The Absolute Document Y
		// rect.top is relative to viewport. Add scrollY to get absolute
		// documentY.
		// Subtract container's top offset (usually margins) to get
		// "Text Space".
		// (use rect.top and currentScrollY as I need absolute position no matter
		// where user is currently looking)
		const absTop = rect.top + currentScrollY;

		// CALCULATION B: The Center Point ("The Sensor")
		// Noise has to hit MIDDLE of word, not top left corner.
		const centerX = rect.left - containerOffsetX + rect.width * 0.5;
		const absCenterY = absTop + rect.height * 0.5;

		// CALCULATION C: Snapping Logic
		const pageIndex = Math.floor(absCenterY / pageHeight);

		// Modulo trick (Even if word is at Y=50,000, if it's at top of page,
		// locally it will be e.g. 100px.)
		const localY = absCenterY % pageHeight;

		// 6. Write to Buffer
		const ptr = i * STRIDE;
		wordLayoutMap[ptr] = centerX; // Index 0
		wordLayoutMap[ptr + 1] = localY; // Index 1
		wordLayoutMap[ptr + 2] = pageIndex; // Index 2
		wordLayoutMap[ptr + 3] = 1.0; // Index 3 - Will Power (Def 1.0)
	}

	console.log(`Baked ${totalWords} word positions. Ready for sampling.`);
	return wordLayoutMap;
}

async function start() {
	// Step 1: Mount the DOM
	// We use $compile to turn the Hiccup into DOM nodes and append to app
	$compile(bookRoot).mount(document.getElementById("app")!);

	// Step 2: Wait for fonts
	await document.fonts.ready;
	console.log("Fonts loaded. Layout is stable.");

	// Step 3: Bake Positions
	const wordMap = await bakeWordPositions();

	// Step 4: Start the Storm
	// Initialize WebGL, Input listeners, and the Animations Loop
	// initInputs();

	requestAnimationFrame((time) => {
		wordMap;
	});
}

start();
