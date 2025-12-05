import { ECS } from "@thi.ng/ecs";
import { fromRAF } from "@thi.ng/rstream";
import { initGraph, node, node1 } from "@thi.ng/rstream-graph";
import { map } from "@thi.ng/transducers";
import { defAtom } from "../../../packages/atom/src/atom";

// ========================================================================
// 1. DATA MODEL
// ========================================================================
interface CompSpecs {
	domID: string;
	rect: Float32Array;
	// [wght, wdth, ital, cont]
	tic_pos: Float32Array;
	tic_vel: Float32Array;
	tic_prev: Float32Array;
}

// ========================================================================
// 2. SETUP & INIT
// ========================================================================
export const initSystem = () => {
	const ecs = new ECS<CompSpecs>({ capacity: 10 });

	const domID = ecs.defComponent({ id: "domID", default: () => "undef" })!;
	const rect = ecs.defComponent({ id: "rect", type: "f32", size: 4 })!;

	// Physics Components
	const tic_pos = ecs.defComponent({
		id: "tic_pos",
		type: "f32",
		size: 4,
		default: () => [300, 100, 0, 0],
	})!;
	const tic_vel = ecs.defComponent({
		id: "tic_vel",
		type: "f32",
		size: 4,
		default: () => [0, 0, 0, 0],
	})!;
	const tic_prev = ecs.defComponent({
		id: "tic_prev",
		type: "f32",
		size: 4,
		default: () => [300, 100, 0, 0],
	})!;

	// Seed 5 Mock Entities
	["w0", "w1", "w2", "w3", "w4"].forEach((id, i) => {
		ecs.defEntity({
			domID: id,
			rect: new Float32Array([i * 100, 200, 50, 20]),
			tic_pos: new Float32Array([300, 100, 0, 0]),
			tic_prev: new Float32Array([300, 100, 0, 0]),
		});
	});

	return { ecs, tic_pos, tic_prev };
};

// ========================================================================
// 3. THE REACTIVE GRAPH
// ========================================================================
const run = () => {
	const system = initSystem();

	// 1. The Heartbeat Source
	const raf = fromRAF();

	// 2. The Graph Definition
	const graph = initGraph(defAtom({}), {
		// NODE: Physics Simulation
		// Inputs: Time (from RAF)
		// Outputs: None (It mutates ECS memory directly)
		core_simulation: {
			// FIX: Use 'node1' instead of 'node'.
			// 'node' passes an object { time: number }, whereas 'node1' passes the raw number value.
			fn: node1(
				map((src) => {
					// A. Get Raw Memory Views
					const pos = system.tic_pos.vals;
					const prev = system.tic_prev.vals;

					// B. The Physics Loop (Iterate 5 entities * 4 axes = 20 items)
					// In a real app, use stride logic. Here, we just loop the buffer.
					for (let i = 0; i < pos.length; i++) {
						// 1. Verlet: Velocity = Current - Previous
						const velocity = pos[i] - prev[i];

						// 2. Save Current to Previous (for next frame)
						prev[i] = pos[i];

						// 3. Apply Forces (Simple Sine Wave Wiggle for Testing)
						// We modify 'wght' (index 0, 4, 8...) specifically
						if (i % 4 === 0) {
							const force = Math.sin(src * 0.005 + i) * 2.0;
							pos[i] += velocity + force;

							// Damping (Friction)
							pos[i] *= 0.98;
						}
					}

					// C. Return something for debugging (optional)
					return pos[0]; // Return the weight of the 1st word
				})
			),
			ins: {
				src: { stream: () => raf },
			},
			outs: {
				"*": "debug_console", // Pipe output to a dummy console node
			},
		},

		// NODE: Debug Logger (Just to prove it runs)
		debug_console: {
			fn: node(
				map((val) => {
					// Log only occasionally to save console spam
					if (Math.random() < 0.05) {
						console.log(
							`[Phase 2] Word 0 Weight: ${val.toFixed(2)}`
						);
					}
				})
			),
			ins: {},
			outs: {},
		},
	});
	graph.core_simulation.node;
	graph.debug_console.node;
};

// Start the engine
run;
