// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/lookup.ts

import { lookup2d, map, range, range2d } from "@thi.ng/transducers";

console.log(
  [...map(lookup2d([...range(9)], 3), range2d(2, -1, 0, 3))]
);
// [ 2, 1, 0, 5, 4, 3, 8, 7, 6 ]