import { ECS } from "@thi.ng/ecs";

// ========================================================================
// 1. DATA MODEL (Strict Typing)
// ========================================================================
interface CompSpecs {
	// The link to the DOM (just a string ID for now)
	domID: string;

	// Physical Layout (Mocking getBoundingClientRect)
	// [x, y, width, height]
	rect: Float32Array;

	// The Physics of the Font Axes
	// [wght, wdth, ital, cont]
	tic_pos: Float32Array;
	tic_vel: Float32Array;
	tic_prev: Float32Array; // Essential for Verlet integration
}

// ========================================================================
// 2. INITIALIZATION
// ========================================================================
export const initPhase1 = () => {
	// 1. Create the World
	const ecs = new ECS<CompSpecs>({ capacity: 10 });

	// 2. Define Components
	const domID = ecs.defComponent({
		id: "domID",
		default: () => "undefined_id",
	})!;

	const rect = ecs.defComponent({
		id: "rect",
		type: "f32",
		size: 4,
	})!;

	const tic_pos = ecs.defComponent({
		id: "tic_pos",
		type: "f32",
		size: 4,
		default: () => [300, 100, 0, 0], // Standard font defaults
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
		default: () => [300, 100, 0, 0], // Match pos for 0 velocity
	})!;

	// 3. SEEDING (The Mock Data)
	// We create 5 "Virtual Words" to prove the memory works.
	// No DOM Access yet!
	const MOCK_WORDS = ["w0", "w1", "w2", "w3", "w4"];

	MOCK_WORDS.forEach((id, i) => {
		// We calculate fake coordinates just to fill the buffer
		const fakeX = i * 100;
		const fakeY = 200;

		const entityID = ecs.defEntity({
			domID: id,
			rect: new Float32Array([fakeX, fakeY, 50, 20]), // Mock Rect
			tic_pos: new Float32Array([300, 100, 0, 0]),
			tic_prev: new Float32Array([300, 100, 0, 0]),
		});

		console.log(`Created Entity #${entityID} for DOM ID: ${id}`);
	});

	return { ecs, domID, rect, tic_pos, tic_vel, tic_prev };
};

// ========================================================================
// 3. EXECUTION
// ========================================================================
const system = initPhase1();

// VERIFICATION: Check the raw memory
// We expect 5 entities * 4 floats = 20 numbers in the buffer
console.log("\n[ SYSTEM REPORT ]");
console.log(
	`ECS Capacity Used: ${system.ecs.idgen.used} / ${system.ecs.idgen.capacity}`
);
console.log("Tic Position Memory (First 20 floats):");
console.log(system.tic_pos.vals.slice(0, 20));
// Should look like: [300, 100, 0, 0, 300, 100, 0, 0, ...]
