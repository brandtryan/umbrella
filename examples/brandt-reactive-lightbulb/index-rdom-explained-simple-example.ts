import { $compile } from "@thi.ng/rdom";
import { reactive } from "@thi.ng/rstream";
import { count, scan } from "@thi.ng/transducers";
// this is the stream and $Sub is auto created and nested within it.
// then scan is a 'transducer' which takes a reducer arg (count)
// It looks like maybe scan is the accumulator and count is transformer

// So when something is "reactive", and it is put into element, it is wrapped
// and treated in a special way - only that span is being updated in DOM. It also
// creates subscription for the element.
// instead of a counter incrementing a number and displaying it, we can transform
// that number to (default back to 1) to step through an array of colors, so the
// h1 changes color with every click!
const counter = reactive(0).transform(scan(count()));
$compile([
	"div",
	{},
	[
		"h1",
		{
			// "red", "green", "blue" are tachyon class names
			class: counter.map((x) => ["red", "green", "blue"][x % 3]),
			onclick: () => counter.next(0), // Zero is being overriden by count() default
		},
		"Hello YouTube: ",
		counter,
	],
]).mount(document.body);
