// import {
// 	$xy,
// 	F,
// 	V2,
// 	V4,
// 	add,
// 	assign,
// 	defMain,
// 	defn,
// 	float,
// 	program,
// 	ret,
// 	sym,
// 	vec2,
// 	vec3,
// 	vec4,
// 	type FloatSym,
// 	type Vec2Sym,
// } from "@thi.ng/shader-ast";
// import { GLSLVersion, targetGLSL } from "@thi.ng/shader-ast-glsl";
// import {
// 	additive,
// 	aspectCorrectedUV,
// 	fit1101,
// 	snoise2,
// } from "@thi.ng/shader-ast-stdlib";
// import { compileModel, defQuadModel, defShader, draw } from "@thi.ng/webgl";

// const GL = targetGLSL({ version: GLSLVersion.GLES_300 }); // WebGL

// const mainImage = defn(V4, "mainImage", [V2, V2, F], (fragCoord, res, time) => {
// 	let uv: Vec2Sym;
// 	let col: FloatSym;
// 	return [
// 		(uv = sym(aspectCorrectedUV(fragCoord, res))),
// 		// dynamically create a multi-octave version of `snoise2`
// 		// computed over 4 octaves w/ given phase shift and decay
// 		// factor (both per octave)
// 		(col = sym(
// 			additive(V2, snoise2, 4)(add(uv, time), vec2(2), float(0.5))
// 		)),
// 		ret(vec4(vec3(fit1101(col)), 1)),
// 	];
// });

// // build call graph for given entry function, sort in topological order
// // and bundle all functions in a global scope for code generation...
// const shaderProgram = program([mainImage]);

// console.log("GLSL");
// console.log(GL(shaderProgram));

// const W = 512;
// const H = 512;
// const size = [W, H];
// const canvas = document.createElement("canvas");
// canvas.width = W;
// canvas.height = H;
// document.body.appendChild(canvas);

// const ctx: WebGLRenderingContext = canvas.getContext("webgl")!;
// // build fullscreen quad
// const model = defQuadModel({ uv: false });
// // set shader
// model.shader = defShader(ctx, {
// 	vs: (gl, _, attribs) => [
// 		defMain(() => [assign(gl.gl_Position, vec4(attribs.position, 0, 1))]),
// 	],
// 	fs: (gl, unis, _, outs) => [
// 		mainImage,
// 		defMain(() => [
// 			assign(
// 				outs.fragColor,
// 				mainImage($xy(gl.gl_FragCoord), unis.resolution, unis.time)
// 			),
// 		]),
// 	],
// 	attribs: {
// 		position: V2,
// 	},
// 	uniforms: {
// 		resolution: [V2, [W, H]],
// 		time: F,
// 	},
// });
// // compile model (attrib buffers)
// compileModel(ctx, model);

// const t0 = Date.now();
// // render loop
// setInterval(() => {
// 	const time = (Date.now() - t0) * 0.001;
// 	model.uniforms!.time = time;
// 	draw(model);
// });

import { ConsoleLogger, ROOT } from "@thi.ng/logger";
import {
	defMultiPass,
	glCanvas,
	DrawMode,
	TextureFormat,
	readTexture,
	FX_SHADER_SPEC_UV,
	type ShaderFn,
} from "@thi.ng/webgl";
import { $compile } from "@thi.ng/rdom";
import { fit } from "@thi.ng/math";
import {
	defMain,
	vec3,
	vec4,
	assign,
	mul,
	add,
	sub,
	sym,
	div,
	$x,
	$y,
	$z,
	$xy,
	float,
	mod,
	floor,
	texture,
	type Sym,
	type Vec2Term,
	type Vec3Term,
} from "@thi.ng/shader-ast";
import { snoise3 } from "@thi.ng/shader-ast-stdlib";
import { div as hDiv } from "@thi.ng/hiccup-html";
import * as Content from "./html";

ROOT.set(new ConsoleLogger());

