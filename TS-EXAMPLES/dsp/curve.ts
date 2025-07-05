// Tangled @ 2025-07-05T17:29:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp/src/curve.ts

import { curve } from "@thi.ng/dsp";

console.log(
  curve(-1, 1, 5, 0.1).take(7)
);
// [
//   -1,
//   -0.04228753006664476,
//   0.4786567612639258,
//   0.7620225554764573,
//   0.9161583712747458,
//   1.0000000000000002,  // target
//   1.0456053557111122
// ]