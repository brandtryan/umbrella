// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition.ts

import { partition, range } from "@thi.ng/transducers";

console.log(
  [...partition(3, range(10))]
);
// [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]

console.log(
  [...partition(3, true, range(10))]
);
// [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 9 ] ]

console.log(
  [...partition(3, 1, range(10))]
);
// [ [ 0, 1, 2 ],
//   [ 1, 2, 3 ],
//   [ 2, 3, 4 ],
//   [ 3, 4, 5 ],
//   [ 4, 5, 6 ],
//   [ 5, 6, 7 ],
//   [ 6, 7, 8 ],
//   [ 7, 8, 9 ] ]