// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/sample.ts

import { range, sample } from "@thi.ng/transducers";

// 10% probability
console.log(
  [...sample(0.1, range(100))]
);
// [ 3, 24, 25, 36, 43, 49, 59, 64, 82, 86, 89 ]