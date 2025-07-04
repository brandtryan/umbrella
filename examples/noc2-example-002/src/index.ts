
// --- TROUBLESHOOTING VERSION ---

// console.log("--- Script starting ---");

// 1. IMPORTS
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { SYSTEM as RND } from "@thi.ng/random";
import type { Vec } from "@thi.ng/vectors";

// 2. STATE DEFINITION
const canvasSize: Vec = [640, 240];
const numCounts = 20;
let counts = new Array(numCounts).fill(0);


// 3. BEHAVIOR (State Update Logic)
const updateCounts = (currentCounts: number[]): number[] => {
	const index = RND.minmaxUint(0, numCounts);
	const newCounts = [...currentCounts];
	newCounts[index]++;
	return newCounts;
};


// 4. VIEW (State Visualization Logic)
const viewDistribution = (currentCounts: number[]) => {
	const barWidth = canvasSize[0] / currentCounts.length;
	const bars = currentCounts.map((count, i) => {
		const heightScale = 2;
		const barHeight = count * heightScale;
		const x = i * barWidth;
		const y = canvasSize[1] - barHeight;
		return ["rect",
			{ fill: "#fff", stroke: "#000", weight: 1 },
			[x, y],
			barWidth - 1,
			barHeight
		];
	});

	const scene = [
		["rect", { fill: "#ccc" }, [0, 0], ...canvasSize],
		...bars
	];
	return scene;
};


// 5. APPLICATION SETUP & MAIN LOOP
// console.log("LOG: Setting up application...");

// Find the canvas container element in your HTML
const app = document.getElementById("app");
// console.log("LOG: Found #app element:", app);

const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);
// console.log("LOG: Canvas 2D context created:", ctx);

// let frameNumber = 0;

const frame = () => {
	// Stop after a few frames
	// if (frameNumber > 5) return;

	// console.log(`--- FRAME ${frameNumber} START ---`);
	// console.log("LOG (start of frame): Current counts are:", counts.join(','));

	// A. Update state
	counts = updateCounts(counts);
	// console.log("LOG (after update):   New counts are:   ", counts.join(','));

	// B. Get scene description
	const scene = viewDistribution(counts);
	// Log the details of the first bar to see if its height is changing
	// console.log("LOG: First bar's data:", JSON.stringify(scene[1]));


	// C. Render the scene
	draw(ctx, scene);
	// console.log("LOG: `draw` function was called.");

	// console.log(`--- FRAME ${frameNumber} END ---`);
	// frameNumber++;

	// D. Request next frame
	requestAnimationFrame(frame);
};

// Start the loop
// console.log("LOG: Starting animation loop...");
frame();
