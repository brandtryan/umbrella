import { dateTime } from "@thi.ng/date";
import { div } from "@thi.ng/hiccup-html";
import { $compile } from "@thi.ng/rdom";
import { AttribPool } from "@thi.ng/vector-pools";
import * as Content from "./html";
/********************
 * CONFIGURATION
 *********************/
const DATA_DIM = 64;
const MAX_WORDS = DATA_DIM * DATA_DIM;
let WORD_COUNT: number;

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

const book = div({ id: "pages" }, ...sortedPages);

$compile(book).mount(document.getElementById("app")!);
await document.fonts.ready;

/********************
 * STATE
 *********************/
let mainFrames = 0;
let workerFrames = 0;
let lastTime = performance.now();

const state = {
	// new Atom?
	urge_threshold: 0.0,
	curr_stress: 0.0,
	curr_urge: 0.0,
	last_action_time: dateTime(),
	vw: window.innerWidth,
	vh: window.innerHeight,
	scrollY: window.scrollY,
	curr_page: scrollY / window.innerHeight,
	dom_nodes: [] as HTMLElement[],
	node_y_pos: new Float32Array(MAX_WORDS),
	word_count: 0,
};

/********************
 * WORD DOM POSITIONS
 *********************/
const words = document.querySelectorAll(".word");
state.dom_nodes = Array.from(words) as HTMLElement[];
state.word_count = words.length;

/********************
 * MEMORY CONFIGURATION
 *********************/
// The GPU writes 4 floats (16 bytes) per word tightly packed.
// We must match this stride exactly.
const POOL_START = 0; // Simplify: Start at 0 to avoid offset headaches for now
const STRIDE = 4 * 4; // 16 Bytes (4 floats * 4 bytes)
const SAB = new SharedArrayBuffer(MAX_WORDS * STRIDE);

// The Pool handles the Shared Buffer
// Structure: [WGHT, WDTH, ITAL, CONT,   WGHT, WDTH...]
const PHYSICS_STATE = new AttribPool({
	mem: {
		buf: SAB,
		start: POOL_START,
		size: SAB.byteLength,
		// CRITICAL: Type 'f32' implies 4 bytes.
		// We ensure stride is effectively 4 floats.
	},
	num: state.word_count,
	attribs: {
		wght: { type: "f32", size: 1, byteOffset: 0, default: 300 },
		wdth: { type: "f32", size: 1, byteOffset: 4, default: 100 },
		ital: { type: "f32", size: 1, byteOffset: 8, default: 0 },
		cont: { type: "f32", size: 1, byteOffset: 12, default: 0 },
	},
});
/********************
 * 1. LAYOUT & DATA PACKING
 *********************/
// We need a specific, dense buffer to send to the GPU Texture.
// Structure: [x, y, page, id,  x, y, page, id...]
const gpuInputBuffer = new Float32Array(MAX_WORDS * 4);

function updateLayout() {
	const binding = document.getElementById("book");
	const offsetX = binding?.getBoundingClientRect()!.left || 0;

	for (let i = 0; i < state.word_count; i++) {
		const rect = words[i].getBoundingClientRect();
		const absTop = rect.top + window.scrollY; // "Fixed Anchor" Y
		const absX = rect.left - offsetX + rect.width * 0.5; // "Fixed Anchor" X
		const page = Math.floor(absTop / window.innerHeight);

		// Pack for GPU
		const idx = i * 4;
		gpuInputBuffer[idx + 0] = absX;
		gpuInputBuffer[idx + 1] = absTop;
		gpuInputBuffer[idx + 2] = page;
		gpuInputBuffer[idx + 3] = i; // Word ID

		state.dom_nodes[i] = words[i] as HTMLElement;
		// Cache Y pos for the render loop
		state.node_y_pos[i] = absTop;
	}
	console.log(`Layout Updated. Words: ${state.word_count}`);
}

updateLayout();

/********************
 * 2. WORKER INIT
 *********************/
const canvas = document.createElement("canvas");
canvas.width = DATA_DIM;
canvas.height = DATA_DIM;
const offscreen = canvas.transferControlToOffscreen();

const worker = new Worker(new URL("./physics.ts", import.meta.url), {
	type: "module",
});

worker.postMessage(
	{
		type: "INIT",
		canvas: offscreen,
		physicsSAB: SAB,
		restPosBuffer: gpuInputBuffer.buffer, // Input (Read-only by Worker)
		wordCount: state.word_count,
		width: DATA_DIM,
		height: DATA_DIM,
	},
	[offscreen, gpuInputBuffer.buffer] // Transfer input buffer ownership
);

