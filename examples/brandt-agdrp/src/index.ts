import "./absLayout";
import { initReactor, run } from "./sim/reactor";

// 1. The Safety Check
// We wrap the ignition in a try/catch block. If the GPU fails to initialize
// (e.g., missing WebGL2 or floating point texture support), we want to know immediately.
try {
	console.log("⚡ Initializing Kinetic Typography Engine...");

	// 2. The Allocation (Potential Energy)
	// This compiles shaders, creates FBOs, and allocates GPU memory.
	const state = initReactor();
	console.log("✅ Reactor Online. GPU Context Secured.");

	// 3. The Ignition (Kinetic Energy)
	// This starts the requestAnimationFrame loop.
	run(state);
	console.log("🚀 Simulation Running.");
} catch (error) {
	console.error("💥 Critical Reactor Failure:", error);

	// Fallback for the user
	document.body.innerHTML = `
        <div style="color: red; font-family: monospace; padding: 20px;">
            <h1>FATAL ERROR</h1>
            <p>${(error as Error).message}</p>
            <p>Ensure your browser supports WebGL2 and EXT_color_buffer_float.</p>
        </div>
    `;
}
