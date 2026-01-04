import { LOGGER as log } from "@thi.ng/ecs";
import { exposeGlobal } from "@thi.ng/expose";
import { div } from "@thi.ng/hiccup-html";
import { ConsoleLogger, LogLevel } from "@thi.ng/logger";
import { $compile } from "@thi.ng/rdom";
import { anch, cont, ecs, ital, urge, wdth, wght } from "./ecs";
import * as Content from "./html";

log.set(new ConsoleLogger("ecs", LogLevel.INFO));

const W = window.innerWidth;
const H = window.innerHeight;

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

const pageWordCounts: number[] = Content.getPageCounts(sortedPages);
console.log("Word Counts per Page:", pageWordCounts);

const book = div({ id: "pages" }, ...sortedPages);

$compile(book).mount(document.getElementById("app")!);
await document.fonts.ready;

/********************
 * WORD DOM DATA
 *********************/
const all_words = Array.from(document.getElementsByClassName("word"));
const all_words_count = all_words.length;
const dom_nodes = [...all_words] as HTMLElement[];
dom_nodes.forEach((el) => (el.dataset.id = dom_nodes.indexOf(el).toString()));

/********************
 * LAYOUT & DATA PACKING
 *********************/
// need a specific, dense buffer to send to the GPU Texture.
// Structure: [x, y, page, id,  x, y, page, id...]
// Above is what i think is a AOS as oppossed to an SOA, and I wonder the usefulness
// of even including page and id in this particular array which only references home base.
// If I could use a vec2 and just pass along (x,y), as the position of the this
// element in the array is precisely the same integer as it's ECS entity id. Thoughts?
// So I believe this is what I've been calling the "anchor" position/array
// The components in ECS are:
// "anch" for anchor position
// "wght" for mass
// "wdth" for volume
// "ital" for vel/inflate
// "cont" for edgyness

// 4. Global access for console/debugging
exposeGlobal("ecs", ecs, true);

// 5. get the Raw buffer ONCE (for ANCH)
const anchComp = ecs.components.get("anch")!;
const anchBuff = anchComp.vals; // this is the float32array
// 6. Update Capacity
ecs.setCapacity(all_words_count);

// 7. Create 5d Group
const group = ecs.defGroup([wght, wdth, ital, cont, urge]);

// 8. Create Entities
for (let i = 0; i < dom_nodes.length; i++) {
	ecs.defEntity([wght, wdth, ital, cont, urge, anch]);
	const rect = dom_nodes[i].getBoundingClientRect();
	const ptr = i * 4;

	// Normalize (Pixels -> 0..1 for UV texture)
	const normX = rect.left / W;
	const normY = 1.0 - rect.top / H;

	// Write directly to buffer for the anchors one time
	anchBuff[ptr] = normX; // x (absolute)
	anchBuff[ptr + 1] = normY; // y (absolute)
	anchBuff[ptr + 2] = 0; // page (calc logic here)
	anchBuff[ptr + 3] = i; // id (the entity id)
}

console.log(`
All 3 numbers to right should match!
Total Words * 4: 		${all_words_count * 4}
===========================================
Entities * 4: 			${ecs.idgen.capacity * 4}
===========================================
anchBuff.vals.length:	${ecs.components.get("anch")!.vals.length}
`);

console.log(anchBuff);
