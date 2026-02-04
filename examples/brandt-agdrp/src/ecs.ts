import { ECS } from "@thi.ng/ecs";

// The Schema
export interface CompSpecs {
	// u_rest group:
	roots: Float32Array;

	// u_state group:
	state: Float32Array;
}

export const ecs = new ECS<CompSpecs>({});

export const roots = ecs.defComponent({
	id: "roots",
	type: "f32",
	size: 4,
});

export const state = ecs.defComponent({
	id: "state",
	type: "f32",
	size: 4,
	stride: 4,
});
