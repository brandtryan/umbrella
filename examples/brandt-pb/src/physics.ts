import {
	type Lit,
	type Term,
	type Type,
	type Vec2Sym,
} from "@thi.ng/shader-ast";
import {
	compileModel,
	defQuadModel,
	defShader,
	draw,
	type ModelSpec,
	type GLSL,
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
	$z, // Added $z import
	type FloatSym,
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
const additiveNoise = (uv: Vec2Sym, time: FloatSym) =>
	additive("vec2", snoise2, 4)(add(uv, time), vec2(2), float(0.5));

const physicsShader = (w: number, h: number) => ({
	vs: (gl: GLSL, _: unknown, attribs: any) => [
		//@ts-ignore
		defMain(() => {
			assign(gl.gl_Position<"any">, vec4(attribs.position, 0, 1));
		}),
	],
	fs: (gl: GLSL, unis: PhysicsUniforms, _: unknown, outs: any) => [
		defMain(() => {
			// 1. Explicitly create a symbol for UV
			//@ts-ignore
			let uv: Vec2Sym = sym(div(gl.gl_FragCoord.xy, vec2(w, h)));

			// 2. Explicitly create a symbol for the texture read (was _sfe)
			let restData = sym(texture(unis.u_restPos, uv));

			// Activity check
			let dist = abs(sub($z(restData), unis.u_activePage));
			let isActive = smoothstep(float(0.8), float(0.2), sym(dist));

			// Physics Calculations
			// 3. Explicitly create a symbol for the result (was _sff)
			let noiseVal = fit1101(additiveNoise(uv, unis.u_time));
			// We MUST cast noiseVal to vec4 or vec3 if we use it in mix/mul with vectors,
			// but here it looks like we are using it as a float scalar, which is fine.

			// tic is used multiple times, so we sym() it too
			let tic = sym(
				mul(noiseVal, mul(unis.u_stress as Term<"float">, isActive))
			);

			return [
				// 4. IMPORTANT: We must "declare" our symbols here
				uv,
				tic,

				// 5. Now we can use them
				assign(
					outs.fragColor,
					vec4(
						add(float(300), mul(tic, float(400))), // wght
						mix(float(100), float(85), tic), // wdth
						mul(tic, float(12)), // ital
						float(0) // cont
					)
				),
			];
		}),
	],
	attribs: { position: "vec2" },
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

	sabView = new Float32Array(msg.physicsSAB, 32);

	const texData = new Float32Array(width * height * 4);
	texData.set(new Float32Array(msg.restPosBuffer));

	const tex = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, tex);
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

	model = compileModel(gl, {
		...defQuadModel({ uv: false }),
		shader: defShader(gl, <any>physicsShader(width, height)),
		uniforms: {},
	});

	requestAnimationFrame(loop);
}

function loop(t: number) {
	if (!gl) return;

	model.uniforms!.u_restPos = 0;
	model.uniforms!.u_time = t * 0.001;
	model.uniforms!.u_stress = state.stress;
	model.uniforms!.u_activePage = state.activePage;

	gl.viewport(0, 0, width, height);
	draw(model);

	gl.readPixels(0, 0, width, height, gl.RGBA, gl.FLOAT, sabView);

	requestAnimationFrame(loop);
}
