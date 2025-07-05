// Tangled @ 2025-07-05T17:29:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp/src/fft.ts

import { conjugate, ifft } from "@thi.ng/dsp";

// generate single-period sine (window size = 16)
console.log(
  ifft(conjugate([0, -8, 0, 0, 0, 0, 0, 0]))[0]
);
// [
//   0, 0.383, 0.707, 0.924,
//   1, 0.924, 0.707, 0.383,
//   0, -0.384, -0.707, -0.924,
//   -1, -0.924, -0.707, -0.383
// ]