// --- CONFIGURATION ---
const DATA_DIM = 64;
const MAX_WORDS = DATA_DIM * DATA_DIM;
const DEBUG_VIEW = true;
const ENABLE_DEBUG_OVERLAY = true;

// --- 1. DOM SETUP ---
const sortedPages = Object.keys(Content)
	.filter((key) => key.startsWith("page"))
	.sort(
		(a, b) =>
			parseInt(a.replace("page", "")) - parseInt(b.replace("page", ""))
	)
	.map((key) => Content[key as keyof typeof Content]);

const book = hDiv({ id: "text-container" }, ...sortedPages);

const canvas = glCanvas({
	version: 2,
	width: DATA_DIM,
	height: DATA_DIM,
	autoScale: false,
	parent: document.body,
});

if (DEBUG_VIEW) {
	Object.assign(canvas.canvas.style, {
		position: "fixed",
		top: "0",
		right: "0",
		zIndex: "9999",
		width: "128px",
		height: "128px",
		border: "1px solid magenta",
		background: "black",
	});
} else {
	canvas.canvas.style.display = "none";
}

const gl = canvas.gl;
if (!gl) throw new Error("WebGL2 not supported!");

// REVERTED: Strict check for float extension
if (!gl.getExtension("EXT_color_buffer_float")) {
	console.error(
		"EXT_color_buffer_float not supported! Falling back to WebGL 2 defaults."
	);
}
gl.getExtension("EXT_float_blend");

// --- DEBUG OVERLAY SETUP ---
let debugEl: HTMLElement;
if (ENABLE_DEBUG_OVERLAY) {
	debugEl = document.createElement("div");
	Object.assign(debugEl.style, {
		position: "fixed",
		bottom: "10px",
		left: "10px",
		background: "rgba(0,0,0,0.85)",
		color: "#0f0",
		fontFamily: "monospace",
		fontSize: "12px",
		padding: "10px",
		zIndex: "10000",
		pointerEvents: "none",
		whiteSpace: "pre",
		border: "1px solid #0f0",
	});
	document.body.appendChild(debugEl);
}

// --- 2. AST LOGIC (THE GRAPH) ---

const getAxisNoise = (
	basePos: Vec3Term,
	timeVec: Vec3Term,
	offset: Vec3Term
) => {
	let p = add(add(basePos, offset), timeVec);
	let n = snoise3(p);
	return mul(add(n, float(1.0)), float(0.5));
};

// Vertex Shader Factory
const vsFactory: ShaderFn = (gl, unis, ins, outs) => {
	const a_index = ins.a_index as Sym<"float">;
	const a_wordPos = ins.a_wordPos as Sym<"vec3">;
	const u_dims = unis.u_dims as Sym<"vec2">;
	const u_vh = unis.u_vh as Sym<"float">;
	const u_scroll = unis.u_scroll as Sym<"float">;
	const v_noisePos = outs.v_noisePos as Sym<"vec3">;

	return [
		defMain(() => {
			let x = sym(mod(a_index, $x(u_dims)));
			let y = sym(floor(div(a_index, $x(u_dims))));

			let clipX = sub(
				mul(div(add(x, float(0.5)), $x(u_dims)), float(2.0)),
				float(1.0)
			);
			let clipY = sub(
				mul(div(add(y, float(0.5)), $y(u_dims)), float(2.0)),
				float(1.0)
			);

			let pageOffset = mul($z(a_wordPos), u_vh);
			let worldY = sub(add(pageOffset, $y(a_wordPos)), u_scroll);

			let noiseX = mul($x(a_wordPos), float(0.005));
			let noiseY = mul(worldY, float(0.005));

			return [
				x,
				y,
				assign(v_noisePos, vec3(noiseX, noiseY, float(0.0))),
				assign(
					gl.gl_Position,
					vec4(clipX, clipY, float(0.0), float(1.0))
				),
				assign(gl.gl_PointSize, float(1.0)),
			];
		}),
	];
};

