// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/fill-range.ts

import { fillRange } from "@thi.ng/arrays";

console.log(
  fillRange(new Array(5))
);
// [ 0, 1, 2, 3, 4 ]

console.log(
  fillRange(fillRange([], 0, 10, 20, 2), 5, 20, 8, -2)
);
// [ 10, 12, 14, 16, 18, 20, 18, 16, 14, 12, 10 ]