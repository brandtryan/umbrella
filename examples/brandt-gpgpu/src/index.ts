import { ECS } from "@thi.ng/ecs";

//-- Layer 1: Source
document.addEventListener("DOMContentLoaded", (event) => {
	console.log("DOM fully loaded and parsed");
	initLayer1();
	run();
});

// ========================================================================
// LAYER 1: Coordinate Extraction
// ========================================================================
const initLayer1 = () => {
	const wordElements = document.querySelectorAll(".word");
	const wordData: { id: string; rect: DOMRect }[] = [];
	for (const word of wordElements) {
		wordData.push({
			id: word.id,
			rect: word.getBoundingClientRect(),
		});
	}
	return { wordData };
};

// ========================================================================
// LAYER 2: ECS Data Core
// ========================================================================
interface CompSpecs {
	coordinates: Float32Array;
	curr_pos_tic_forces: Float32Array;
	prev_pos_tic_forces: Float32Array;
	vel_tic_forces: Float32Array;
}

const initLayer2 = (seedData: {
	wordData: { id: string; rect: DOMRect }[];
}) => {
	// 1. Init ECS World
	const ecs = new ECS<CompSpecs>({ capacity: 5000 });

	// 2. Define Components
	const coordinates = ecs.defComponent({
		id: "coordinates",
		type: "f32",
		size: 2,
	})!;

	const curr_pos_tic_forces = ecs.defComponent({
		id: "curr_pos_tic_forces",
		type: "f32",
		size: 4,
	})!;

	const prev_pos_tic_forces = ecs.defComponent({
		id: "prev_pos_tic_forces",
		type: "f32",
		size: 4,
	})!;

	const vel_tic_forces = ecs.defComponent({
		id: "vel_tic_forces",
		type: "f32",
		size: 4,
		default: () => [0, 0, 0, 0],
	})!;

	// 3. Define a Group (Optional but good for iteration)
	ecs.defGroup([
		coordinates,
		curr_pos_tic_forces,
		prev_pos_tic_forces,
		vel_tic_forces,
	])!;

	// 4. Seed the ECS with L1 data
	for (const word of seedData.wordData) {
		const p = word.rect;
		const wordCoords = new Float32Array([
			p.x + p.width / 2,
			p.y + p.height / 2,
		]);
		// Placeholder initial values for font axes
		const currentTicPos = new Float32Array([
			300, // wght
			100, // wdth
			0, // ital
			0, // cont
		]);

		// Placeholder initial values for font axes
		const previousTicPos = new Float32Array([
			300, // wght
			100, // wdth
			0, // ital
			0, // cont
		]);

		// Placeholder initial values for tic velocities
		const velTicForces = new Float32Array([
			0, // wght
			0, // wdth
			0, // ital
			0, // cont
		]);

		ecs.defEntity({
			coordinates: wordCoords,
			curr_pos_tic_forces: currentTicPos,
			prev_pos_tic_forces: previousTicPos,
			vel_tic_forces: velTicForces,
		});
	}
	return {
		ecs,
		coordinates,
		curr_pos_tic_forces, // curr_pos_tic_forces,
		prev_pos_tic_forces, // prev_pos_tic_forces,
		vel_tic_forces, // vel_tic_forces,
	};
};

// ========================================================================
// EXECUTION & DEBUG
// ========================================================================
const run = () => {
	const l1Data = initLayer1();
	const l2Data = initLayer2(l1Data);

	const debugEl = document.getElementById("debug-output")!;

	const coordsBuffer = l2Data.coordinates.vals;
	const ticPosBuffer = l2Data.curr_pos_tic_forces.vals;
	const ticVelBuffer = l2Data.vel_tic_forces.vals;
	const sourceWord = document.querySelector(".word");

	let output = `[ SYSTEM ONLINE ]\n`;
	output += `---------------------------------\n`;
	output += `L1 Source:   "${sourceWord!.textContent}"\n`;
	output += `\n`;
	output += `L2 Engine:   @thi.ng/ecs\n`;
	output += `Entities:    ${l2Data.ecs.idgen.used}\n`;
	output += `Component:   'coordinates' (f32, size=2)\n`;
	output += `Component:   'curr_pos_tic_forces' (f32, size=4)\n`;
	output += `Component:   'prev_pos_tic_forces' (f32, size=4)\n`;
	output += `Component:   'vel_tic_forces' (f32, size=4)\n`;
	output += `---------------------------------\n`;
	if (sourceWord) {
		output += `Entity #0 Memory View ('${sourceWord.id}'):\n`;
		output += `Coord X:  ${coordsBuffer[0].toFixed(2)}\n`;
		output += `Coord Y:  ${coordsBuffer[1].toFixed(2)}\n`;
		output += `wght:     ${ticPosBuffer[0].toFixed(2)}\n`;
		output += `wdth:     ${ticPosBuffer[1].toFixed(2)}\n`;
		output += `ital:     ${ticPosBuffer[2].toFixed(2)}\n`;
		output += `cont:     ${ticPosBuffer[3].toFixed(2)}\n`;
		output += `wght_vel: ${ticVelBuffer[0].toFixed(2)}\n`;
		output += `wdth_vel: ${ticVelBuffer[1].toFixed(2)}\n`;
		output += `ital_vel: ${ticVelBuffer[2].toFixed(2)}\n`;
		output += `cont_vel: ${ticVelBuffer[3].toFixed(2)}\n`;
	}

	debugEl.innerText = output;
};

run();
