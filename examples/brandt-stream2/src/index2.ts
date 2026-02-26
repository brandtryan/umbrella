// what if we want to make multiple variations of a shader? So that they can
// look at each others textures, or even be combined to create new image?
// Create a shader spec (we'll call it "OpSpec") (api.ts)
import { assign, defMain, fract, vec4 } from "@thi.ng/shader-ast";
import {
	FX_SHADER_SPEC_UV,
	compileModel,
	defQuadModel,
	defShader,
	draw,
	glCanvas,
	LOGGER,
	defTexture,
	TextureFilter,
	defFBO,
} from "@thi.ng/webgl";
import type { FBO, ModelSpec, Shader, Texture } from "@thi.ng/webgl";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import type { OpSpec } from "./api";

LOGGER.set(new ConsoleLogger());

interface AppCtx {
	width: number;
	height: number;
	texSize: number;
	canvas: HTMLCanvasElement;
	gl: WebGLRenderingContext;
	opQuad: ModelSpec;
}

const { canvas, gl } = glCanvas({
	width: 1280,
	height: 720,
	autoScale: false,
	version: 2,
	parent: document.body,
});

const CTX: AppCtx = {
	canvas,
	gl,
	width: canvas.width,
	height: canvas.height,
	texSize: 256,
	// Geometry
	opQuad: compileModel(gl, defQuadModel()),
};

// create class "OpNode" to make shader "re-usable"
class OpNode {
	// need texture for shader to write to:
	tex: Texture;
	// need buffer to render to:
	fbo: FBO;
	shader: Shader;

	constructor(public ctx: AppCtx, public spec: OpSpec) {
		// define texture object
		this.tex = defTexture(gl, {
			width: ctx.texSize,
			height: ctx.texSize,
			filter: TextureFilter.LINEAR, // sets up for interpolation
			image: null,
		});
		this.fbo = defFBO(gl, { tex: [this.tex] });
		this.shader = defShader(gl, {
			...FX_SHADER_SPEC_UV,
			// we want to pass in fn via spec config option
			fs: spec.main, // autofilled by looking at our OpNode spec
			// unis for our spec
			uniforms: {
				u_in0: ["sampler2D", 0],
				u_in1: ["sampler2D", 1],
				u_in2: ["sampler2D", 2],
				u_in3: ["sampler2D", 3],
				// for animated texture we want a time var
				u_time: ["float", 0],
				// and then merged with user unis:
				...spec.unis,
			},
		});
	}

	// next we need an update function
	update(time: number) {
		// sets viewport to texture size
		gl.viewport(0, 0, CTX.texSize, CTX.texSize);
		// spreads out opQuad and ensures shader is this.shader, textures are this.spec.inputs, etc.
		draw({
			...CTX.opQuad,
			shader: this.shader,
			textures: this.spec.inputs,
			uniforms: { u_time: time },
		});
	}
}
const op = new OpNode(CTX, {
	main: (gl, unis, ins, outs) => [
		// user added fract(unis.u_time) - fract takes just vales after whole number
		defMain(() => [
			assign(outs.fragColor, vec4(ins.v_uv, fract(unis.u_time), 1)),
		]),
	],
	unis: {},
	inputs: [],
});

// no draw call - just update
// update with a time (0-1)
op.update(0.88888);
