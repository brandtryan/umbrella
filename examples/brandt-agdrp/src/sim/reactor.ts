import { sym, program } from "@thi.ng/shader-ast";
import {
	glCanvas,
	defMultiPass,
	TextureFormat,
	compileModel,
	defShader,
	defQuadModel,
	draw,
	type ModelSpec,
	type Multipass,
} from "@thi.ng/webgl";
import { GLSLVersion, targetGLSL } from "@thi.ng/shader-ast-glsl";
// Import the specific functions we exported
import { updateShaderSpec } from "../shaders/update";
import { debugShaderSpec } from "../shaders/debug";

export interface ReactorState {
	gl: WebGL2RenderingContext;
	canvas: HTMLCanvasElement;
	pipeline: Multipass;
	debugModel: ModelSpec;
	stats: {
		frameCount: number;
		lastTime: number;
		fps: number;
	};
}

export const initReactor = (): ReactorState => {
	const { gl, canvas } = glCanvas({
		parent: document.body,
		width: 512,
		height: 512,
		version: 2,
		opts: {
			alpha: false,
			depth: false,
			stencil: false,
			powerPreference: "high-performance",
			antialias: false,
		},
	});

	if (!gl) throw new Error("WebGL2 not supported");
	const gl2 = gl as WebGL2RenderingContext;

	if (!gl2.getExtension("EXT_color_buffer_float")) {
		console.warn("Float textures not supported.");
	}
	// FIX: Define TWO transpilers.
	// One for Vertex Shaders (handles attributes/outs)
	const glslVS = targetGLSL({
		version: GLSLVersion.GLES_300,
		type: "vs",
		versionPragma: false,
	});
	const glslFS = targetGLSL({
		version: GLSLVersion.GLES_300,
		type: "fs",
		versionPragma: false,
	});
	// 1. The Physics Pipeline
	const pipeline = defMultiPass({
		gl: gl2,
		width: 64,
		height: 64,
		textures: {
			state: { format: TextureFormat.RGBA32F },
		},
		passes: [
			{
				// Use the specific transpiler for each stage
				vs: glslVS(updateShaderSpec.vs),
				fs: glslFS(updateShaderSpec.fs),

				// We REMOVE manual attribs/varyings here because
				// our 'program' exports now include the declarations.
				attribs: {
					position: "vec2",
					uv: "vec2",
				},
				varying: {
					v_uv: "vec2",
				},
				outputs: ["state"],
				inputs: ["state"],
				uniforms: {
					u_time: "float",
				},
				model: defQuadModel({ uv: true }),
			},
		],
	});

	// 2. The Visualizer
	const quadGeo = defQuadModel({ uv: true });

	const debugModel: any = compileModel(gl2, {
		shader: defShader(gl2, {
			vs: glslVS(debugShaderSpec.vs),
			fs: glslFS(debugShaderSpec.fs),
			// Reactor generates declarations
			attribs: {
				position: "vec2",
				uv: "vec2",
			},
			varying: {
				v_uv: "vec2",
			},
			uniforms: {
				state: "sampler2D",
			},
		}),
		attribs: quadGeo.attribs,
		indices: quadGeo.indices,
		num: quadGeo.num,
		mode: quadGeo.mode,
		textures: [pipeline.textures.state],
	});

	return {
		gl: gl2,
		canvas,
		pipeline,
		debugModel,
		stats: { frameCount: 0, lastTime: 0, fps: 0 },
	};
};

const updateHUD = (state: ReactorState, time: number) => {
	const output = document.getElementById("debug-output");
	if (!output) return;

	const delta = time - state.stats.lastTime;
	if (delta > 0) {
		state.stats.fps = 1000 / delta;
	}
	state.stats.lastTime = time;
	state.stats.frameCount++;

	output.innerText = `
TIME: ${time.toFixed(0)}ms
FPS : ${state.stats.fps.toFixed(0)}
FRAME: ${state.stats.frameCount}
    `.trim();
};

export const run = (state: ReactorState) => {
	const loop = (time: number) => {
		const t = time * 0.001;
		state.pipeline.update(t);

		state.gl.bindFramebuffer(state.gl.FRAMEBUFFER, null);
		state.gl.viewport(0, 0, state.canvas.width, state.canvas.height);

		draw(state.debugModel);
		updateHUD(state, time);
		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);
};
