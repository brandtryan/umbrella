import { defAtom } from "@thi.ng/atom";
import { sync, syncRAF, fromRAF, reactive } from "@thi.ng/rstream";
import { serialize } from "@thi.ng/rstream-dot";
import { gestureStream } from "@thi.ng/rstream-gestures";
import { node, node1, initGraph } from "@thi.ng/rstream-graph";
import { map, pluck, filter, dedupe } from "@thi.ng/transducers";

/***************
 * EXTERNAL (RAW) Sources
 ***************/
const rafEngine = fromRAF();
rafEngine.id = "raf-engine";

const gestures = gestureStream(document.getElementById("app")!);
gestures.id = "gestures-source";

const stressControl = reactive(0.5);
stressControl.id = "stress-control-source";

const pageLogicTransducer = map((gestureEvent) => {
	const activeRange = [430, 470]; // MOCK DATA
	return activeRange;
});

const db = defAtom({}); // debugging

const graphSpec = {
	/***************
	 * PageLogic Node
	 *****************/
	page_logic: {
		fn: node1(pageLogicTransducer),
		ins: {
			src: { stream: () => gestures },
		},
		outs: { "*": "active_range_debug" },
	},
	/***************
	 * enabledWordsStream Node
	 *****************/
	enabled_words_stream: {
		fn: (inputs: any) => syncRAF(inputs.src),
		ins: {
			src: { stream: "/page_logic/node" },
		},
		outs: { "*": "enabled_words_debug" },
	},
	/***************
	 * syncedStressStream Node
	 *****************/
	synced_stress_stream: {
		fn: (inputs: any) => syncRAF(inputs.src),
		ins: {
			src: { stream: () => stressControl },
		},
		outs: { "*": "synced_stress_debug" },
	},
	/***************
	 * Layer 3 --- Core_FBO_Data
	 *****************/
	core_fbo_data: {
		fn: node(
			map((frame) => {
				// 1. Run GPGPU Physics (using frame as time)
				// 2. Read back raw Float32Array from FBO
				const rawFboData = new Float32Array(7600); // MOCK DATA
				// (fill with data...)
				return rawFboData;
			})
		),
		ins: { frame: { stream: () => rafEngine } },
		outs: { "*": "raw_fbo_data" },
	},
	/***************
	 * Layer 4 --- Transform/Synchronize
	 *****************/
	synchronizer: {
		fn: sync,
		ins: {
			gpgpu: { stream: "/core_fbo_data/node" },
			activeSet: { stream: "/enabled_words_stream/node" },
			stress: { stream: "/synced_stress_stream/node" },
		},
		outs: { "*": "sync_tuple" },
	},

	/***************
	 * Layer 5 --- CSS_Transformer
	 * Subscribes to the synchronizer's tuple.
	 * Filters the raw data based on the activeSet.
	 * Emits a sparse object of CSS styles.
	 *****************/
	css_transformer: {
		fn: node(
			map((tuple: any) => {
				const { gpgpu, activeSet, stress } = tuple;
				const [startIndex, endIndex] = activeSet;

				// Total word count, needed for SOA offsets
				const numWords = 3800; // Assuming 3800 words

				const activeStyles: { [key: string]: object } = {};

				// --- Placeholder SOA Logic ---
				// (Assuming [wdth0..wdthN, wght0..wghtN] layout)
				const W_OFFSET = 0;
				const G_OFFSET = numWords;
				// --- End Placeholder Logic ---

				// Iterate *only* over the active/enabled words
				for (let i = startIndex; i <= endIndex; i++) {
					const wdth = gpgpu[W_OFFSET + i];
					const wght = gpgpu[G_OFFSET + i];

					// Use the stress scalar to modify the style?
					// (e.g., const opacity = 1.0 - stress;)

					const wordId = `s${String(i).padStart(6, "0")}`;

					activeStyles[wordId] = {
						style: {
							"font-variation-settings": `"wdth" ${wdth}, "wght" ${wght}`,
							// "opacity": opacity
						},
					};
				}
				// The final sparse object:
				// { "s000430": {style...}, "s000431": {style...}, ... }
				return activeStyles;
			})
		),
		ins: {
			// This is the input: the labeled tuple from the synchronizer
			tuple: { stream: "/synchronizer/node" },
		},
		outs: { "*": "css_styles_debug" }, // Output to db
	},
};

export const graph = initGraph(db, graphSpec);
