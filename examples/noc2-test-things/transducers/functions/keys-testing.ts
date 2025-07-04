import { keys } from "@thi.ng/transducers";

const obj = {
	first: "Brandt",
	last: "Ryan",
	full: "Brandt Ryan"
};

console.log(
	[...keys(obj)]
);
// ["first", "last", "full"]

// Same as:
console.log(Object.keys(obj));
// ["first", "last", "full"]
