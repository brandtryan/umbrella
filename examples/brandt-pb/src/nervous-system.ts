import { sync, fromEvent, fromRAF } from "@thi.ng/rstream";
import { map, dedupe, scan } from "@thi.ng/transducers";
import { calculateReadingSpeed } from "./reading-model";

// Configuration for Tier 2 model
const SPEED_CONFIG = calculateReadingSpeed();

// Defined Types for clarity
interface NervousState {
	page: number;
	timer: number;
	tLast: number;
}

interface NervousInput {
	page: number;
	time: number;
}

export function initNervousSystem(
	worker: Worker,
	pageWordCounts: number[] // Array: [Page0_Count, Page1_count...]
) {
	/********************
	 * INPUTS
	 *********************/
	// Scroll Stream
	const scroll$ = fromEvent(window, "scroll").transform(
		map(() => window.scrollY),
		dedupe()
	);

	// Clock
	const raf$ = fromRAF();

	/********************
	 * LOGIC NODES
	 *********************/

	// A. Detect Current Page
	const pageIndex$ = scroll$.transform(
		map((y: any) => Math.floor(y / window.innerHeight)),
		dedupe()
	);

	// B. The Reading Timer (The "Flashlight" logic)
	// We combine Time + PageIndex.
	const ReadingState$ = sync(
		{
			src: {
				page: pageIndex$,
				time: raf$,
			},
		}.scan({
			init: (page: 0, timer: 0, tLast: 0) => null,
			complete: (acc: any) => {
				acc;
			},
			step: (acc: any, curr: any) => {
				// 1. Initialize tLast on first run if needed (or handle via init)
				if (acc.tLast === 0) {
					return { page: curr.page, timer: 0, tLast: curr.time };
				}

				// 2. Page Turn Detected: Reset Timer
				if (curr.page !== acc.page) {
					return { page: curr.page, timer: 0, tLast: curr.time };
				}

				// 3. Normal Tick: Accumulate dt
				const dt = (curr.time - acc.tLast) * 0.001; // Convert ms to seconds!
				return {
					page: curr.page,
					timer: acc.timer + dt,
					tLast: curr.time,
				};
			},
		})
	);

	// 2. OUTPUT
	const activeIndex$ = ReadingState$.transform(
		map((state: any) => {
			// 1. Find Start index of curr page (sum of previous pages)
			let startIndex = 0;
			for (let i = 0; i < state.page; i++)
				startIndex += pageWordCounts[i] || 0;

			// 2. Use tier2 formula
			// Pos = Start + (Time * Speed)
			// Note: state.timer is now in Seconds
			const estimatedOffset = state.timer * SPEED_CONFIG.wordsPerSecond;

			// 3. Clamp to page length
			const maxOnPage = pageWordCounts[state.page] || 0;
			const actualOffset = Math.min(estimatedOffset, maxOnPage);

			return startIndex + actualOffset;
		})
	);

	// 4. WORKER UPLINK
	activeIndex$.subscribe({
		next: (idx) => {
			worker.postMessage({
				type: "UPDATE_READING_POS",
				val: idx,
			});
		},
		// error: (e) => console.error("Nervous System Error:", e),
	});

	return { activeIndex$ };
}
