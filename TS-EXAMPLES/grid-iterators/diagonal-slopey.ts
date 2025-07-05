// Tangled @ 2025-07-05T17:30:05-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/grid-iterators/src/diagonal-slope.ts

import { diagonalSlopeY } from "@thi.ng/grid-iterators";

// iterate grid in diagonals of 1:3 ratio (x:y)
console.log(
  [...diagonalSlopeY({ cols: 5, rows: 5, slope: 3 })]
);
// [
//   [0, 0], [0, 1 ], [0, 2 ],
//   [1, 0], [1, 1 ], [1, 2 ],
//   [0, 3], [0, 4 ], [2, 0 ],
//   [2, 1], [2, 2 ], [1, 3 ],
//   [1, 4], [3, 0 ], [3, 1 ],
//   [3, 2], [2, 3 ], [2, 4 ],
//   [4, 0], [4, 1 ], [4, 2 ],
//   [3, 3], [3, 4 ], [4, 3 ],
//   [4, 4]
// ]