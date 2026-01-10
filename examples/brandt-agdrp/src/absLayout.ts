import { LOGGER as log } from "@thi.ng/ecs";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import { $compile } from "@thi.ng/rdom";
import { glCanvas } from "@thi.ng/webgl";
import { ecs } from "./ecs";
import * as Content from "./html";

/********************
 * CONFIGURATION
 *********************/
log.set(new ConsoleLogger("ecs", LogLevel.INFO));

/********************
 * TEMP HACK FOR STATE
 *********************/
const DATA_DIM = 64;
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

// export function updateHUD(state: any, time: number) {
// 	if (!debugEl) return;

// 	//simple, direct text update.
// 	// We avoid complex DOM diffing here for spee.
// 	debugEl.innerText = `
// 	SIMULATION STATUS: RUNNING
// --------------------------
// TIME    : ${time.toFixed(2)}
// ENTITIES: ${state.numParticles || 0}
// FPS     : ${(1000 / state.lastFrameDuration).toFixed(0)}
// `.trim();
// }

await document.fonts.ready;
$compile(book).mount(document.getElementById("app")!);

/********************
 * WORD DOM DATA
 *********************/
const words = Array.from(document.getElementsByClassName("word"));
const word_count = words.length;
const dom_nodes = [...words] as HTMLElement[];
dom_nodes.forEach((el) => (el.dataset.id = dom_nodes.indexOf(el).toString()));
let wght: CSSStyleValue = 300;
let wdth: CSSStyleValue = 100;

for (let word of words) {
	const computedStyles = getComputedStyle(word);
	wght = computedStyles.getPropertyValue("--wght");
	wdth = computedStyles.getPropertyValue("--wdth");
}
/********************
 * LAYOUT & DATA PACKING
 *********************/

// 4. Global access for console/debugging
exposeGlobal("ecs", ecs, true);

// 5. Update Capacity
ecs.setCapacity(word_count);

// 6. get components
const restComponent = ecs.components.get("rest")!;
const stateComponent = ecs.components.get("state")!;
const velComponent = ecs.components.get("vel")!;

// 7. create buffers
const restBuffer = restComponent.vals;
const stateBuffer = stateComponent.vals;
const velBuffer = velComponent.vals;

// 7. Create Entities
for (let i = 0; i < dom_nodes.length; i++) {
	ecs.defEntity([restComponent, stateComponent, velComponent]);
	const rect = dom_nodes[i].getBoundingClientRect();
	const ptr = i * 4;

	// 2. Calculate Page Index (The Bucket)
	// "If I am at 2500px and the window is 1000px, I am on Page 2."
	const pageIndex = Math.floor(dom_nodes[i].offsetTop / vh);

	const anchorX = rect.left + rect.width * 0.5;
	const anchorY = rect.top + rect.height * 0.5;

	// 3. Normalize for GPU (Viewport Space)
	const normX = anchorX / vw;
	const normY = 1.0 - (anchorY % vh) / vh;

	const urge = Math.random();
	const decay_timer = 0;
	const v_wght = 0;
	const v_wdth = 0;
	const v_urge = 0;

	// 4. Write to Rest Buffer
	restBuffer[ptr] = normX; // R
	restBuffer[ptr + 1] = normY; // G
	restBuffer[ptr + 2] = pageIndex; // B
	restBuffer[ptr + 3] = i; // A

	// 5. Write to State Buffer
	stateBuffer[ptr] = wght; // R
	stateBuffer[ptr + 1] = wdth; // G
	stateBuffer[ptr + 2] = urge; // B
	stateBuffer[ptr + 3] = decay_timer; // A

	// 6. Write to Vel Buffer
	velBuffer[ptr] = v_wght; // R
	velBuffer[ptr + 1] = v_wdth; // G
	velBuffer[ptr + 2] = v_urge; // B
	velBuffer[ptr + 3] = 0; // A
}

console.log(`
All 3 numbers to right should match!
Total Words * 4: 		${word_count * 4}
===========================================
Entities * 4: 			${ecs.idgen.capacity * 4}
===========================================
restBuff.vals.length:	${ecs.components.get("rest")!.vals.length}

Rest Component Buffer: ${restBuffer.length}
----------------------------------
State Component Buffer: ${stateBuffer.length}
----------------------------------
Velocity Component Buffer: ${velBuffer.length}
`);
