import { red } from "@thi.ng/colored-noise";
import { ConsoleLogger, ROOT } from "@thi.ng/logger";
import { V2, V4 } from "@thi.ng/shader-ast";
import { mapcat, normRange, repeatedly } from "@thi.ng/transducers";
import { Vec2 } from "@thi.ng/vectors";
import {
	BLEND_NORMAL,
	DrawMode,
	TextureFormat,
	clearCanvas,
	defMultiPass,
	compileModel,
	defQuadModel,
	glCanvas,
} from "@thi.ng/webgl";

ROOT.set(new ConsoleLogger());
// const GL = targetGLSL({ version: GLSLVersion.GLES_300 }); // WebGL

const NUM_POINTS = 256;
const VEL_GAIN = 0.005;
const VEL_BIAS = 0.0156 * VEL_GAIN;

const BG_COL = [0, 0, 0, 1];

const POSITIONS = new Float32Array(
	mapcat((x) => [x * 2 - 1, -1], normRange(NUM_POINTS - 1))
);

const POINTS = Vec2.mapBuffer(POSITIONS);

const VELOCITIES = [
	...repeatedly(() => red({ bins: 512, scale: VEL_GAIN }), NUM_POINTS),
];

const W = window.innerWidth;
const H = window.innerHeight;

const { gl } = glCanvas({
	width: W,
	height: H,
	parent: document.body,
	version: 2,
});

const pipeline = defMultiPass({
	gl,
	width: gl.drawingBufferWidth,
	height: gl.drawingBufferHeight,
	textures: {
		stage1: { format: TextureFormat.RGBA32F },
	},
	passes: [
		{
			model: {
				attribs: {
					position: { data: POSITIONS, size: 2 },
				},
				num: NUM_POINTS,
				mode: DrawMode.LINE_STRIP,
			},
			vs: `void main() { gl_Position = vec4(position, 0., 1.); }`,
			fs: `void main() { output0 = color; }`,
			inputs: [],
			outputs: ["stage1"],
			attribs: {
				position: V2,
			},
			uniforms: {
				color: [V4, [99, 99, 99, 0.0000099]],
			},
			state: {
				blend: true,
				blendFn: BLEND_NORMAL,
			},
		},

		{
			fs: `void main() { fragColor = texelFetch(input0, ivec2(gl_FragCoord.xy), 0); }`,
			inputs: ["stage1"],
			outputs: [],
		},
	],
});

pipeline.fbos[0].bind();
clearCanvas(gl, BG_COL);
pipeline.fbos[0].unbind();

const update = () => {
	// update y-position of vertices using their noise generators
	POINTS.forEach((p, i) => (p.y += VELOCITIES[i].next().value! + VEL_BIAS));
	// update corresponding WebGL buffer
	pipeline.models[0].attribs.position.buffer!.set(POSITIONS);
	// execute pipeline
	pipeline.update();
	// retrigger
	requestAnimationFrame(update);
};

update();
