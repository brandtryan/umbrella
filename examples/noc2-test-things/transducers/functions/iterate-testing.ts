import { iterate } from "@thi.ng/transducers";

console.log(
	[...iterate((x) => x + 1, 1, 5)]
);
// [1, 2, 3, 4, 5]

// Same as
const arr = [];
for (let i = 1; i < 6; i++) {
	arr.push(i);
}
console.log(arr);
// [1, 2, 3, 4, 5]

console.log(
	[...iterate((x, i) => x * 10 + i, 0, 8)]
);
// [0, 1, 12, 123, 1234, 12345, 123456, 1234567]
