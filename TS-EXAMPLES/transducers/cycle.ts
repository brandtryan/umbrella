// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/cycle.ts

import { cycle, range, take } from "@thi.ng/transducers";

// take 5 from infinite sequence
console.log(
  [...take(5, cycle([1, 2, 3]))]
);
// [1, 2, 3, 1, 2]

// only produce 2 cycles
console.log(
  [...cycle(range(3), 2)]
);
// [ 0, 1, 2, 0, 1, 2 ]