import { LOGGER as log } from "@thi.ng/ecs";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import { $compile } from "@thi.ng/rdom";
import { anch, cont, ecs, ital, urge, wdth, wght } from "./ecs";
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
const VW = window.innerWidth;
const VH = window.innerHeight;

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
console.log(book);

/********************
 * WORD DOM DATA
 *********************/
const words = Array.from(document.getElementsByClassName("word"));
const words_count = words.length;
const dom_nodes = [...words] as HTMLElement[];
dom_nodes.forEach((el) => (el.dataset.id = dom_nodes.indexOf(el).toString()));

/********************
 * LAYOUT & DATA PACKING
 *
 * Need a specifically structured, dense buffer to send to the GPU Texture:
 * Structure: [x, y, page, id,  x, y, page, id...]
 *
 * The components in ECS are:
 * "anch" for anchor position
 * "wght" for mass
 * "wdth" for volume
 * "ital" for vel/inflate
 * "cont" for edgyness
 *********************/

// 4. Global access for console/debugging
exposeGlobal("ecs", ecs, true);

// 5. get the Raw buffer ONCE (for ANCH)
const anchComp = ecs.components.get("anch")!;
const anchBuff = anchComp.vals; // this is the float32array
// 6. Update Capacity
ecs.setCapacity(words_count);

// 7. Create 5d Group
const group = ecs.defGroup([wght, wdth, ital, cont, urge]);

// 8. Create Entities
for (let i = 0; i < dom_nodes.length; i++) {
	ecs.defEntity([wght, wdth, ital, cont, urge, anch]);
	const rect = dom_nodes[i].getBoundingClientRect();
	const ptr = i * 4;

	// Normalize (Pixels -> 0..1 for UV texture)
	const normX = rect.left / VW;
	const normY = 1.0 - rect.top / VH;

	// Write directly to buffer for the anchors one time
	anchBuff[ptr] = normX; // x (absolute)
	anchBuff[ptr + 1] = normY; // y (absolute)
	anchBuff[ptr + 2] = 0; // page (calc logic here)
	anchBuff[ptr + 3] = i; // id (the entity id)
}

console.log(`
All 3 numbers to right should match!
Total Words * 4: 		${words_count * 4}
===========================================
Entities * 4: 			${ecs.idgen.capacity * 4}
===========================================
anchBuff.vals.length:	${ecs.components.get("anch")!.vals.length}
`);

console.log(anchBuff);
