// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/step.ts

import { filter, map, mapcat, step, take } from "@thi.ng/transducers";

// single result (unwrapped, default)
console.log(
  step(map((x: number) => x * 10))(1)
);
// 10

// single result (no unwrapping)
console.log(
  step(map((x: number) => x * 10), false)(1)
);
// [10]

// multiple results
console.log(
  step(mapcat((x: number) => [x, x + 1, x + 2]))(1)
);
// [ 1, 2, 3 ]

// multiple results (default behavior)
console.log(
  step(mapcat((x: number[]) => take(2, x)))([1, 2, 3, 4])
);
// [1, 2]

console.log(
  step(mapcat((x: number[]) => x))([3])
);
// 3

// ...once more without unwrapping
console.log(
  step(mapcat((x: number[]) => x), false)([3])
);
// [3]

// filter even values
const f = step(filter((x: number) => !(x & 1)))

console.log(f(1)); // undefined
console.log(f(2)); // 2

// reduced value termination
const g = step(take(2));
console.log(g(1)); // 1
console.log(g(1)); // 1
console.log(g(1)); // undefined
console.log(g(1)); // undefined