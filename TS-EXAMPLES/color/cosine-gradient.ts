// Tangled @ 2025-07-05T17:29:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/src/cosine-gradients.ts

import { multiCosineGradient, srgb } from "@thi.ng/color";

multiCosineGradient({
  num: 10,
  // gradient stops (normalized positions)
  stops: [[0.1, [1, 0, 0, 1]], [0.5, [0, 1, 0, 1]], [0.9, [0, 0, 1, 1]]],
  // optional color transform/coercion
  tx: srgb
})