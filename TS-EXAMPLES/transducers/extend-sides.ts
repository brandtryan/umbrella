// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/extend-sides.ts

import { extendSides } from "@thi.ng/transducers";

console.log(
  [...extendSides([1, 2, 3])]
);
// [ 1,  1, 2, 3,  3]

console.log(
  [...extendSides([1, 2, 3], 3)]
);
// [ 1, 1, 1,  1, 2, 3,  3, 3, 3 ]

console.log(
  [...extendSides([1, 2, 3], 0, 3)]
);
// [ 1, 2, 3,  3, 3, 3 ]