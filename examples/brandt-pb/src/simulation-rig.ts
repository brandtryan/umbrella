import { compileProgram } from "@thi.ng/webgl"; // Assuming standard util or we write a minimal one
import { targetGLSL } from "@thi.ng/shader-ast-glsl";
import { physicsShader } from "./physics-shader.js";

// We use Float32Array for high precision (Source 23)
const BYTES_PER_FLOAT = 4;
const FLOATS_PER_VEC2 = 2;

export class SimulationRig {
	gl: WebGL2RenderingContext;
	program: WebGLProgram;

	// The Double-Buffered State ("Ping-Pong" - Source 60)
	// We need two buffers for every attribute that changes over time.
	buffers: {
		position: [WebGLBuffer, WebGLBuffer]; // Read/Write Pair
		prevPos: [WebGLBuffer, WebGLBuffer]; // Read/Write Pair
	};

	// Static State (Never changes, so only 1 buffer needed)
	anchorBuffer: WebGLBuffer;

	// Transform Feedback Containers
	// These tell the GPU which buffers to capture the output into.
	tfs: [WebGLTransformFeedback, WebGLTransformFeedback];

	// State Tracking
	count: number;
	readIndex = 0; // 0 = Read from A, Write to B
	writeIndex = 1;

	// CPU Mirror for Readback (Source 74)
	readbackBuffer: Float32Array;

	constructor(gl: WebGL2RenderingContext, initialPositions: Float32Array) {
		this.gl = gl;
		this.count = initialPositions.length / FLOATS_PER_VEC2;
		this.readbackBuffer = new Float32Array(initialPositions.length);

		// 1. Compile the Physics Shader
		// CRITICAL: We must specify the "Varyings" (Outputs) BEFORE linking.
		// These match the 'output' names in your physics-shader.ts AST.
		this.program = this.createTransformFeedbackProgram(gl, physicsShader, [
			"v_nextPos",
			"v_nextPrevPos",
		]);

		// 2. Initialize Buffers
		// We create the "Ping" (0) and "Pong" (1) buffers.
		this.buffers = {
			position: [
				this.createBuffer(initialPositions), // Buffer A (Start state)
				this.createBuffer(initialPositions), // Buffer B (Empty/Copy)
			],
			prevPos: [
				this.createBuffer(initialPositions), // Velocity starts at 0 (pos - prevPos = 0)
				this.createBuffer(initialPositions),
			],
		};

		// Anchors are static (Source 102), so we just upload them once.
		this.anchorBuffer = this.createBuffer(initialPositions);

		// 3. Create Transform Feedbacks
		// TF Object 0: Writes to Index 0 Buffers
		// TF Object 1: Writes to Index 1 Buffers
		this.tfs = [
			this.createTF(this.buffers.position[0], this.buffers.prevPos[0]),
			this.createTF(this.buffers.position[1], this.buffers.prevPos[1]),
		];

		// 4. Global Setup
		// Source 57: Discard Rasterizer. We are not drawing pixels in this pass.
		// We do this permanently for this rig.
		gl.enable(gl.RASTERIZER_DISCARD);
	}

	/**
	 * The Main Physics Step (Runs 60fps)
	 */
	update(time: number, noiseTex: WebGLTexture) {
		const gl = this.gl;
		const read = this.readIndex;
		const write = this.writeIndex;

		gl.useProgram(this.program);

		// A. Bind Uniforms
		// (You would map your 'uniform' AST nodes to these locations)
		// this.setUniform("u_time", time);
		// this.setUniform("u_noiseTex", 0);
		// ... set stiffness, damping, etc.

		// B. Bind Input Attributes (Read from 'read' buffers)
		// a_position
		this.bindAttrib("a_position", this.buffers.position[read]);
		// a_prevPos
		this.bindAttrib("a_prevPos", this.buffers.prevPos[read]);
		// a_anchor (Static)
		this.bindAttrib("a_anchor", this.anchorBuffer);

		// C. Bind Transform Feedback (Write to 'write' buffers)
		gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, this.tfs[write]);

		// D. Execute Physics Kernel
		// Source 58: "Vertex shader... as pure compute kernel"
		gl.beginTransformFeedback(gl.POINTS);
		gl.drawArrays(gl.POINTS, 0, this.count);
		gl.endTransformFeedback();

		// E. Cleanup & Swap
		gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
		this.swap();
	}

	/**
	 * Readback to CPU (Source 74)
	 * Retrieves the latest positions to send to the DOM.
	 */
	getResults(): Float32Array {
		const gl = this.gl;
		const read = this.readIndex; // The buffer that was just written to becomes the read buffer

		gl.bindBuffer(
			gl.TRANSFORM_FEEDBACK_BUFFER,
			this.buffers.position[read]
		);

		// Blocking read (gl.getBufferSubData).
		// For 'Keep' Source 77 compliance (Async), we would use fences here,
		// but Source 74 suggests minimization first.
		gl.getBufferSubData(
			gl.TRANSFORM_FEEDBACK_BUFFER,
			0,
			this.readbackBuffer
		);
		gl.bindBuffer(gl.TRANSFORM_FEEDBACK_BUFFER, null);

		return this.readbackBuffer;
	}

	private swap() {
		this.readIndex = this.writeIndex;
		this.writeIndex = (this.writeIndex + 1) % 2;
	}

	// --- Helpers ---

	private createBuffer(data: Float32Array): WebGLBuffer {
		const gl = this.gl;
		const buffer = gl.createBuffer()!;
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_COPY);
		return buffer;
	}

	private createTF(
		posBuffer: WebGLBuffer,
		prevPosBuffer: WebGLBuffer
	): WebGLTransformFeedback {
		const gl = this.gl;
		const tf = gl.createTransformFeedback()!;
		gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
		// Bind the buffers to the global "Base" points 0 and 1
		gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, posBuffer);
		gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, prevPosBuffer);
		gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
		return tf;
	}

	private bindAttrib(name: string, buffer: WebGLBuffer) {
		const gl = this.gl;
		const loc = gl.getAttribLocation(this.program, name);
		if (loc === -1) return;
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.enableVertexAttribArray(loc);
		gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
	}

	private createTransformFeedbackProgram(
		gl: WebGL2RenderingContext,
		ast: any,
		varyings: string[]
	): WebGLProgram {
		// Generate GLSL
		const glslGen = targetGLSL({
			version: 300,
			type: "vs",
			prelude: "#version 300 es\nprecision highp float;",
		});
		const vsSource = glslGen(ast);
		const fsSource = `#version 300 es\nvoid main(){}`; // Dummy FS

		const program = gl.createProgram()!;
		const vs = this.compileShader(gl, vsSource, gl.VERTEX_SHADER);
		const fs = this.compileShader(gl, fsSource, gl.FRAGMENT_SHADER);

		gl.attachShader(program, vs);
		gl.attachShader(program, fs);

		// CRITICAL: Configure TF before linking
		gl.transformFeedbackVaryings(program, varyings, gl.SEPARATE_ATTRIBS);

		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error("Link Error:", gl.getProgramInfoLog(program));
			console.error("VS Source:", vsSource);
		}
		return program;
	}

	private compileShader(
		gl: WebGL2RenderingContext,
		src: string,
		type: number
	) {
		const shader = gl.createShader(type)!;
		gl.shaderSource(shader, src);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			console.log(src);
		}
		return shader;
	}
}
