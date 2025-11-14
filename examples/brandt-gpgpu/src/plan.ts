import { defAtom } from "@thi.ng/atom";
import { stream, reactive } from "@thi.ng/rstream";
import { serialize } from "@thi.ng/rstream-dot";
import { gestureStream } from "@thi.ng/rstream-gestures";
import { extract, initGraph, node, node1 } from "@thi.ng/rstream-graph";
import { map } from "@thi.ng/transducers";

// atom for storing dataflow results (optional, here only for
// debugging/stringifying graph state)
const db = defAtom({});

// zoom event stream
// const zoom = gestureStream(document.getElementById("app")!);

// --- Tier 2 Model Calculation ---
const BASE_WPM = 238;
const C_MEDIUM = 0.85;
const ADJUSTED_WPM = BASE_WPM * C_MEDIUM;

/**
 * The main dataflow graph specification.
 */
const graph = initGraph(db, {
	//

	// --- TRANSFORM ---
	transizer: {
		fn: node(
			map((ins) => {
				// console.log(ins);
				const { readspeed, fbodata } = ins;
				return readspeed && fbodata
					? console.log(`returning calculated reading position...
								   receiving axes values...`)
					: undefined;
			})
		),
		ins: {
			readspeed: { stream: "/readspeed/node" },
			fbodata: { stream: "/fbodata/node" },
		},
		outs: { "*": "transizer" },
	},

	// --- SINK (NOW SIMPLER) ---

	/**
	 * NODE: Sink/DOM_Update
	 * This is our final "sink" node. It just subscribes
	 * to the transformed data and performs its side-effect. [cite_start]
	 * [cite: 1593-1596]
	 */
	sink: {
		/**
		 * 'fn': We use 'node1' which is optimized for a
		 * single input.
		 */
		fn: node1(
			/**
			 * We still use a 'map' transducer here, but
			 * its only job is the side-effect (the logging).
			 */
			map((processedData) => {
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
				stream: "/transizer/node",
			},
		},
	},
});

// --- CURTAIN CALL ---
// This is it! We pass our "script" (appGraphSpec)
// to initGraph to build the live system.

console.log("Curtain is closed. Graph is just a plan.");

console.log("Curtain is OPEN! Graph is live.");
console.log(serialize([graph.transizer.node]));
// --- WHAT DO WE HAVE? ---
// 'dataflow' is now an object holding all the
// LIVE, RUNNING nodes.

// For example, we can prove it's live by
// accessing the 'Config/ReadSpeed' node and
// reading its current value (it's a 'reactive').

// The 'Sink/DOM_Update' node is now ALIVE and
// SUBSCRIBED. It's just sitting there, waiting for
// the 'Transform/Synchronizer' to send it a value.
