// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition-when.ts

import { partitionWhen } from "@thi.ng/transducers";

console.log(
  [...partitionWhen((x) => !!x, [0, 1, 0, 0, 1, 1, 0, 1])]
);
// [ [ 0 ], [ 1, 0, 0 ], [ 1 ], [ 1, 0 ], [ 1 ] ]