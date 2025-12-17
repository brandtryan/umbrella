import {
	compileModel,
	defQuadModel,
	defShader,
	draw,
	type ModelSpec,
	type ShaderSpec,
} from "@thi.ng/webgl";
import {
	assign,
	defMain,
	float,
	vec2,
	vec4,
	texture,
	div,
	mul,
	add,
	sub,
	abs, // Added abs import
	smoothstep,
	mix,
	sym, // <--- IMPORTANT: Added sym import
	$z,
	type FloatSym,
	type Term,
	type Vec2Sym,
	$xy,
} from "@thi.ng/shader-ast";
import { additive, fit1101, snoise2 } from "@thi.ng/shader-ast-stdlib";

// -----------------------------------------------------------------------------
// 1. TYPES
// -----------------------------------------------------------------------------
type InitMessage = {
	type: "INIT";
	canvas: OffscreenCanvas;
	physicsSAB: SharedArrayBuffer;
	restPosBuffer: ArrayBuffer;
	wordCount: number;
	width: number;
	height: number;
};

type UpdateMessage = {
	type: "UPDATE_GLOBALS";
	stress: number;
	activePage: number;
};

type AnyMessage = InitMessage | UpdateMessage;

interface PhysicsUniforms {
	u_restPos: Term<"sampler2D">;
	u_time: FloatSym;
	u_stress: Term<"float">;
	u_activePage: Term<"float">;
}

// -----------------------------------------------------------------------------
// 2. SHADER LOGIC
// -----------------------------------------------------------------------------
// const additiveNoise = (uv: Vec2Sym, time: FloatSym) =>
// 	additive("vec2", snoise2, 4)(add(uv, time), vec2(2), float(0.5));
//

// SAFE Noise  using symbols:
const safeNoise = (p: any) => snoise2(sym(p));

const physicsShader = (w: number, h: number): ShaderSpec => ({
	vs: (gl: any, _: any, attribs: any) => [
		defMain(() => [assign(gl.gl_Position, vec4(attribs.position, 0, 1))]),
	],
	fs: (gl: any, unis: any, _: any, outs: any) => [
		defMain(() => {
			// 1. UV
			let uv = sym(div($xy(gl.gl_FragCoord), vec2(float(w), float(h))));

			// 2. Texture Read
			let restData = sym(texture(unis.u_restPos, uv));
			let pageIndex = $z(restData);

			// 3. Activity Check
			// PROBLEM WAS HERE: 'dist' was being inlined but failing.
			// We make it a symbol now.
			let dist = sym(abs(sub(pageIndex, unis.u_activePage)));

			// isActive uses 'dist', so 'dist' must be declared before this line runs
			let isActive = smoothstep(float(0.8), float(0.2), dist);

			// 4. Noise Logic
			let noiseVal: any = sym(float(0.0));
			let amp: any = sym(float(0.5));
			let nPos: any = sym(add(uv, unis.u_time));

			// Octave 1
			assign(noiseVal, add(noiseVal, mul(safeNoise(nPos), amp)));
			assign(nPos, add(nPos, vec2(2.0)));
			assign(amp, mul(amp, float(0.5)));

			// Octave 2
			assign(noiseVal, add(noiseVal, mul(safeNoise(nPos), amp)));
			assign(nPos, add(nPos, vec2(2.0)));
			assign(amp, mul(amp, float(0.5)));

			// Octave 3
			assign(noiseVal, add(noiseVal, mul(safeNoise(nPos), amp)));
			assign(nPos, add(nPos, vec2(2.0)));
			assign(amp, mul(amp, float(0.5)));

			// Octave 4
			assign(noiseVal, add(noiseVal, mul(safeNoise(nPos), amp)));

			let normNoise = fit1101(noiseVal as any);

			// 5. Force Calculation
			// uses isActive -> uses dist
			let tic = sym(mul(normNoise, mul(unis.u_stress, isActive)));

			return [
				// DECLARATION ORDER MATTERS:
				uv,
				restData,
				dist, // <--- NEW: Explicitly declare dist
				noiseVal,
				amp,
				nPos,
				tic,

				assign(
					outs.fragColor,
					vec4(
						add(float(300), mul(tic, float(400))),
						mix(float(100), float(85), tic),
						mul(tic, float(12)),
						float(0)
					)
				),
			];
		}),
	],
	attribs: { position: "vec2" } as const,
	uniforms: {
		u_restPos: "sampler2D",
		u_time: "float",
		u_stress: "float",
		u_activePage: "float",
	},
});
// -----------------------------------------------------------------------------
// 3. RUNTIME
// -----------------------------------------------------------------------------
let gl: WebGL2RenderingContext;
let model: ModelSpec;
let sabView: Float32Array;
let fbo: WebGLFramebuffer;
let state = { stress: 0, activePage: 0 };
let width: number, height: number;

