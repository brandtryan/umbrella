import { ECS } from "@thi.ng/ecs";

// 2. The Master Schema
export interface CompSpecs {
	// --- PHYSICS (MemMapped) ---
	// For TypedArrays, the Spec defines the backing array type

	rest: Float32Array;

	// u_state group:
	state: Float32Array;
}

export const ecs = new ECS<CompSpecs>({});

export const rest = ecs.defComponent({
	id: "rest",
	type: "f32",
	size: 4,
});

export const state = ecs.defComponent({
	id: "state",
	type: "f32",
	size: 4,
});
