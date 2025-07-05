// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/choices.ts

import { choices, frequencies, take, transduce } from "@thi.ng/transducers";

const res = transduce(
  take(1000),
  frequencies(),
  choices("abcd", [1, 0.5, 0.25, 0.125])
);

console.log(res);
// Map(4) {
//   "a": 544,
//   "b": 263,
//   "c": 131,
//   "d": 62,
// }