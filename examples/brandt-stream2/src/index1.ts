import { assign, defMain, vec4 } from "@thi.ng/shader-ast";
import {
	FX_SHADER_SPEC_UV,
	compileModel,
	defQuadModel,
	defShader,
	draw,
	glCanvas,
	LOGGER,
} from "@thi.ng/webgl";
import type { ModelSpec } from "@thi.ng/webgl";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";

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

// need variable to hold all this stuff above
const CTX: AppCtx = {
	canvas,
	gl,
	width: canvas.width,
	height: canvas.height,
	texSize: 256,
	// Geometry
	opQuad: compileModel(gl, defQuadModel()),
};

const shader = defShader(gl, {
	// Shader preset for MultiPass
	...FX_SHADER_SPEC_UV,
	fs: (gl, unis, ins, outs) => [
		defMain(() => [
			// 'assign' is what take our ts (vec4) and makes glsl "outs.fragColor"
			assign(outs.fragColor, vec4(ins.v_uv, 0, 1)),
		]),
	],
});

// to see something on screen, combine the two things (CTX<geometry>, shader<color>)
// draw({ ...CTX.opQuad, shader });

/* texture usually is square, but our preset made our full-viewport.
"Normal" texture:
     ------1,1
	 |    |
	 |    |
-1,-1------
*/

// if we want to use our actual 256 square size:
gl.viewport(0, 0, CTX.texSize, CTX.texSize);
// ...and draw:
draw({ ...CTX.opQuad, shader });

// what if we want to make multiple variations of a shader? So that they can
// look at each others textures, or even be combined to create new image?
// Create a shader spec (we'll call it "OpSpec") api
// ...cont. in index2.ts

// enabling logger above and glsl compiled is shown in console
