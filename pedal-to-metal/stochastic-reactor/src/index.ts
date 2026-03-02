import { defAtom } from "@thi.ng/atom";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { $compile } from "@thi.ng/rdom";
import { debounce, fromDOMEvent } from "@thi.ng/rstream";
import { defBuffer, glCanvas } from "@thi.ng/webgl";
import * as ecs from "./ecs";
import * as Content from "./html";
import { transformFeedbackVertexShader } from "./shader";

/********************
 * CONFIGURATION
 *********************/
exposeGlobal("ecs", ecs, true);
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

const { gl, canvas } = glCanvas({
	version: 2,
	width: 96,
	height: 96,
	autoScale: true,
	parent: document.body,
});
if (!gl) throw new Error("WebGL2 not supported!");

// keys to webgl2 kingdom :)
const gl2 = gl as WebGL2RenderingContext;

if (!gl.getExtension("EXT_color_buffer_float")) {
	console.error(
		"EXT_color_buffer_float not supported! Falling back to WebGL 2 defaults.",
	);
}
gl.getExtension("EXT_float_blend");

await document.fonts.ready;
$compile(book).mount(document.getElementById("app")!);

/********************
 * WORD DOM DATA
 *********************/
const domNodes = Array.from(
	document.getElementsByClassName("word"),
) as HTMLElement[];
const WORD_COUNT = domNodes.length;
ecs.ecs.setCapacity(WORD_COUNT);

/********************
 * FPS COUNTER
 *********************/
// const fpsDiv = document.createElement("div");
// fpsDiv.id = "fps-counter";
// fpsDiv.innerText = "FPS: 0";
// document.body.appendChild(fpsDiv);

// let lastTime = performance.now();
// let frames = 0;

// function updateFPS(currentTime: number) {
// 	frames++;
// 	// If 1000 milliseconds (1 second) have passed
// 	if (currentTime - lastTime >= 1000) {
// 		// Update the text
// 		fpsDiv.innerText = `FPS: ${frames}`;
// 		// Reset the counters for the next second
// 		frames = 0;
// 		lastTime = currentTime;
// 	}
// 	requestAnimationFrame(updateFPS);
// }
// requestAnimationFrame(updateFPS);

/********************
 * LAYOUT & DATA PACKING
 *********************/
for (let i = 0; i < WORD_COUNT; i++) {
	// 1. Create the entity and attach ALL components it needs
	const entity = ecs.ecs.defEntity(["state", "pos", "page", "domId"]);

	// 2. Read the DOM
	const rect = domNodes[i].getBoundingClientRect();
	const pageIndex = Math.floor(domNodes[i].offsetTop / vh);

	const x = rect.left + rect.width * 0.5;
	const y = rect.top + rect.height * 0.5;

	const norm_x = x / vw;
	const norm_y = 1.0 - (y % vh) / vh;

	// 3. Write securely to ECS Memory using .set()
	// The ECS handles calculating the exact byte offsets automatically!

	// size: 4 -> pass an array of 4 numbers
	ecs.stateComponent?.set(entity, [400.0, 100.0, 0.0, 0.0]);

	// size: 2 -> pass an array of 2 numbers
	ecs.posComponent?.set(entity, [norm_x, norm_y]);

	// size: 1 -> pass the single scalar value directly
	ecs.pageComponent?.set(entity, [pageIndex]);
	ecs.domIdComponent?.set(entity, [i]);
}

// 1. Create the base stream
const resizeEventStream = fromDOMEvent(window, "resize");

// 2. Chain them! Event -> Debounce -> My Logic
resizeEventStream.subscribe(debounce(250)).subscribe({
	next: () => {
		console.log("Resize actually finished! Updating ECS Memory...");

		for (let i = 0; i < WORD_COUNT; i++) {
			const el = domNodes[i];
			const rect = el.getBoundingClientRect();

			const x = rect.left + rect.width * 0.5;
			const y = rect.top + rect.height * 0.5;

			const norm_x = x / vw;
			const norm_y = 1.0 - (y % vh) / vh;

			// Remember: Always pass arrays to .set()
			ecs.posComponent?.set(i, [norm_x, norm_y]);
		}
	},
});

/********************
 * GPU MEMORY ALLOCATION
 *********************/

// 1.  The source Buffer (Input: x, y)
// We allocate space for 3297 vec2s.
// Usage is DYNAMIC_DRAW because we will pdate it on window resize.
const posGPUBuffer = defBuffer(
	gl,
	new Float32Array(WORD_COUNT * 2),
	gl.ARRAY_BUFFER,
	gl.DYNAMIC_DRAW,
);

// 2.  The Transform Feedback Buffer (Output: wght, wdth, ital, urge)
// We allocate space for 3297 vec4s.
const stateGPUBuffer = defBuffer(
	gl,
	new Float32Array(WORD_COUNT * 4),
	gl.ARRAY_BUFFER,
	gl2.DYNAMIC_COPY,
);

// Upload  initial posits
posGPUBuffer.set(ecs.posComponent!.vals);

/********************
 * TRANSFORM FEEDBACK SETUP
 *********************/
