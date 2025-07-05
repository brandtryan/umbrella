// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition-by.ts

import { partitionBy } from "@thi.ng/transducers";

console.log(
  [...partitionBy((x) => x & 1, [1, 2, 4, 6, 3, 5, 8, 4])]
);
// [ [ 1 ], [ 2, 4, 6 ], [ 3, 5 ], [ 8, 4 ] ]