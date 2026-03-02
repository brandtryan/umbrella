import { defAtom } from "@thi.ng/atom";
import { stream, reactive } from "@thi.ng/rstream";
import { initGraph, node, node1 } from "@thi.ng/rstream-graph";
import type { GraphSpec, Graph } from "@thi.ng/rstream-graph";
import * as tx from "@thi.ng/transducers";

// --- Tier 2 Model Calculation ---
const BASE_WPM = 238;
const C_MEDIUM = 0.85;
const ADJUSTED_WPM = BASE_WPM * C_MEDIUM;

/**
 * The main dataflow graph specification.
 */
export const appGraphSpec: GraphSpec = {
	// --- SOURCES ---

	"Config/ReadSpeed": {
		fn: (src, id) => reactive(ADJUSTED_WPM),
		ins: {},
	},

	"Input/PageTurn": {
		fn: (src, id) => stream(),
		ins: {},
	},

	"Core/FBO_Data": {
		fn: (src, id) => stream(),
		ins: {},
	},

	// --- TRANSFORM ---

	"Transform/Synchronizer": {
		fn: node(
			tx.map((tuple) => {
				// 'tuple' is { readSpeed: ..., fboData: [...] }
				// This is where we'll do the filtering logic
				console.log("TRANSFORMING:", tuple);
				// For now, just pass the raw tuple on
				return tuple;
			}),
			["readSpeed", "fboData"]
		),
		ins: {
			readSpeed: {
				stream: "/Config/ReadSpeed/node",
			},
			fboData: {
				stream: "/Core/FBO_Data/node",
			},
		},
	},

	// --- SINK (NOW SIMPLER) ---

	/**
	 * NODE: Sink/DOM_Update
	 * This is our final "sink" node. It just subscribes
	 * to the transformed data and performs its side-effect. [cite_start]
	 * [cite: 1593-1596]
	 */
	"Sink/DOM_Update": {
		/**
		 * 'fn': We use 'node1' which is optimized for a
		 * single input.
		 */
		fn: node1(
			/**
			 * We still use a 'map' transducer here, but
			 * its only job is the side-effect (the logging).
			 */
			tx.map((processedData) => {
				// 'processedData' is whatever the
				// 'Transform/Synchronizer' returned.
				console.log("SINK (for DOM update):", processedData);
				// This is where the rdom update logic will go
			})
		),
		/**
		 * 'ins': We define our single input, which the
		 * 'node1' factory expects to be named 'src'
		 * by default.
		 */
		ins: {
			src: {
				stream: "/Transform/Synchronizer/node",
			},
		},
	},
};

// --- CURTAIN CALL ---
// This is it! We pass our "script" (appGraphSpec)
// to initGraph to build the live system.

console.log("Curtain is closed. Graph is just a plan.");

// atom for storing dataflow results (optional, here only for
// debugging/stringifying graph state)
const db = defAtom<any>({});

const dataflow = initGraph(db, appGraphSpec);

console.log("Curtain is OPEN! Graph is live.");

// --- WHAT DO WE HAVE? ---
// 'dataflow' is now an object holding all the
// LIVE, RUNNING nodes.

// For example, we can prove it's live by
// accessing the 'Config/ReadSpeed' node and
// reading its current value (it's a 'reactive').
console.log(
	"Current ReadSpeed value:",
	dataflow["Config/ReadSpeed"].node.deref()
);

// The 'Sink/DOM_Update' node is now ALIVE and
// SUBSCRIBED. It's just sitting there, waiting for
// the 'Transform/Synchronizer' to send it a value.
