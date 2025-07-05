// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/flatten1.ts

import { flatten1, mapcat } from "@thi.ng/transducers";

console.log(
  [...flatten1([[1], [2, 2], [3, 3, 3]])]
);
// [ 1, 2, 2, 3, 3, 3 ]

// same as:
console.log(
  [...mapcat((x) => x, [[1], [2, 2], [3, 3, 3]])]
);
// [ 1, 2, 2, 3, 3, 3 ]

// nullish inputs will be removed
console.log(
  [...flatten1([[1], null, [3, 3, 3]])]
);
// [1, 3, 3, 3]