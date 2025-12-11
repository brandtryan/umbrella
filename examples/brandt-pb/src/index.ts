import * as Content from "./html";
import { div } from "@thi.ng/hiccup-html";
import { tunnel, stream } from "@thi.ng/rstream";
import { $compile } from "@thi.ng/rdom";

/********************
 * CONFIGURATION
 *********************/
const DATA_DIM = 64;
const MAX_WORDS = DATA_DIM * DATA_DIM;

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

const pages = div({ id: "app" }, ...sortedPages);

$compile(pages).mount(document.body);

/********************
 * CREATE OFFSCREEN CANVAS AND DISPATCH WORKER
 *********************/
const canvas = document.createElement("canvas");
canvas.width = DATA_DIM;
canvas.height = DATA_DIM;
canvas.style.display = "none";
const offscreen = canvas.transferControlToOffscreen();

const worker = new Worker(new URL("./worker.ts", import.meta.url), {
	type: "module",
});

const simulation = tunnel({
	src: worker,
	interrupt: false,
	transferables: (msg: any) => (msg.canvas ? [msg.canvas] : []),
});

const workerInput = stream();
workerInput.subscribe(simulation);
workerInput.next({ canvas: offscreen });
