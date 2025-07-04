
import { canvas2d } from "@thi.ng/canvas";
import { draw } from "@thi.ng/hiccup-canvas";
import { SYSTEM as RND } from "@thi.ng/random";
import { add, type Vec } from "@thi.ng/vectors";

// --- The Functional Programming Core ---

// 1. STATE REPRESENTATION
const canvasSize: Vec = [window.innerWidth, window.innerHeight];
let walkerPos: Vec = [canvasSize[0] / 2, canvasSize[1] / 2];

// 2. BEHAVIOR (as a pure function)
const updateWalker = (pos: Vec): Vec => {
	const step: Vec = [RND.minmax(-1, 1), RND.minmax(-1, 1)];
	return add([], pos, step);
};

// 3. VIEW (as a pure function)
const viewWalker = (pos: Vec) => {
	// Use circle - points are invisible basically
	return ["circle", { stroke: "#fff" }, pos, 5]; // pos is the center, 5 is the radius
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
// The `draw` function expects an array of shapes as its second argument.
draw(ctx, [
	["rect", { fill: "#242424" }, [0, 0], ...canvasSize]
]);

// Start the animation loop!
frame();
