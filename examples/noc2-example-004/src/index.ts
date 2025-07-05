
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { SYSTEM, gaussian } from "@thi.ng/random";
import { add, type Vec } from "@thi.ng/vectors";

// --- FP CORE ---

// 1. STATE REPRESENTATION
const canvasSize: Vec = [640, 240];
let initPos: Vec = [canvasSize[0] / 2, canvasSize[1] / 2];

// Create the random step generator function ONCE.
// The function that will return one of the vectors from 'choices'

// 2. BEHAVIOR (as a pure function)
const updatePos = (pos: Vec): Vec => {
	// Call generator to get random step direction for THIS FRAME:
	let x = gaussian(SYSTEM, 100)
	let y = 120
	// Return a NEW, shiny vector by adding the current pos and the step direction:
	return add([], pos, stepDirection);
};

// 3. VIEW (as a pure function)
const viewDot = (pos: Vec) => {
	// Use hiccup-canvas format for drawing the walker.
	// Use circle - points are invisible basically
	return ["circle", { stroke: "#fff" }, pos, 16]; // pos is the center, 5 is the radius
};

// --- Application Setup & Main Loop ---

// Find the <div id="app"> in our index.html
const app = document.getElementById("app")!;

// Create the canvas and get its context using the exact, proven pattern
// from your working example.
const { ctx } = canvas2d(canvasSize[0], canvasSize[1], app);

// Draw background
draw(ctx, ["rect", { fill: "#2D2D2D" }, [0, 0], ...canvasSize]);

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
// draw(ctx, ["rect", { fill: "#2D2D2D" }, [0, 0], ...canvasSize]);

// Start the animation loop!
frame();
