import { defAtom } from "@thi.ng/atom";
import * as Content from "../src/html";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { glCanvas } from "@thi.ng/webgl";
import { $compile } from "@thi.ng/rdom";
import { debounce, fromDOMEvent } from "@thi.ng/rstream";
import * as ecs from "./ecs";

/********************
 * CONFIGURATION
 *********************/
exposeGlobal("ecs", ecs, true);
const vw = window.innerWidth;
const vh = window.innerHeight;

/********************
 * DOM SETUP
 *********************/
const sortedPages = Object.keys(Content)
	.filter((key) => key.startsWith("page"))
	.sort(
		(a, b) =>
			parseInt(a.replace("page", "")) - parseInt(b.replace("page", "")),
	)
	.map((key) => Content[key as keyof typeof Content]);

// const pageWordCounts: number[] = Content.getPageCounts(sortedPages);
const book = div({ id: "pages" }, ...sortedPages);

const { gl, canvas } = glCanvas({
	version: 2,
	width: 96,
	height: 96,
	autoScale: false,
	parent: document.body,
});

if (!gl) throw new Error("WebGL2 not supported!");
if (!gl.getExtension("EXT_color_buffer_float")) {
	console.error(
		"EXT_color_buffer_float not supported! Falling back to WebGL 2 defaults.",
	);
}
gl.getExtension("EXT_float_blend");

await document.fonts.ready;
$compile(book).mount(document.getElementById("app")!);

/********************
 * WORD DOM DATA
 *********************/
const domNodes = Array.from(
	document.getElementsByClassName("word"),
) as HTMLElement[];
const WORD_COUNT = domNodes.length;
ecs.ecs.setCapacity(WORD_COUNT);

/********************
 * FPS COUNTER
 *********************/
const fpsDiv = document.createElement("div");
fpsDiv.id = "fps-counter";
fpsDiv.innerText = "FPS: 0";
document.body.appendChild(fpsDiv);

let lastTime = performance.now();
let frames = 0;

function updateFPS(currentTime: number) {
	frames++;
	// If 1000 milliseconds (1 second) have passed
	if (currentTime - lastTime >= 1000) {
		// Update the text
		fpsDiv.innerText = `FPS: ${frames}`;
		// Reset the counters for the next second
		frames = 0;
		lastTime = currentTime;
	}
	requestAnimationFrame(updateFPS);
}
requestAnimationFrame(updateFPS);

/********************
 * LAYOUT & DATA PACKING
 *********************/
for (let i = 0; i < WORD_COUNT; i++) {
	// 1. Create the entity and attach ALL components it needs
	const entity = ecs.ecs.defEntity(["state", "pos", "page", "domId"]);

	// 2. Read the DOM
	const rect = domNodes[i].getBoundingClientRect();
	const pageIndex = Math.floor(domNodes[i].offsetTop / vh);

	const x = rect.left + rect.width * 0.5;
	const y = rect.top + rect.height * 0.5;

	const norm_x = x / vw;
	const norm_y = 1.0 - (y % vh) / vh;

	// 3. Write securely to ECS Memory using .set()
	// The ECS handles calculating the exact byte offsets automatically!

	// size: 4 -> pass an array of 4 numbers
	ecs.stateComponent?.set(entity, [400.0, 100.0, 0.0, 0.0]);

	// size: 2 -> pass an array of 2 numbers
	ecs.posComponent?.set(entity, [norm_x, norm_y]);

	// size: 1 -> pass the single scalar value directly
	ecs.pageComponent?.set(entity, [pageIndex]);
	ecs.domIdComponent?.set(entity, [i]);
}

console.log(`AFTER Entity Creation:
			 Current Entity Count: 	${ecs.ecs.idgen.ids.length}
			 Current Capacity:		${ecs.ecs.idgen.capacity}
			 Total Word Count: 		${WORD_COUNT}
			`);

// 1. Create the base stream
const resizeEventStream = fromDOMEvent(window, "resize");

// 2. Chain them! Event -> Debounce -> My Logic
resizeEventStream.subscribe(debounce(250)).subscribe({
	next: () => {
		console.log("Resize actually finished! Updating ECS Memory...");

		for (let i = 0; i < WORD_COUNT; i++) {
			const el = domNodes[i];
			const rect = el.getBoundingClientRect();

			const x = rect.left + rect.width * 0.5;
			const y = rect.top + rect.height * 0.5;

			const norm_x = x / vw;
			const norm_y = 1.0 - (y % vh) / vh;

			// Remember: Always pass arrays to .set()
			ecs.posComponent?.set(i, [norm_x, norm_y]);
		}
	},
});
