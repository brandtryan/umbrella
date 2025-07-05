// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/interpolate.ts

import { interpolate } from "@thi.ng/transducers";

const res = [...interpolate(
  // interpolation function
  ([a, b], t) => a + (b - a) * t,
  // window size
  2,
  // num samples per window
  8,
  // input values
  [0, 1, 0, 2]
)];

console.log(res);
// [ 0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875,
//  1, 0.875, 0.75, 0.625, 0.5, 0.375, 0.25, 0.125,
//  0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75 ]