// Tangled @ 2025-07-05T17:29:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp/src/fft.ts

import { conjugate } from "@thi.ng/dsp";

console.log(
  conjugate([0, 3, 2, 1], true)
);
// Float64Array [ 0, 3, 2, 1, 0, -1, -2, -3 ]

console.log(
  conjugate([0, 3, 2, 1], false)
);
// Float64Array [ 0, 3, 2, 1, 0, 1, 2, 3 ]

console.log(
  conjugate([[0, 1, 0, 1], [0, -0.5, 0, -0.25]])
);
// [
//   Float64Array [ 0, 1, 0, 1, 0, 1, 0, 1 ],
//   Float64Array [ 0, -0.5, 0, -0.25, 0, 0.25, 0, 0.5 ]
// ]