self.onmessage = (e: MessageEvent) => {
	const msg: AnyMessage = e.data;
	if (msg.type === "INIT") init(msg as InitMessage);
	if (msg.type === "UPDATE_GLOBALS") {
		state.stress = msg.stress;
		state.activePage = msg.activePage;
	}
};

function init(msg: InitMessage) {
	width = msg.width;
	height = msg.height;

	gl = msg.canvas.getContext("webgl2", {
		powerPreference: "high-performance",
		alpha: false,
	}) as WebGL2RenderingContext;

	if (!gl.getExtension("EXT_color_buffer_float")) {
		console.error("Float texture missing");
		return;
	}

	sabView = new Float32Array(msg.physicsSAB);

	const texData = new Float32Array(width * height * 4);
	texData.set(new Float32Array(msg.restPosBuffer));

	const inputTex = gl.createTexture();
	gl.activeTexture(gl.TEXTURE0); // Bind to unit 0
	gl.bindTexture(gl.TEXTURE_2D, inputTex);
	gl.texImage2D(
		gl.TEXTURE_2D,
		0,
		gl.RGBA32F,
		width,
		height,
		0,
		gl.RGBA,
		gl.FLOAT,
		texData
	);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

	// 3. OUTPUT TEXTURE & FBO
	// We need a place to render the results (wght, wdth, ital, cont)
	// so we can read them back as floats.
	const outputTex = gl.createTexture();
	gl.activeTexture(gl.TEXTURE1); // Temp bind to configure
	gl.bindTexture(gl.TEXTURE_2D, outputTex);
	// null = allocate memory but don't fill it yet
	gl.texImage2D(
		gl.TEXTURE_2D,
		0,
		gl.RGBA32F,
		width,
		height,
		0,
		gl.RGBA,
		gl.FLOAT,
		null
	);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

	// Create the Framebuffer
	fbo = gl.createFramebuffer()!;
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	// Attach the output texture to the "Color 0" slot of the FBO
	gl.framebufferTexture2D(
		gl.FRAMEBUFFER,
		gl.COLOR_ATTACHMENT0,
		gl.TEXTURE_2D,
		outputTex,
		0
	);

	// Check status
	if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
		console.error("FBO Incomplete");
	}

	// Unbind FBO (go back to screen) for safety, though we'll rebind in loop
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);

	// 4. Model Setup
	model = defQuadModel({ uv: false });
	model.shader = defShader(gl, physicsShader(width, height));
	compileModel(gl, model);

	requestAnimationFrame(loop);
}

function loop(t: number) {
	if (!gl) return;

	// 1. Update Uniforms
	// Important: Tell shader that u_restPos is on Texture Unit 0
	model.uniforms!.u_restPos = 0;
	model.uniforms!.u_time = t * 0.001;
	model.uniforms!.u_stress = state.stress;
	model.uniforms!.u_activePage = state.activePage;

	// 2. Bind the OFFSCREEN FBO
	// This redirects drawing from the canvas to our Float Texture
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	gl.viewport(0, 0, width, height);

	// 3. Draw
	draw(model);

	// 4. Read Pixels
	// Now valid because the bound framebuffer (fbo) is RGBA32F (Float)
	gl.readPixels(0, 0, width, height, gl.RGBA, gl.FLOAT, sabView);

	// Heartbeat
	self.postMessage({ type: "TICK", time: t });

	requestAnimationFrame(loop);
}
