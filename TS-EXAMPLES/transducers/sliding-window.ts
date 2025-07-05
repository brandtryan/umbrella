// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/sliding-window.ts

import { range, slidingWindow } from "@thi.ng/transducers";

console.log(
  [...slidingWindow(3, range(5))]
);
// [ [ 0 ], [ 0, 1 ], [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ]

console.log(
  [...slidingWindow(3, false, range(5))]
);
// [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ]