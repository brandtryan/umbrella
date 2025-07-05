// Tangled @ 2025-07-05T17:29:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp/src/line.ts

import { line } from "@thi.ng/dsp";

console.log(
  line(0, 1, 5).take(7)
);
// [ 0, 0.2, 0.4, 0.6, 0.8, 1, 1.2 ]