// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/permutations.ts

import { permutationsN } from "@thi.ng/transducers";

console.log(
  [...permutationsN(2)]
);
// [ [0, 0], [0, 1], [1, 0], [1, 1] ]

console.log(
  [...permutationsN(2, 3)]
);
// [ [0, 0], [0, 1], [0, 2],
//   [1, 0], [1, 1], [1, 2],
//   [2, 0], [2, 1], [2, 2] ]

console.log(
  [...permutationsN(2, 2, [10, 20])]
);
// [ [ 10, 20 ], [ 10, 21 ], [ 11, 20 ], [ 11, 21 ] ]