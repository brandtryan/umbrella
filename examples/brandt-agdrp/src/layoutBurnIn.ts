import { ecs, wght, wdth, ital, cont, urge, anch } from "./ecs";
import * as Content from "./html";
import { LOGGER as log } from "@thi.ng/ecs";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import { $compile } from "@thi.ng/rdom";
import { indexToUV } from "@thi.ng/shader-ast-stdlib";
import { index } from "../../../packages/shader-ast/src/ast/indexed";

log.set(new ConsoleLogger("ecs", LogLevel.INFO));

export const absLayout = () => {
	// 1. PREPARE CONTENT
	// Sort pages numerically (page1, page2, page10...)
	const sortedPageKeys = Object.keys(Content)
		.filter((key) => key.startsWith("page"))
		.sort((a, b) => {
			const numA = parseInt(a.replace("page", ""), 10);
			const numB = parseInt(b.replace("page", ""), 10);
			return numA - numB;
		});

	const sortedPages = sortedPageKeys.map(
		(key) => Content[key as keyof typeof Content]
	);

	// 2. MOUNT
	const book = document.getElementById("app")!;
	const spine = div("#spine", {}, ...sortedPages);
	$compile(spine).mount(book);

	// 3. QUERY & COUNT
	// need the total word count FIRST to init the ECS
	const allWords = document.getElementsByClassName("word");
	const wordCount = allWords.length;

	console.log(`Found ${sortedPages.length} pages and ${wordCount} words.`);

	// 3.5 Index words by page
	const allPages = Array.from(document.getElementsByClassName("page"));
	let globalWordIndex = 0; // Tracks the continous CSS ID

	for (let page of allPages) {
		const wordsInPage: HTMLElement[] = Array.from(
			page.querySelectorAll<HTMLElement>(".word")
		);
		wordsInPage.forEach((wrd, page) => {
			const box = wrd.getBoundingClientRect();
			// Normalize here?
			const x = box.x;
			const y = box.y;
			const w = box.width;
			const p = page;

			wrd.dataset.entityId = globalWordIndex.toString();
			globalWordIndex++;
		});
	}

	// 4. Global access for console/debugging
	exposeGlobal("ecs", ecs, true);

	// 5. Update Capacity
	ecs.setCapacity(wordCount);

	// 5. Create entities
	for (let i = 0; i < wordCount; i++) {
		ecs.defEntity([wght, wdth, ital, cont, urge, anch]);
	}

	return {
		// Helper to get raw Float32Arrays for GPU
		getFloatArray: (
			id: "anch" | "wght" | "wdth" | "ital" | "cont" | "urge"
		) => ecs.components.get(id)!.vals,
	};
};

absLayout();
