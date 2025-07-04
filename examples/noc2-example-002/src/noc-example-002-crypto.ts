// SPDX-License-Identifier: Apache-2.0

import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
// Import Crypto alongside the other random tools
import { SYSTEM as RND, Crypto, normal } from "@thi.ng/random";
import { clamp } from "@thi.ng/math";
import type { Vec } from "@thi.ng/vectors";

// ====================================================================
// Reusable Sketch Factory (This part is unchanged)
// ====================================================================

const createDistributionSketch = (
	canvasId: string,
	randomFn: () => number,
	numBins: number
) => {
	const app = document.getElementById(canvasId);
	if (!app) {
		console.error(`Could not find canvas element with id: #${canvasId}`);
		return;
	}

	const canvasSize: Vec = [640, 240];
	const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);
	let counts = new Array(numBins).fill(0);

	const frame = () => {
		const index = randomFn();
		const safeIndex = clamp(Math.floor(index), 0, numBins - 1);

		const newCounts = [...counts];
		newCounts[safeIndex]++;
		counts = newCounts;

		const barWidth = canvasSize[0] / counts.length;
		const scene = [
			["rect", { fill: "#ccc" }, [0, 0], ...canvasSize],
			...counts.map((count, i) => {
				const barHeight = count * 2;
				return ["rect",
					{ fill: "#fff", stroke: "#000", weight: 1 },
					[i * barWidth, canvasSize[1] - barHeight],
					barWidth - 1,
					barHeight,
				];
			}),
		];

		draw(ctx, scene);
		requestAnimationFrame(frame);
	};

	frame();
};

// ====================================================================
// Main Application Setup
// ====================================================================

const NUM_BINS = 100;

// --- Define the Random Functions for each distribution ---

// 1. UNIFORM: Standard non-secure PRNG.
const uniformRandom = () => RND.minmaxUint(0, NUM_BINS);

// 2. NORMAL (GAUSSIAN): Numbers clustered around a mean.
const mean = NUM_BINS / 2;
const standardDeviation = NUM_BINS / 6;
const normalRandom = () => normal(RND, standardDeviation);

// 3. CRYPTO: A cryptographically secure uniform distribution.
// We must create a new instance of the Crypto class.
const cryptoRNG = new Crypto();
const cryptoRandom = () => cryptoRNG.minmaxUint(0, NUM_BINS);

// --- Create the three sketches ---

createDistributionSketch("app-uniform", uniformRandom, NUM_BINS);
// createDistributionSketch("app-normal", normalRandom, NUM_BINS);
createDistributionSketch("app-crypto", cryptoRandom, NUM_BINS);
