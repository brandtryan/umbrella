// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/swizzle.ts

import { swizzle } from "@thi.ng/transducers";

console.log(
  [...swizzle([3, 0, 2, 1], [[1, 2, 3, 4], [10, 20, 30, 40]])]
);
// [ [ 4, 1, 3, 2 ], [ 40, 10, 30, 20 ] ]

console.log(
  [...swizzle([0, 0, 1, 1], [[1, 2, 3, 4], [10, 20, 30, 40]])]
);
// [ [ 1, 1, 2, 2 ], [ 10, 10, 20, 20 ] ]

console.log(
  [...swizzle(["z", "x"], [{x: 1, y: 2, z: 3}])]
);
// [ [ 3, 1 ] ]