import { AttribPool } from "@thi.ng/vector-pools";

// 1. Define the expected message types for type safety
type InitMessage = {
	type: "INIT";
	canvas: OffscreenCanvas;
	physicsSAB: SharedArrayBuffer;
	restPosBuffer: ArrayBuffer;
	wordCount: number;
	width: number;
	height: number;
};

type UpdateMessage = { type: "UPDATE"; mouse: [number, number] };
type WorkerMessage = InitMessage | UpdateMessage;

let gl: WebGL2RenderingContext | null = null;

// 2. Set up the Standard Message Listener
// We use the standard 'self.onmessage' to catch the initial handshake.
self.onmessage = (e) => {
	if (e.data.type === "INIT") {
		const msg = e.data as InitMessage; // Cast for safety
		const canvas = msg.canvas;

		// This is critical for preventing the browser from throttling the GPU.
		gl = canvas.getContext("webgl2", {
			powerPreference: "high-performance",
			alpha: true,
			desynchronized: true, // Optional: reduces latency
		});

		if (!gl) {
			console.error("WebGL 2.0 not available");
			return;
		}

		const ext = gl.getExtension("EXT_color_buffer_float");
		if (!ext) {
			console.error(
				"CRITICAL: EXT_color_buffer_float not supported. Simulation will fail."
			);
		}

		console.log("Worker: GPGPU Context Initialized", {
			renderer: gl.getParameter(gl.RENDERER),
			vendor: gl.getParameter(gl.VENDOR),
		});

		// 2. Rehydrate Physics State (The Shared Brain)
		// Note: We use msg.wordCount here
		const physicsState = new AttribPool({
			mem: {
				buf: msg.physicsSAB,
				size: msg.physicsSAB.byteLength,
				align: 16,
				skipInitialization: true, // Critical!
			},
			num: msg.wordCount,
			// Match main thread Schema EXACTLY
			attribs: {
				wght: { type: "f32", byteOffset: 0, size: 1, default: 300 },
				wdth: { type: "f32", byteOffset: 4, size: 1, default: 100 },
				ital: { type: "f32", byteOffset: 8, size: 1, default: 0 },
				cont: { type: "f32", byteOffset: 12, size: 1, default: 0 },
			},
		});

		// Create Data Texture
		const restTexture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, restTexture);

		// IMPORTANT: WebGL expects a buffer big enough for Width * Height.
		// If wordCount < 64*64, the buffer might be too small.
		// We pad it to fit the texture dimensions.
		const textureSize = msg.width * msg.height * 4; // 4 floats per pixel
		const fullBuffer = new Float32Array(textureSize);
		fullBuffer.set(new Float32Array(msg.restPosBuffer)); // Copy data in

		gl.texImage2D(
			gl.TEXTURE_2D,
			0,
			gl.RGBA32F,
			msg.width, // Use dynamic width
			msg.height, // Use dynamic height
			0,
			gl.RGBA,
			gl.FLOAT,
			fullBuffer // Use the padded buffer
		);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

		console.log("Worker: Physics Ready. Words:", msg.wordCount);
	}
};
