import { exposeGlobal } from "@thi.ng/expose";
import { ECS } from "@thi.ng/ecs";

// The Schema
interface CompSpecs {
	// u_rest group:
	anchors: Float32Array;
	// u_state group:
	state: Float32Array;
}

const ecs = new ECS<CompSpecs>({});

exposeGlobal("ecs", ecs, true);

const anchors = ecs.defComponent({
	id: "anchors",
	type: "f32",
	size: 4,
});

const state = ecs.defComponent({
	id: "state",
	type: "f32",
	size: 4,
});
