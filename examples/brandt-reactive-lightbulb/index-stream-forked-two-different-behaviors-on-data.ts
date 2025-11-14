import { div, h1, h2, main, textArea } from "@thi.ng/hiccup-html";
import { $compile, $input } from "@thi.ng/rdom";
import { reactive } from "@thi.ng/rstream";
import { count, scan } from "@thi.ng/transducers";

// create some reactive values:
const srcGrammar = reactive("# grammar");
const srcInput = reactive("Hello World");

$compile(
	div(
		{},
		h1({}, "Let's make a parser..."),
		main(
			{
				style: {
					display: "grid",
					"grid-template-columns": "1fr 1fr",
					"grid-gap": "0.5rem",
				},
			},
			div(
				{},
				h2({}, "grammar"),
				textArea(".w-100", {
					rows: 16,
					value: srcGrammar,
					// $input pushes what you input (type) back into the srcGrammar stream
					oninput: $input(srcGrammar),
				})
			),
			div(
				{},
				h2({}, "test input"),
				textArea(".w-100", {
					rows: 16,
					value: srcInput,
					oninput: $input(srcInput),
				})
			)
		)
	)
).mount(document.body);

// example of our reactive stream subscribing to itself.
// every letter I type in text area is getting logged in console!
// and now, adding a xform (map()), change it to uppercase!
// map() is like transform and is often what I'll want. Transform is more flexible.

// and this to uppercase is only happening in console. srcGrammer in $compile is still
// doing its thing - and is not uppercase.
srcGrammar
	.map((x) => x.toUpperCase())
	.subscribe({
		next(x) {
			console.log(x);
		},
	});