// Fragment Shader Factory
const fsFactory: ShaderFn = (gl, unis, ins, outs) => {
	const v_noisePos = ins.v_noisePos as Sym<"vec3">;
	const u_time = unis.u_time as Sym<"float">;
	const u_stress = unis.u_stress as Sym<"float">;
	const u_resolution = unis.u_resolution as Sym<"vec2">;

	const fragColor = (outs.data || outs.output0) as Sym<"vec4">;
	if (!fragColor) {
		console.error(
			"Shader Output Error: 'outs.data' is undefined. Check extensions and texture config."
		);
	}

	return [
		defMain(() => {
			let pos = sym(v_noisePos);
			let t = vec3(float(0.0), float(0.0), mul(u_time, float(0.5)));

			let r = getAxisNoise(
				pos,
				t,
				vec3(float(0.0), float(0.0), float(0.0))
			);
			let g = getAxisNoise(
				pos,
				t,
				vec3(float(12.5), float(43.2), float(0.0))
			);
			let b = getAxisNoise(
				pos,
				t,
				vec3(float(-50.0), float(10.0), float(0.0))
			);
			let a = getAxisNoise(
				pos,
				t,
				vec3(float(33.3), float(-90.0), float(0.0))
			);

			let output = sym(vec4(r, g, b, a));

			// Increases intensity based on stress level
			assign(
				output,
				mul(output, add(float(1.0), mul(u_stress, float(2.0))))
			);

			// REVERTED: Output the NOISE (output), not the debug gradient (debugOutput)
			return [pos, output, assign(fragColor, output)];
		}),
	];
};

// Custom Debug Pass Shader
const debugFs: ShaderFn = (gl, unis, ins, outs) => [
	defMain(() => [
		assign(outs.fragColor, texture(unis.tex, ins.v_uv as Vec2Term)),
	]),
];

// --- 3. PIPELINE ---

const pipeline = defMultiPass({
	gl,
	width: DATA_DIM,
	height: DATA_DIM,
	textures: {
		data: {
			// REVERTED: Back to 32-bit Float
			format: TextureFormat.RGBA32F,
			filter: gl.NEAREST,
		},
	},
	passes: [
		{
			vs: vsFactory,
			fs: fsFactory,
			attribs: {
				a_wordPos: "vec3",
				a_index: "float",
			},
			varying: { v_noisePos: "vec3" },
			uniforms: {
				u_time: "float",
				u_stress: "float",
				u_dims: "vec2",
				u_scroll: "float",
				u_vh: "float",
				u_resolution: "vec2",
			},
			model: {
				mode: DrawMode.POINTS,
				attribs: {
					a_wordPos: { data: new Float32Array(3), size: 3 },
					a_index: { data: new Float32Array(1), size: 1 },
				},
				num: 0,
			},
			inputs: [],
			outputs: ["data"],
		},
		...(DEBUG_VIEW
			? [
					{
						...FX_SHADER_SPEC_UV,
						fs: debugFs,
						inputs: ["data"],
						outputs: [],
					},
			  ]
			: []),
	],
});

// --- 4. APP LOGIC ---

const state = {
	stress: 0.0,
	lastActionTime: Date.now(),
	vw: window.innerWidth,
	vh: window.innerHeight,
	scrollY: window.scrollY,
	wordCount: 0,
	domNodes: [] as HTMLElement[],
};

async function start() {
	$compile(book).mount(document.getElementById("app")!);
	await document.fonts.ready;

	initInputs();
	bakeWordPositions();

	requestAnimationFrame(tick);
}

