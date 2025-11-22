You are right to be scared of that `allWordData` object. You've hit on the exact optimization that makes this architecture feasible.

My previous mock-up was a "quick-and-dirty" example. Passing a 3800-entry JavaScript object every frame is slow and inefficient.

Your instincts are correct. We don't pass a giant object. We pass the **raw data** from the GPU and combine it with the **"enabled" logic** from your `Config_ReadSpeed` stream.

Let's refine the mock-up based on your excellent points.

---

### 1\. The Labeled Tuple (What `sync` Creates)

You're right, the `sync()` operator creates a labeled tuple (a plain JavaScript object). Based on our `sync()` config, the object emitted by the `/synchronizer/node` will look like this every time `coreFboData` fires:

```javascript
{
  gpgpu: Float32Array([...]), // The RAW data from the FBO readback
  pageTurn: "PREV",           // The last-emitted value from this stream
  readSpeed: {
    position: 450,            // The current "center" word index
    window: 20                // How many words on either side are "active"
  }
}
```

### 2\. The `Config_ReadSpeed` (The "Enabled" Logic)

This stream no longer just emits a single number. It emits an _object_ that defines the "current_word_set" or, more accurately, the "active window." This is your **boolean "enabled" attribute**.

### 3\. The New `css_transformer` (The "Smart" Formatter)

This is the key. The `css_transformer` is no longer a "dumb" formatter. It's a "smart" _selector_.

It receives the labeled tuple and:

1.  Reads the `readSpeed` object to find the active range (e.g., words 430 to 470).
2.  Reads the raw `gpgpu` `Float32Array`.
3.  Iterates _only_ from 430 to 470.
4.  For each active word, it looks up its values in the `Float32Array` (this assumes your array has a predictable Structure-of-Array layout).
5.  It builds a **sparse** object containing _only_ the styles for _active_ words.

This is **dramatically** more efficient.

---

## Revised `initGraph` Mock-up

Here is the new, more efficient architecture.

```javascript
import { defAtom } from "@thi.ng/atom";
import { $compile } from "@thi.ng/rdom";
import { Stream, sync, reactive } from "@thi.ng/rstream";
// ... other imports ...

// --- 1. External Stream Sources ---

/**
 * L3: Core_FBO_Data
 * Emits the raw Float32Array from the GPGPU readback.
 */
const coreFboData = new Stream("core-fbo-data");

/**
 * L4: Input_PageTurn
 * (Same as before)
 */
const inputPageTurn = gestureStream(/*...*/)
  // ... (transducers)
inputPageTurn.id = "input-page-turn";

/**
 * L4: Config_ReadSpeed
 * NEW: Emits an object defining the active "reading window."
 * This is our "enabled" logic.
 */
const configReadSpeed = reactive({
	position: 0,
	window: 20, // e.g., 20 words before, 20 words after
});
configReadSpeed.id = "config-read-speed";

// Debug atom
const db = defAtom({});

// --- 2. The `initGraph` Spec ---

const graphSpec = {
	/**
	 * L4: Transform_Synchronizer
	 * (Same as before)
	 * Combines all inputs into a labeled tuple.
	 */
	synchronizer: {
		fn: sync({
			src: {
				gpgpu: coreFboData,
				pageTurn: inputPageTurn,
				readSpeed: configReadSpeed,
			},
			reset: false,
		}),
		ins: {},
		outs: { "*": "sync_tuple" },
	},

	/**
	 * L5: CSS_Transformer (Now "Smart")
	 * Subscribes to the synchronizer.
	 * Builds a SPARSE object of styles for *only*
	 * the "enabled" (active) words.
	 */
	css_transformer: {
		fn: node(
			map((tuple) => {
				const { gpgpu, readSpeed } = tuple;
				const { position, window } = readSpeed;

				// Calculate the "enabled" range
				const startIndex = Math.max(0, position - window);
				const endIndex = Math.min(3800, position + window); // 3800 is total words

				const activeStyles = {};

				// --- Placeholder: SOA Layout Logic ---
				// This logic assumes a SOA layout in the TypedArray
				// [wdth0, wdth1, ... wdth3799, wght0, wght1, ... wght3799]
				// A real implementation might be simpler, e.g.,
				// [wdth0, wght0, ital0, wdth1, wght1, ital1, ...]
				const W_OFFSET = 0; // word width data starts at index 0
				const G_OFFSET = 3800; // word weight data starts at index 3800

				// Iterate *only* over the active/enabled words
				for (let i = startIndex; i < endIndex; i++) {
					// Look up the word's data in the raw array
					const wdth = gpgpu[W_OFFSET + i];
					const wght = gpgpu[G_OFFSET + i];

					// The word ID (e.g., "s001234")
					const wordId = `s${String(i).padStart(6, "0")}`;

					// Add *only* this active word's style to the object
					activeStyles[wordId] = {
						style: {
							"font-variation-settings": `"wdth" ${wdth}, "wght" ${wght}`,
						},
					};
				}
				// --- End Placeholder Logic ---

				// This object is sparse!
				// e.g., { "s000430": {...}, "s000431": {...}, ... }
				return activeStyles;
			})
		),
		ins: {
			tuple: { stream: "/synchronizer/node" },
		},
		outs: { "*": "css_styles" },
	},
};

// --- 3. Initialize the Graph ---
const graph = initGraph(db, graphSpec);

// --- 4. "Engine" (rAF) and "Renderer" (rdom) ---

/**
 * The rAF "Engine" Loop
 */
function runEngine() {
	// ... (run physics) ...

	// Create a placeholder 3800 * 2 = 7600-element array
	const rawFboData = new Float32Array(7600);
	// ... (fill it with mock data) ...

	// Push the raw, compact array into the graph.
	// This is very fast.
	coreFboData.next(rawFboData);

	requestAnimationFrame(runEngine);
}

/**
 * The `rdom` "Renderer" Setup
 */
const wordStylesStream = graph.css_transformer.node;

// Create all 3800 word attribute streams.
// This seems like a lot, but it's just setup.
const allWordAttributeStreams = [];
for (let i = 0; i < 3800; i++) {
	const wordId = `s${String(i).padStart(6, "0")}`;
	allWordAttributeStreams.push(
		// Each stream plucks its own data from the sparse object.
		// `dedupe()` is CRITICAL. It ensures that if the word
		// is *not* in the activeStyles object (i.e., it's not
		// "enabled"), it won't emit a new value (undefined),
		// and rdom will do *nothing* for that word.
		wordStylesStream.subscribe(map((styles) => styles[wordId]), dedupe())
	);
}

// Build the Hiccup array
const hiccupTree = ["div"];
const words = ["My ", "word ", "is ", "Hiccup ", ...]; // Your 3800 words
for (let i = 0; i < 3800; i++) {
	const wordId = `s${String(i).padStart(6, "0")}`;
	hiccupTree.push([
		`span#${wordId}.word`,
		allWordAttributeStreams[i], // Embed the word's personal stream
		words[i],
	]);
}

// Compile once
$compile(hiccupTree).mount(document.getElementById("app"));

// Start the engine
requestAnimationFrame(runEngine);
```
