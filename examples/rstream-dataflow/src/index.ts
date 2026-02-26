// SPDX-License-Identifier: Apache-2.0
import { defAtom } from "@thi.ng/atom";
import { equiv } from "@thi.ng/equiv";
import { start } from "@thi.ng/hdom";
import { getIn } from "@thi.ng/paths";
import { fromRAF } from "@thi.ng/rstream";
import { serialize } from "@thi.ng/rstream-dot";
import { gestureStream } from "@thi.ng/rstream-gestures";
import { extract, initGraph, mul, node, node1 } from "@thi.ng/rstream-graph";
import { choices, comp, dedupe, map } from "@thi.ng/transducers";
import { circle } from "./circle.js";

// infitite ITERATOR of rando colors (Tachyons CSS class names)
// used by 'COLOR' GRAPH NODE below
const colors = choices([
	"bg-red",
	"bg-blue",
	"bg-gold",
	"bg-light-green",
	"bg-pink",
	"bg-light-purple",
	"bg-orange",
	"bg-gray",
]);

// atom for story dataflow results (optional, here only for
// debugging/stringifying graph state)
const db = defAtom<any>({});

// combined mouse and touch event stream
// this stream produces tuples of:
// [eventtytpe, [pos, clickpos, delta]]
// Note: only single touches are supported - no multitouch!
const gestures = gestureStream(document.getElementById("app")!);

// requestAnimationFrame() based counter stream. This is consumed by the
// "sine" graph node below, but predefned here for visualization
// purposes (see end of file)
// BR: drag pos mouse causes sine wave to create circle
// BR: global defined here to access below?
const raf = fromRAF();

// dataflow graph definition. Each KEY in this object represents a NODE
// in the graph and its VALUE is a `NODESPEC`. The `INITGRAPH` function
// TRANSFORMS these SPECS into a DAG (directed acyclic graph) of
// @thi.ng/RSTREAM TYPES, so each "NODE" IS ACTUALLY implemented as a
// STREAM of some kind...

// The lexical order of node specs is irrelevant, but since graph is
// a DAG, no cyclic dependencies between nodes are allowed ( and would
// result in a stack overflow during node resolution)
// I HAVE NO CYCLIC DEPENDENCIES

// The STRING assigned to `out` VALUES represent KEYS/PATHS in the
// above `db state ATOM and are used here to capture and display the
// CURRENT INTERNAL STATE of the graph and is useful for debugging and
// backup etc.
const graph = initGraph(db, {
	// extracts current mouse/touch position from gesture tuple
	// the `[1, 0]` is the lookup path, i.e., `gesture[1][0]`
});
