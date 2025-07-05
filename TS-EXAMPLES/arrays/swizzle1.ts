// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/swizzle.ts

import { swizzle } from "@thi.ng/arrays";

console.log(
  swizzle([0, 0, 0])([1, 2, 3, 4])
);
// [ 1, 1, 1 ]

console.log(
  swizzle([1, 1, 3, 3])([1, 2, 3, 4])
);
// [ 2, 2, 4, 4 ]

console.log(
  swizzle([2, 0])([1, 2, 3])
);
// [ 3, 1 ]