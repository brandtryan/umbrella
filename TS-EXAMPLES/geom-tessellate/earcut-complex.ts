// Tangled @ 2025-07-05T17:30:02-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-tessellate/src/earcut-complex.ts

import {
  earCutComplex, earCutComplexPrepare, tessellate
} from "@thi.ng/geom-tessellate";

const boundary = [[0,0], [100,0], [100,100], [0,100]];
const hole = [[20,20],[50,80],[80,20]];

const [points, holeIDs] = earCutComplexPrepare(boundary, [hole]);

const tess = tessellate(points, earCutComplex(holeIDs));

console.log(tess);
// {
//   points: [
//     [ 0, 0 ], [ 100, 0 ], [ 100, 100 ], [ 0, 100 ],
//     [ 20, 20 ], [ 50, 80 ], [ 80, 20 ]
//   ],
//   indices: [
//     [ 0, 4, 5 ], [ 6, 4, 0 ], [ 3, 0, 5 ], [ 6, 0, 1 ],
//     [ 2, 3, 5 ], [ 5, 6, 1 ], [ 1, 2, 5 ]
//   ],
// }