function bakeWordPositions() {
	const words = document.querySelectorAll(".word");
	const count = Math.min(words.length, MAX_WORDS);
	state.domNodes = Array.from(words) as HTMLElement[];
	state.wordCount = count;

	const posBuffer = new Float32Array(count * 3);
	const idxBuffer = new Float32Array(count);

	const container = document.getElementById("text-container");
	const offsetX = container?.getBoundingClientRect().left || 0;

	for (let i = 0; i < count; i++) {
		const rect = words[i].getBoundingClientRect();

		const absTop = rect.top + window.scrollY;
		const pageIndex = Math.floor(absTop / window.innerHeight);
		const localY = absTop % window.innerHeight;
		const centerX = rect.left - offsetX + rect.width * 0.5;

		posBuffer[i * 3] = centerX;
		posBuffer[i * 3 + 1] = localY;
		posBuffer[i * 3 + 2] = pageIndex;

		idxBuffer[i] = i;
	}

	const pass = pipeline.passes[0];
	if (!pass || !pass.model) return;
	const model = pass.model;

	if (model.attribs.a_wordPos.buffer) {
		model.attribs.a_wordPos.buffer.set(posBuffer);
		model.attribs.a_index.buffer!.set(idxBuffer);
	} else {
		model.attribs.a_wordPos.data = posBuffer;
		model.attribs.a_index.data = idxBuffer;
	}

	model.num = count;
	console.log(`Baked ${count} words.`);
}

function initInputs() {
	window.addEventListener(
		"scroll",
		() => {
			state.scrollY = window.scrollY;
			state.stress = Math.max(0, state.stress - 0.05);
			state.lastActionTime = Date.now();
		},
		{ passive: true }
	);

	let timer: any;
	window.addEventListener("resize", () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			state.vh = window.innerHeight;
			state.vw = window.innerWidth;
			bakeWordPositions();
		}, 200);
	});
}

// REVERTED: Back to Float32Array
const cpuBuffer = new Float32Array(MAX_WORDS * 4);

function tick(time: number) {
	const now = Date.now();

	if (now - state.lastActionTime > 1000) {
		state.stress = Math.min(1.0, state.stress + 0.005);
	}

	if (state.wordCount === 0) {
		requestAnimationFrame(tick);
		return;
	}

	const mainPass = pipeline.passes[0];
	if (mainPass && mainPass.model && mainPass.uniformVals) {
		mainPass.uniformVals.u_time = time * 0.001;
		mainPass.uniformVals.u_stress = state.stress;
		mainPass.uniformVals.u_scroll = state.scrollY;
		mainPass.uniformVals.u_vh = state.vh;
		mainPass.uniformVals.u_resolution = [DATA_DIM, DATA_DIM];
	}

	pipeline.update(time);

	const fboTexture = pipeline.textures["data"];

	// REVERTED: Read as FLOAT
	readTexture(gl, fboTexture, TextureFormat.RGBA, gl.FLOAT, cpuBuffer);

	// --- DEBUGGER UPDATE ---
	if (ENABLE_DEBUG_OVERLAY && debugEl) {
		const r = cpuBuffer[0].toFixed(2);
		const g = cpuBuffer[1].toFixed(2);
		const b = cpuBuffer[2].toFixed(2);
		const a = cpuBuffer[3].toFixed(2);

		debugEl.innerText = `Time:   ${(time * 0.001).toFixed(2)}
Stress: ${state.stress.toFixed(2)}
Word 0: [${r}, ${g}, ${b}, ${a}]`;
	}

	const count = state.wordCount;
	for (let i = 0; i < count; i++) {
		const idx = i * 4;

		// REVERTED: No / 255.0 division needed for floats
		const valWght = cpuBuffer[idx];
		const valWdth = cpuBuffer[idx + 1];
		const valItal = cpuBuffer[idx + 2];
		const valCont = cpuBuffer[idx + 3];

		const el = state.domNodes[i];
		if (!el) continue;

		const targetWght = fit(valWght, 0, 1, 100, 900);
		const targetWdth = fit(valWdth, 0, 1, 75, 100);
		const targetItal = valItal > 0.85 ? 1 : 0;
		const targetCont = fit(valCont, 0, 1, 0, 100);

		el.style.setProperty("--wght", targetWght.toFixed(0));
		el.style.setProperty("--wdth", targetWdth.toFixed(0));
		el.style.setProperty("--ital", targetItal.toFixed(0));
		el.style.setProperty("--cont", targetCont.toFixed(0));
	}

	requestAnimationFrame(tick);
}

start();
