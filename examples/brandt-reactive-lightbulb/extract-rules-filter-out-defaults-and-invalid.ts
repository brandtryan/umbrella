import { div, h1, h2, main, textArea } from "@thi.ng/hiccup-html";
import { defGrammar } from "@thi.ng/parse";
import { $compile, $input } from "@thi.ng/rdom";
import { reactive } from "@thi.ng/rstream";
import { count, filter, map, scan } from "@thi.ng/transducers";

// create some reactive values:
const srcGrammar = reactive(`# grammar
list: '('! <expr> ')'! ;
sym: ( <ALPHA_NUM> | [?!$+\\u002d*/.~#^=<>] )+ => join ;
expr: ( <FLOAT> | <STRING> | <sym> | <list> | <WS1> )* ;
`);

const srcInput = reactive("Hello World");

// Anything typed into srcGrammer we want to transform using defGrammer() from parse package
const lang = srcGrammar.map((src) => {
	try {
		return { lang: defGrammar(src) }; // success, returns lang(uage) interpreter
	} catch (e) {
		return { error: e };
	}
});

// extract rules
const ruleIDs = lang.transform(
	// 2 possibilities - error, or valid lang, so filter here for valid lang only
	filter((l) => !!l.lang), // !! double negative
	// the filter below causes defaults to not be displayed, which the regex finds
	map((l: any) =>
		Object.keys(l.lang.rules).filter((id) => /^[a-z0-9._$-]+$/.test(id))
	)
);

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
			),
			div(
				{},
				h2({}, "AST"),
				textArea(".w-100", {
					rows: 16,
					value: ruleIDs.map((x) => String(x)), // temp for testing debugging
					disabled: true,
				})
			)
		)
	)
).mount(document.body);
