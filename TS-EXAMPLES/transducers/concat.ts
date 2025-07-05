// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/concat.ts

import { concat } from "@thi.ng/transducers";

console.log(
  [...concat([1, 2, 3], null, [4, 5])]
);
// [ 1, 2, 3, 4, 5 ]

console.log(
  [...concat([1, 2, 3, undefined], null, [4, 5])]
);
// [ 1, 2, 3, undefined, 4, 5 ]