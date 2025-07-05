
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { SYSTEM, weightedRandom } from "@thi.ng/random";
import { add, type Vec } from "@thi.ng/vectors";

// --- FP CORE ---

// 1. STATE REPRESENTATION
const canvasSize: Vec = [window.innerWidth / 2, window.innerHeight / 2];
let walkerPos: Vec = [canvasSize[0] / 2, canvasSize[1] / 2];

// The possible directions the walker can move, represeted as array of vectors
const choices: Vec[] = [[1, 0], [-1, 0], [0, 1], [0, -1]];

// corresponding probabilities for each choice (# of array elements has to match choices):
const weights: number[] = [0.4, 0.2, 0.2, 0.2];

// Create the random step generator function ONCE.
// The function that will return one of the vectors from 'choices'
const getRandomStep = weightedRandom<Vec>(choices, weights, SYSTEM);

// 2. BEHAVIOR (as a pure function)
const updateWalker = (pos: Vec): Vec => {
	// Call generator to get random step direction for THIS FRAME:
	const stepDirection = getRandomStep();
	// Return a NEW, shiny vector by adding the current pos and the step direction:
	return add([], pos, stepDirection);
};

// 3. VIEW (as a pure function)
const viewWalker = (pos: Vec) => {
	// Use hiccup-canvas format for drawing the walker.
	// Use circle - points are invisible basically
	return ["circle", { stroke: "#fff" }, pos, 1]; // pos is the center, 5 is the radius
};

// --- Application Setup & Main Loop ---

// Find the <div id="app"> in our index.html
const app = document.getElementById("app")!;

// Create the canvas and get its context using the exact, proven pattern
// from your working example.
const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);

// The main animation loop function
const frame = () => {

	// A. Update state
	walkerPos = updateWalker(walkerPos);

	// B. Get scene description
	const scene = viewWalker(walkerPos);

	// C. Render the scene
	draw(ctx, [scene]);

	// D. Request the next frame
	requestAnimationFrame(frame);
};

// Draw the initial background *once* before the loop starts.
draw(ctx, ["rect", { fill: "#2D2D2D" }, [0, 0], ...canvasSize]);

// Start the animation loop!
frame();
