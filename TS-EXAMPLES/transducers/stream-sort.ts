// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/stream-sort.ts

import { streamSort } from "@thi.ng/transducers";

console.log(
  [...streamSort(4, [5,9,2,6,4,1,3,8,7,0])]
);
// [ 2, 4, 1, 3, 5, 6, 0, 7, 8, 9 ]