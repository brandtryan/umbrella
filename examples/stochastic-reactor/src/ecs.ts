import { ECS } from "@thi.ng/ecs";

// 2. The Master Schema
export interface CompSpecs {
	// --- PHYSICS (MemMapped) ---

	wght: Float32Array;
	wdth: Float32Array;
	ital: Float32Array;
	cont: Float32Array;
	urge: Float32Array;
	// META: The DOM ID to bind back to the HTML element.
	// We store this as an integer (index in the cache).
	domId: Uint32Array;
	// META: Visibility status (driven by IntersectionObserver).
	isVisible: Uint8Array;
}

export const ecs = new ECS<CompSpecs>({});

export const wght = ecs.defComponent({
	id: "wght",
	type: "f32",
	size: 1,
});

export const wdth = ecs.defComponent({
	id: "wdth",
	type: "f32",
	size: 1,
});

export const ital = ecs.defComponent({
	id: "ital",
	type: "f32",
	size: 1,
});

export const cont = ecs.defComponent({
	id: "cont",
	type: "f32",
	size: 1,
});

export const urge = ecs.defComponent({
	id: "urge",
	type: "f32",
	size: 1,
});

export const domId = ecs.defComponent({
	id: "domId",
	type: "u32",
	size: 1,
});

export const isVisible = ecs.defComponent({
	id: "isVisible",
	type: "u8",
	size: 1,
});
