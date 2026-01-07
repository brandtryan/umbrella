import { LOGGER as log } from "@thi.ng/ecs";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import { $compile } from "@thi.ng/rdom";
import { rest, cont, ecs, ital, urge, wdth, wght } from "./ecs";
import * as Content from "./html";
import { glCanvas } from "@thi.ng/webgl";

/********************
 * CONFIGURATION
 *********************/
log.set(new ConsoleLogger("ecs", LogLevel.INFO));

/********************
 * TEMP HACK FOR STATE
 *********************/
const DATA_DIM = 64;
const MAX_WORDS = DATA_DIM * DATA_DIM;
const DEBUG_VIEW = true;
const ENABLE_DEBUG_OVERLAY = true;
const vw = window.innerWidth;
const vh = window.innerHeight;

/********************
 * DOM SETUP
 *********************/
const sortedPages = Object.keys(Content)
	.filter((key) => key.startsWith("page"))
	.sort(
		(a, b) =>
			parseInt(a.replace("page", "")) - parseInt(b.replace("page", ""))
	)
	.map((key) => Content[key as keyof typeof Content]);

const pageWordCounts: number[] = Content.getPageCounts(sortedPages);
// console.log(pageWordCounts);
console.log(pageWordCounts);
const book = div({ id: "pages" }, ...sortedPages);

const canvas = glCanvas({
	version: 2,
	width: DATA_DIM,
	height: DATA_DIM,
	autoScale: false,
	parent: document.body,
});

if (DEBUG_VIEW) {
	Object.assign(canvas.canvas.style, {
		position: "fixed",
		top: "0",
		right: "0",
		zIndex: "9999",
		width: "128px",
		height: "128px",
		border: "1px solid cyan",
	});
} else {
	canvas.canvas.style.display = "none";
}

const gl = canvas.gl;
if (!gl) throw new Error("WebGL2 not supported!");
if (!gl.getExtension("EXT_color_buffer_float")) {
	console.error(
		"EXT_color_buffer_float not supported! Falling back to WebGL 2 defaults."
	);
}
gl.getExtension("EXT_float_blend");

// --- DEBUG OVERLAY SETUP ---
let debugEl: HTMLElement;
if (ENABLE_DEBUG_OVERLAY) {
	debugEl = document.createElement("div");
	Object.assign(debugEl.style, {
		position: "fixed",
		bottom: "10px",
		left: "10px",
		background: "rgba(0,0,0,0.85)",
		color: "#0f0",
		fontFamily: "monospace",
		fontSize: "12px",
		padding: "10px",
		zIndex: "10000",
		pointerEvents: "none",
		whiteSpace: "pre",
		border: "1px solid #0f0",
	});
	document.body.appendChild(debugEl);
}

$compile(book).mount(document.getElementById("app")!);
await document.fonts.ready;

/********************
 * WORD DOM DATA
 *********************/
const words = Array.from(document.getElementsByClassName("word"));
const word_count = words.length;
const dom_nodes = [...words] as HTMLElement[];
dom_nodes.forEach((el) => (el.dataset.id = dom_nodes.indexOf(el).toString()));

/********************
 * LAYOUT & DATA PACKING
 *
 * Need a specifically structured, dense buffer to send to the GPU Texture:
 * REST component Structure: [left, top, page, id,  left, top, page, id...]
 *
 * The components in ECS are:
 * "wght" for mass
 * "wdth" for volume
 * "ital" for vel/inflate
 * "cont" for edgyness
 * "urge" hidden scalar
 * "rest" for rest position.left, position.top, pageIndex, entityId
 *********************/

// 4. Global access for console/debugging
exposeGlobal("ecs", ecs, true);

// 5. get the Raw buffer ONCE (for rest)
const restComp = ecs.components.get("rest")!;
const restBuff = restComp.vals; // this is the float32array
// 6. Update Capacity
ecs.setCapacity(word_count);

// 7. Create Entities
for (let i = 0; i < dom_nodes.length; i++) {
	ecs.defEntity([wght, wdth, ital, cont, urge, rest]);
	const rect = dom_nodes[i].getBoundingClientRect();
	const ptr = i * 4;
	// 1. Calculate Absolute Y (World Space)
	// This is how far down the document the word is, regardless of scroll
	// const absoluteY = rect.top;

	// 2. Calculate Page Index (The Bucket)
	// "If I am at 2500px and the window is 1000px, I am on Page 2."
	// const pageIndex = Math.floor(rect.top / vh);
	const pageIndex = Math.floor(dom_nodes[i].offsetTop / vh);

	// 3. Normalize for GPU (Viewport Space)
	const normX = rect.left / vw;
	const normY = 1.0 - rect.top / vh;

	// 4. Write to Buffer
	restBuff[ptr] = normX; // R
	restBuff[ptr + 1] = normY; // G
	restBuff[ptr + 2] = pageIndex; // B (Now correctly calculated)
	restBuff[ptr + 3] = i; // A
}

console.log(`
All 3 numbers to right should match!
Total Words * 4: 		${word_count * 4}
===========================================
Entities * 4: 			${ecs.idgen.capacity * 4}
===========================================
restBuff.vals.length:	${ecs.components.get("rest")!.vals.length}
`);
console.log(restBuff);
