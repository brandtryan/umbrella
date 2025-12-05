import { defAtom } from "@thi.ng/atom";
import { $compile } from "@thi.ng/rdom";
import { Stream, sync, reactive } from "@thi.ng/rstream";
import { gestureStream } from "@thi.ng/rstream-gestures";
import { initGraph, node, type Graph } from "@thi.ng/rstream-graph";
import { map, pluck, filter, dedupe } from "@thi.ng/transducers";

// --- 1. External Stream Sources (The "Inputs") ---
// These are created *before* the graph is defined.

/**
 * L3: Core_FBO_Data
 * This is the high-frequency stream from your GPGPU.
 * The rAF loop will call .next() on this stream with
 * the raw data from the FBO readback
 */
const coreFboData = new Stream("core-fbo-data");

/**
 * L4: Input_PageTurn
 * A low-frequency stream from user mouse/wheel events.
 * We'll use a transducer to turn raw gestures into
 * discrete "page turn" commands.
 */
const inputPageTurn = gestureStream(document.getElementById("app")).subscribe(
	pluck("zoomDelta"),
	filter((delta) => Math.abs(delta) > 0.1),
	map((delta) => (delta < 0 ? "NEXT" : "PREV")),
	dedupe()
);
inputPageTurn.id = "input-page-turn";

/**
 * L4: Config_ReadSpeed
 * A low-frequency stream holding a static or user-changeable
 * configuration value (e.g., from your Tier 2 model).
 */
const configReadSpeed = reactive(238); // Example: 238 WPM
configReadSpeed.id = "config-read-speed";

/**
 * A state atom for debugging the graph's internal values
 * (as seen in the previous hdom example).
 */
const db = defAtom({});

// --- 2. The `initGraph` Spec ---
// This defines the nodes *inside* Layer 4 and Layer 5

const graphSpec: Graph = {
	/**
	 * L4: Transform_Synchronizer
	 * This node uses `sync()` to combine the high-frequency
	 * data with the low-frequency control streams.
	 */
	synchronizer: {
		// We use the `sync()` stream constructor as the node's function
		fn: sync({
			src: {
				gpgpu: coreFboData,
				pageTurn: inputPageTurn,
				readSpeed: configReadSpeed,
			},
			// Only keep the latest values for config streams
			// `gpgpu` and `pageTurn` will only be used when they fire
			reset: false,
		}),
		// This node is a "source" (a `sync` stream),
		// so it doesn't have `ins` (inputs) in the spec.
		ins: {},
		// Output the resulting tuple to the db for debugging
		outs: { "*": "sync_tuple" },
	},

	/**
	 * L5: CSS_Transformer
	 * This node subscribes to the `synchronizer` output and
	 * transforms the combined tuple into an object
	 * of formatted CSS style strings for each word.
	 */
	css_transformer: {
		// `node` creates a new subscription with a transducer
		fn: node(
			// The `map` transducer does the formatting logic
			map((tuple) => {
				const { gpgpu, pageTurn, readSpeed } = tuple;
				const formattedStyles = {};

				// --- Placeholder Logic ---
				// This is where you would loop through your `gpgpu`
				// data (which might be a large TypedArray) and
				// format the CSS for *each* word ID.
				//
				// For this mock, we'll assume `gpgpu` is an object:
				// { "s000000": { wdth: 110, wght: 450 }, ... }
				//
				if (gpgpu) {
					for (let wordId in gpgpu) {
						const { wdth, wght } = gpgpu[wordId];
						// This is the attribute object `rdom` expects
						formattedStyles[wordId] = {
							style: {
								"font-variation-settings": `"wdth" ${wdth}, "wght" ${wght}`,
							},
						};
					}
				}
				// --- End Placeholder Logic ---

				return formattedStyles;
			})
		),
		// The input is the output stream from the `synchronizer` node
		ins: {
			tuple: { stream: "/synchronizer/node" },
		},
		// Output the final style map to the db for debugging
		outs: { "*": "css_styles" },
	},
};

// --- 3. Initialize the Graph ---
const graph = initGraph(db, graphSpec);

// --- 4. Connecting the "Engine" (rAF) and "Renderer" (rdom) ---

/**
 * This is your "engine." This rAF loop drives the
 * *entire* reactive system by running the physics
 * and pushing the new data into the graph.
 */
function runEngine() {
	// 1. Run GPGPU Physics (Shaders, etc.)
	// ... (your_physics_logic()) ...

	// 2. Read data back from FBO
	// This data needs to be formatted into the object
	// our `css_transformer` expects.
	const allWordData = {
		s000000: { wdth: 100 + Math.random() * 20, wght: 400 },
		s000001: { wdth: 100 - Math.random() * 10, wght: 450 },
		// ... etc. for all words
	};

	// 3. Push new data into the graph's source stream.
	// This single line triggers the entire dataflow:
	// synchronizer -> css_transformer -> rdom update
	coreFboData.next(allWordData);

	// 4. Schedule the next frame
	requestAnimationFrame(runEngine);
}

/**
 * L5: Sink_DOM_Update
 * This is how `rdom` *consumes* the graph's output.
 * We get the final output stream from the graph...
 */
const wordStylesStream = graph.css_transformer.node;

// ...and create *new* streams for each word that
// pluck just their own style data from the main stream.
const word000Attrs = wordStylesStream.subscribe(
	map((styles) => styles.s000000)
);
const word001Attrs = wordStylesStream.subscribe(
	map((styles) => styles.s000001)
);

// `rdom` compiles the Hiccup *once*, embedding the
// reactive attribute streams.
$compile([
	"div",
	["span#s000000.word", word000Attrs, "My "],
	["span#s000001.word", word001Attrs, "word "],
	// ... etc. for all words
]).mount(document.getElementById("app")!);

// Start the engine!
requestAnimationFrame(runEngine);
