// This is it - the best hands on with a pro - seems so easy until you are
// on your own trying to do it! Accompanying video:
// thi.ng stream #2 (2020-07-27)-720p-hls.mp4

import { assign, defMain, vec4 } from "@thi.ng/shader-ast";
import {
	FX_SHADER_SPEC_UV,
	compileModel,
	defQuadModel,
	defShader,
	draw,
	glCanvas,
	type ModelSpec,
	LOGGER,
	defTexture,
	type Texture,
	type FBO,
	type Shader,
	TextureFilter,
	defFBO,
} from "@thi.ng/webgl";
import { ConsoleLogger } from "@thi.ng/logger";
import { type OpSpec } from "./api";

LOGGER.set(new ConsoleLogger("webgl", "DEBUG"));

interface AppCtx {
	width: number;
	height: number;
	texSize: number;
	canvas: HTMLCanvasElement;
	gl: WebGLRenderingContext;
	opQuad: ModelSpec;
}

const { canvas, gl } = glCanvas({
	width: 1000,
	height: 1000,
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
	opQuad: compileModel(gl, defQuadModel({ center: true })), // quad for geometry
};

// re-usable 'construct' so we need a texture for each shader to write to.
// we will also need a framebuffer for the texture to render to

class OpNode {
	tex: Texture;
	fbo: FBO;
	shader: Shader;

	constructor(
		public ctx: AppCtx,
		spec: OpSpec,
	) {
		// define a texture for each
		// since we don't have an image for this texture
		// we want to provide an empty shell for it
		this.tex = defTexture(gl, {
			width: ctx.texSize,
			height: ctx.texSize,
			filter: TextureFilter.LINEAR, // linear for interpolation
			image: null,
		});
		// now we need to wrap that texture around a framebuffer object
		this.fbo = defFBO(gl, { tex: [this.tex] });

		this.shader = defShader(gl, {
			//shader for color/light, in this case a FUNCTION
			//otherwise would have to write a string of glsl!
			...FX_SHADER_SPEC_UV,
			fs: (gl, unis, ins, outs) => [
				defMain(() => [assign(outs.fragColor, vec4(ins.v_uv, 0, 1))]),
			],
		});

		// gl.viewport(0, 0, CTX.width, CTX.height);
		//  we can just combine the geometry with the light/color!
		// draw({ ...CTX.opQuad, shader });
	}
}
