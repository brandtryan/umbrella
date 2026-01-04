import { ECS } from "@thi.ng/ecs";

// 2. The Master Schema
export interface CompSpecs {
	// --- PHYSICS (MemMapped) ---
	// For TypedArrays, the Spec defines the backing array type
	wght: Float32Array;
	wdth: Float32Array;
	ital: Float32Array;
	cont: Float32Array;
	urge: Float32Array;

	// anch is for rect.x, rect.top, page, id
	// NOT part of the 5d 'Phase Space' components above
	anch: Float32Array;
}

// 3. The Components
export const ecs = new ECS<CompSpecs>({});

// --- DEFINING SCALARS (Physics) ---
export const wght = ecs.defComponent({
	id: "wght",
	type: "f32",
	size: 1,
	default: [300],
})!;

export const wdth = ecs.defComponent({
	id: "wdth",
	type: "f32",
	size: 1,
	default: [100],
})!;

export const ital = ecs.defComponent({
	id: "ital",
	type: "f32",
	size: 1,
	default: [0],
})!;

export const cont = ecs.defComponent({
	id: "cont",
	type: "f32",
	size: 1,
	default: [0],
})!;

export const urge = ecs.defComponent({
	id: "urge",
	type: "f32",
	size: 1,
	default: [0],
})!;

// --- ANCHOR VECTOR ---
export const anch = ecs.defComponent({
	id: "anch",
	type: "f32",
	size: 4,
})!;
