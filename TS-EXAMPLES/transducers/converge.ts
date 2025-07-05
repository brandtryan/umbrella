// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/converge.ts

import { converge, iterate } from "@thi.ng/transducers";

// process as long as difference to prev value is >= 0.01
const res = [...converge(
      // predicate
      (a, b) => Math.abs(a - b) < 0.01,
      // input sequence
      iterate((x, i) => x + Math.pow(2, -i), 0)
)];

console.log(res);
// [ 0, 0.5, 0.75, 0.875, 0.9375, 0.96875, 0.984375, 0.9921875 ]