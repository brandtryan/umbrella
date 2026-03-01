import type { Maybe } from "@thi.ng/api";
import { ECS, type MemMappedComponent } from "@thi.ng/ecs";

// 2. The Master Schema
export interface CompSpecs {
	// --- PHYSICS (MemMapped) ---
	state: Float32Array;
	// x & y coord positions (unchanging position vector)
	pos: Float32Array;
	// META: Visibility status (driven by IntersectionObserver).
	page: Uint8Array;
	// META: The DOM ID to bind back to the HTML element.
	// We store this as an integer (index in the cache).
	domId: Uint16Array;
}

export const ecs = new ECS<CompSpecs>({});

export const stateComponent: Maybe<MemMappedComponent<"state">> =
	ecs.defComponent({
		id: "state",
		type: "f32",
		size: 4, // "wght", "wdth", "ital", "cont"
	})!;

export const posComponent: Maybe<MemMappedComponent<"pos">> = ecs.defComponent({
	id: "pos",
	type: "f32",
	size: 2, // x and y
})!;

export const pageComponent: Maybe<MemMappedComponent<"page">> =
	ecs.defComponent({
		id: "page",
		type: "u8",
		size: 1,
	})!;
export const domIdComponent: Maybe<MemMappedComponent<"domId">> =
	ecs.defComponent({
		id: "domId",
		type: "u16",
		size: 1,
	})!;