/********************
 * 3. RENDER LOOP (Main Thread)
 *********************/
const wght = PHYSICS_STATE.attribs.wght;
const wdth = PHYSICS_STATE.attribs.wdth;
const ital = PHYSICS_STATE.attribs.ital;
const cont = PHYSICS_STATE.attribs.cont;

function renderLoop() {
	mainFrames++;
	workerFrames++;
	// 1. Update Worker Globals (Stress, Active Page)
	// In a real app, use rstream here to throttle this
	const scrollY = window.scrollY;
	const viewHeight = window.innerHeight;
	const currentPage = scrollY / viewHeight;

	worker.postMessage({
		type: "UPDATE_GLOBALS",
		stress: state.curr_stress,
		activePage: currentPage,
	});

	// Define a buffer so words don't pop in/out right at edge
	const buffer = 200;
	const viewTop = scrollY - buffer;
	const viewBottom = scrollY + viewHeight + buffer;

	// 2. Apply Physics from SAB to DOM
	for (let i = 0; i < state.word_count; i++) {
		// FAST CHECK: Is this word visible?
		const y = state.node_y_pos[i];
		if (y < viewTop || y > viewBottom) continue;

		// Read directly from Shared Buffer
		// The worker updated these bytes 1 frame ago
		const w = wght[i];
		const wd = wdth[i];
		const it = ital[i];
		const co = cont[i];

		// Apply
		// Use attributeStyleMap if available (faster), else fallback
		const node = state.dom_nodes[i];

		// Optimization: Check if style actually changed?
		// (Optional, but "setting" style is expensive even if value is same)
		// For now, the view culling alone should fix the violations.

		node.style.fontVariationSettings = `'wght' ${w}, 'wdth' ${wd}, 'ital' ${it}, 'cont' ${co}`;
	}

	requestAnimationFrame(renderLoop);
}

renderLoop();

/********************
 * 4. EVENTS
 *********************/
// Simple test trigger
window.addEventListener("scroll", () => {
	state.curr_stress = Math.min(1.0, state.curr_stress + 0.05);
});
// Stress Decay
setInterval(() => {
	state.curr_stress *= 0.95;
	if (state.curr_stress < 0.01) state.curr_stress = 0;
}, 100);

// =========================================
// DEBUG / STATS HUD
// =========================================
const stats = document.createElement("div");
Object.assign(stats.style, {
	position: "fixed",
	top: "10px",
	right: "10px",
	background: "rgba(0, 0, 0, 0.8)",
	color: "#0f0",
	fontFamily: "monospace",
	padding: "10px",
	zIndex: "9999",
	pointerEvents: "auto",
	userSelect: "none",
});
document.body.appendChild(stats);

// 1. Listen for Worker Heartbeat
worker.onmessage = (e) => {
	if (e.data.type === "TICK") {
		workerFrames++;
	}
};

// 2. Stress Test Button
const btn = document.createElement("button");
btn.innerText = "💥 ADD STRESS 💥";
Object.assign(btn.style, {
	marginTop: "10px",
	padding: "5px 10px",
	background: "#333",
	color: "#fff",
	border: "1px solid #555",
	cursor: "pointer",
});
btn.onclick = () => {
	state.curr_stress = 1.0; // Max stress instantly
};
stats.appendChild(document.createElement("div")).id = "stats-text";
stats.appendChild(btn);

// Track the "previous" values so we can calculate the difference
let lastMainFrames = 0;
let lastWorkerFrames = 0;

// 3. Update HUD every second
setInterval(() => {
	// Calculate how many frames passed in the last 1000ms
	const currentMainFPS = mainFrames - lastMainFrames;
	const currentWorkerFPS = workerFrames - lastWorkerFrames;

	// Save current total for the next check
	lastMainFrames = mainFrames;
	lastWorkerFrames = workerFrames;

	const text = document.getElementById("stats-text");
	if (text) {
		text.innerHTML = `
            <strong>SYSTEM STATUS</strong><br>
            ----------------<br>
            Main FPS:   ${currentMainFPS}<br>
            Worker FPS: ${currentWorkerFPS}<br>
            Stress:     ${state.curr_stress.toFixed(2)}<br>
            Words:      ${state.word_count}
        `;
	}
}, 1000);
