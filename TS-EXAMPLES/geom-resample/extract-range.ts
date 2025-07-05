// Tangled @ 2025-07-05T17:30:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-resample/src/sampler.ts

import { Sampler } from "@thi.ng/geom-resample";

// vertices of a square
const square = [[0, 0], [100, 0], [100, 100], [0, 100]];

console.log(
  new Sampler(square, true).extractRange(0.2, 0.7)
);
// [[80, 0], [100, 0], [100, 100], [20, 100]]