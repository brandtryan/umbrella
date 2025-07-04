import { add } from "@thi.ng/transducers";

const arr = [1, 2, 3, 4, 5];

console.log(
	add(arr)
);
// 15

console.log(
	add(2, arr)
);
// 17
