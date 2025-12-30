import * as Content from "./html";
import { ECS, Group } from "@thi.ng/ecs";
import { $compile } from "@thi.ng/rdom";

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

const pageWordCounts: number[] = getPageCounts(sortedPages);
console.log("Word Counts per Page:", pageWordCounts);

const book = div({ id: "pages" }, ...sortedPages);

$compile(book).mount(document.getElementById("app")!);
await document.fonts.ready;

/********************
 * ECS Setup
 *********************/
interface CompSpecs {
	wght: Float32Array;
	wdth: Float32Array;
	ital: Float32Array;
	cont: Float32Array;
	Urge: Float32Array;
	rect: Float32Array;
	hot: boolean;
}

const ecs = new ECS<CompSpecs>({ capacity: 4096 });

const wght = ecs.defComponent({
	id: "wght",
	type: "f32",
	size: 1,
});

const wdth = ecs.defComponent({
	id: "wdth",
	type: "f32",
	size: 1,
});

const ital = ecs.defComponent({
	id: "ital",
	type: "f32",
	size: 1,
});

const cont = ecs.defComponent({
	id: "cont",
	type: "f32",
	size: 1,
});

const Urge = ecs.defComponent({
	id: "Urge",
	type: "f32",
	size: 1,
});

const home = ecs.defComponent({
	id: "home",
	type: "f32",
	size: 2,
	stride: 4,
});

const hot = ecs.defComponent({
	id: "hot",
	type: "u8",
	size: 1,
});