// 1. Create Transform Feedback Object
const tf = gl2.createTransformFeedback();
gl2.bindTransformFeedback(gl2.TRANSFORM_FEEDBACK, tf);

// 2. Bind state buffer to attatchment pt 0 of TFO
gl2.bindBufferBase(
	gl2.TRANSFORM_FEEDBACK_BUFFER,
	0,
	stateGPUBuffer.buffer, // extract raw WebGLBuffer
);

// 3. Unbind to keep things tidy
gl2.bindTransformFeedback(gl2.TRANSFORM_FEEDBACK, null);
gl2.bindBuffer(gl2.TRANSFORM_FEEDBACK_BUFFER, null);

/********************
 * VERTEX SHADER COMPILATION
 *********************/
// Create and compile the Vertex Shader
const vs = gl2.createShader(gl2.VERTEX_SHADER)!;
gl2.shaderSource(vs, transformFeedbackVertexShader);
gl2.compileShader(vs);

if (!gl2.getShaderParameter(vs, gl2.COMPILE_STATUS)) {
	console.error("Vertex Shader failed to compile:", gl2.getShaderInfoLog(vs));
}

/********************
 * FRAGMENT SHADER COMPILATION
 *********************/
// (for FS, we are just writing shader glsl here)
const fsSource = `#version 300 es
precision highp float;

out vec4 myColor;

void main() {
	myColor = vec4(1,0,0,1);
}
`;

// Create and compile the Fragment Shader
const fs = gl2.createShader(gl2.FRAGMENT_SHADER)!;
gl2.shaderSource(fs, fsSource);
gl2.compileShader(fs);

if (!gl2.getShaderParameter(fs, gl2.COMPILE_STATUS)) {
	console.error(
		"Fragment Shader failed to compile:",
		gl2.getShaderInfoLog(fs),
	);
}

// Create the Program
const computeProgram = gl2.createProgram()!;
gl2.attachShader(computeProgram, vs);
gl2.attachShader(computeProgram, fs);

// THE CRUCIAL STEP: Declare the Transform Feedback outputs BEFORE linking!
// We tell WebGL to capture the 'v_state' variable from our shader.
gl2.transformFeedbackVaryings(
	computeProgram,
	["v_state"], // The exact name of the 'out' variable in GLSL
	// gl2.SEPARATE_ATTRIBS, // How to pack the data (we are using 1 buffer, so this or INTERLEAVED works)
	gl2.INTERLEAVED_ATTRIBS,
);

// Now we can safely link the program
gl2.linkProgram(computeProgram);

if (!gl2.getProgramParameter(computeProgram, gl2.LINK_STATUS)) {
	console.error("Program Link Error:", gl2.getProgramInfoLog(computeProgram));
}

// Look up the locations of our inputs and uniforms so we can feed them later
const posAttribLoc = gl2.getAttribLocation(computeProgram, "a_pos");
const timeUniformLoc = gl2.getUniformLocation(computeProgram, "u_time");
const activeWordLoc = gl2.getUniformLocation(computeProgram, "u_active_word");
// ... (you can look up your tuning uniforms here too)

/********************
 * THE DRAW CALL
 *********************/
// 1. Set the canvas drawing area and clear it to black
gl2.viewport(0, 0, canvas.width, canvas.height);
gl2.clearColor(0.0, 0.0, 0.0, 1.0);
gl2.clear(gl2.COLOR_BUFFER_BIT);

// 2. Tell WebGL which program to use
gl2.useProgram(computeProgram);

// 3. Hook up the data: Tell the "a_pos" attribute where to find its data
gl2.bindBuffer(gl2.ARRAY_BUFFER, posGPUBuffer.buffer);
gl2.enableVertexAttribArray(posAttribLoc);
// Tell it how to read the buffer: 2 floats per vertex, not normalized, 0 stride, 0 offset
gl2.vertexAttribPointer(posAttribLoc, 2, gl2.FLOAT, false, 0, 0);

// 4. PULL THE LEVER! Draw a point for every single word.
gl2.drawArrays(gl2.POINTS, 0, WORD_COUNT);

// 1. Create a blank array in JavaScript to hold the incoming GPU data
const outputStateData = new Float32Array(WORD_COUNT * 4);

// 2. Bind the Transform Feedback buffer so we can read from it
gl2.bindBuffer(gl2.ARRAY_BUFFER, stateGPUBuffer.buffer);

// 3. READ THE DATA! (This pulls it from the GPU back to the CPU)
gl2.getBufferSubData(gl2.ARRAY_BUFFER, 0, outputStateData);

// 4. Loop through the data and update the DOM!
for (let i = 0; i < WORD_COUNT; i++) {
	// Our shader outputs v_state as: vec4(wght, wdth, ital, urge)
	const wght = outputStateData[i * 4 + 0];
	const wdth = outputStateData[i * 4 + 1];
	const ital = outputStateData[i * 4 + 2];

	// Apply the CSS variables to the DOM node
	const el = domNodes[i];
	// el.style.setProperty("--wght", wght.toString());
	// el.style.setProperty("--wdth", wdth.toString());
	// el.style.setProperty("--ital", ital.toString());
}
