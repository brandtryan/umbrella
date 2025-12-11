// 1. Define the expected message types for type safety
type InitMessage = {
	type: "INIT";
	canvas: OffscreenCanvas;
	width: number;
	height: number;
};
type UpdateMessage = { type: "UPDATE"; mouse: [number, number] };
type WorkerMessage = InitMessage | UpdateMessage;

let gl: WebGL2RenderingContext | null = null;

// 2. Set up the Standard Message Listener
// We use the standard 'self.onmessage' to catch the initial handshake.
self.onmessage = (e: MessageEvent<WorkerMessage>) => {
	const msg = e.data;

	// ------------------------------------------------------------------
	// HANDSHAKE PHASE: One-time setup
	// ------------------------------------------------------------------
	if (msg.type === "INIT") {
		const canvas = msg.canvas;

		// Guide Source 19: Request 'high-performance' power preference
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

		// Guide Source 23: Verify Floating Point Extensions
		// Essential for "long-term numerical stability" in the simulation.
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

		// Start your simulation loop here
		// requestAnimationFrame(renderLoop);
	}

	// ------------------------------------------------------------------
	// UPDATE PHASE: Continuous Data Flow
	// ------------------------------------------------------------------
	else if (msg.type === "UPDATE") {
		if (!gl) return;

		// Update your simulation state with new mouse/scroll data
		// e.g., updateUniforms(msg.mouse);
	}
};

function renderLoop(time: number) {
	// This loop runs entirely on the worker thread.
	// Perform simulation steps...

	requestAnimationFrame(renderLoop);
}
