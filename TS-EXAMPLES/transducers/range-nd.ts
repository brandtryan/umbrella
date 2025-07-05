// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/range-nd.ts

import { rangeNd } from "@thi.ng/transducers";

console.log(
  [...rangeNd([2])]
);
// [ [ 0 ], [ 1 ] ]

console.log(
  [...rangeNd([2, -2])]
);
// [ [ 0, 0 ], [ 0, -1 ], [ 1, 0 ], [ 1, -1 ] ]

console.log(
  [...rangeNd([-1,2], [1,3])]
);
// [ [ -1, 2 ], [ -1, 3 ], [ 0, 2 ], [ 0, 3 ] ]

console.log(
  [...rangeNd([2, 2, 2])]
);
// [
//   [ 0, 0, 0 ],
//   [ 0, 0, 1 ],
//   [ 0, 1, 0 ],
//   [ 0, 1, 1 ],
//   [ 1, 0, 0 ],
//   [ 1, 0, 1 ],
//   [ 1, 1, 0 ],
//   [ 1, 1, 1 ]
// ]