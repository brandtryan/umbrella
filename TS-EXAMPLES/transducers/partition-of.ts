// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition-of.ts

import { partitionOf, range } from "@thi.ng/transducers";

console.log(
  [...partitionOf([3, 2, 4], range(20))]
);
// [ [ 0, 1, 2 ],
//   [ 3, 4 ],
//   [ 5, 6, 7, 8 ],
//   [ 9, 10, 11 ],
//   [ 12, 13 ],
//   [ 14, 15, 16, 17 ],
//   [ 18, 19 ] ]