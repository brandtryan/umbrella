import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { $compile } from "@thi.ng/rdom";
import { postWorker, stream, tunnel } from "@thi.ng/rstream";
import { AttribPool } from "@thi.ng/vector-pools";
import * as Content from "./html";
/********************
 * CONFIGURATION
 *********************/
const DATA_DIM = 64;
const MAX_WORDS = DATA_DIM * DATA_DIM;

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
const state = {
	stress: 0.0,
	lastActionTime: Date.now(),
	vw: window.innerWidth,
	vh: window.innerHeight,
	scrollY: window.scrollY,
	wordCount: 3297,
	// domNodes: [] as HTMLElement[],
	domNodes: [] as HTMLElement[],
};

/********************
 * WORD ANCHOR POSITIONS
 *********************/
const words = document.querySelectorAll(".word");
const count = words.length;
state.domNodes = Array.from(words) as HTMLElement[];
state.wordCount = count;

// 1. Create Pool (Interleaved x, y, page, id)
// We use a normal ArrayBuffer (not Shared) because we transfer it.
const REST_POS = new AttribPool({
	num: MAX_WORDS,
	mem: { size: MAX_WORDS * 16 + 256 }, // 16 bytes per word
	attribs: {
		// x: { type: "f32", size: 1, byteOffset: 0 },
		// y: { type: "f32", size: 1, byteOffset: 4 },
		// page: { type: "f32", size: 1, byteOffset: 8 },
		// id: { type: "f32", size: 1, byteOffset: 12 },
		x: { type: "f32", size: 1, byteOffset: 0 },
		y: { type: "f32", size: 1, byteOffset: 4 },
		page: { type: "i8", size: 1, byteOffset: 8 },
		id: { type: "i8", size: 1, byteOffset: 12 },
	},
});

function updateLayout() {
	const binding = document.getElementById("book");
	const offsetX = binding?.getBoundingClientRect()!.left || 0;

	// 2. Accessors (Strided views)
	const x = REST_POS.attribs.x;
	const y = REST_POS.attribs.y;
	const page = REST_POS.attribs.page;
	const id = REST_POS.attribs.id;

	// 3. Populate
	for (let i = 0; i < count; i++) {
		const rect = words[i].getBoundingClientRect();
		const absTop = rect.top + window.scrollY;

		// Write to Strided views
		x[i] = rect.left - offsetX + rect.width * 0.5;
		y[i] = absTop % window.innerHeight; // Local Y
		page[i] = Math.floor(absTop / window.innerWidth); // Page Index
		id[i] = i; // Store ID for shader use
		// state.domNodes[i] = words[i] as HTMLElement;
	}

	console.log(`Layout Updated
	Baked ${count} words.`);
}

updateLayout();
/********************
 * MEMORY CONFIGURATION
 *********************/
// 1. Define Header Specs
// Byte 0-3: Stress (Float32)
// Byte 4-7: Scroll/Page (Float32)
// Byte 8-31: Reserved for future use
const HEADER_SIZE = 32;
const POOL_START = 32;
// 4 fields (wght, wdth, ital, cont) * 4 bytes = 16 bytes per word
const stride = 16;
const poolSize = state.wordCount * stride;
const totalBytes = HEADER_SIZE + poolSize + 1024; // +256 padding for safety

// SHARED BRAIN
const SAB = new SharedArrayBuffer(totalBytes);

// 4. Create the Views
// A. Global State View (The Header) - Float32 view of first 32 bytes
const globalStateView = new Float32Array(SAB, 0, 8);

// B. Physics Data Pool (The Body)
const PHYSICS_STATE = new AttribPool({
	mem: {
		buf: SAB,
		start: POOL_START, // Important: Don't touch the header bytes!
		size: SAB.byteLength,
		align: 16, // Optimize for SIMD/WebGL alignment
		skipInitialization: false, // You are the Creator
	},
	num: state.wordCount,
	attribs: {
		wght: { type: "f32", size: 1, byteOffset: 0, default: 300 },
		wdth: { type: "f32", size: 1, byteOffset: 4, default: 100 },
		ital: { type: "f32", size: 1, byteOffset: 8, default: 0 },
		cont: { type: "f32", size: 1, byteOffset: 12, default: 0 },
	},
});

/********************
 * UPDATE LOOPS
 *********************/
// 1. Input Loop (Writes to Header)
// Run this whenever inputs change (scroll, resize, etc.)
function updateGlobals() {
	// Write directly to shared memory. Worker sees this instantly.
	globalStateView[0] = state.stress;
	globalStateView[1] = state.scrollY;
}
function initInputs() {
	window.addEventListener(
		"scroll",
		() => {
			state.scrollY = window.scrollY;
			state.stress = Math.max(0, state.stress - 0.05);
			state.lastActionTime = Date.now();
			updateGlobals(); // <-- update the shared brain!
		},
		{ passive: true }
	);

	let timer: any;
	window.addEventListener("resize", () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			state.vh = window.innerHeight;
			state.vw = window.innerWidth;
			updateLayout();
		}, 200);
	});
}

initInputs();

/********************
 * CREATE OFFSCREEN CANVAS AND DISPATCH WORKER
 *********************/
const canvas = document.createElement("canvas");
canvas.width = DATA_DIM;
canvas.height = DATA_DIM;
canvas.style.display = "none";
const offscreen = canvas.transferControlToOffscreen();

// const worker = postWorker("./worker.ts");
const worker = new Worker(new URL("./worker.ts", import.meta.url), {
	type: "module",
});

// 1. Configure the Tunnel correctly
const simulation = tunnel({
	src: worker,
	interrupt: false,
	// CRITICAL: We must list ALL transferables here.
	// We transfer the Canvas and the Rest Position Buffer (we don't need it on main anymore).
	// We DO NOT transfer the SAB (it's shared).
	transferables: (msg: any) =>
		[msg.canvas, msg.restPosBuffer].filter((x) => !!x),
});

// THE SILENCE BREAKER
worker.onerror = (err) => {
	console.error("Worker Crashed:", err.message, err.filename, err.lineno);
};

const workerInput = stream();
workerInput.subscribe(simulation);
// console.log("REST_POS.pool.buf:", REST_POS?.pool?.buf); // Use optional chaining for safety
// 2. Send the Full Payload
workerInput.next({
	type: "INIT",
	canvas: offscreen,
	// The Shared Brain (Reference)
	// physicsSAB: SAB,
	physicsSAB: PHYSICS_STATE.pool.buf,
	// The Static Map (Transfer) - accessing the underlying buffer
	restPosBuffer: REST_POS.pool.buf.slice(0),
	// Metadata
	wordCount: state.wordCount,
	width: DATA_DIM,
	height: DATA_DIM,
});
