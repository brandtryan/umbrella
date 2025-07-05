// Tangled @ 2025-07-05T17:31:07-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-binary/src/bits.ts

import { bits } from "@thi.ng/transducers-binary";
import { comp, iterator, partition } from "@thi.ng/transducers";

console.log(
  [...bits(8, [0xf0, 0xaa])]
);
// [ 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0 ]

console.log(
  [...iterator(comp(bits(8), partition(4)), [0xf0, 0xaa])]
);
// [ [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 1, 0, 1, 0 ], [ 1, 0, 1, 0 ] ]