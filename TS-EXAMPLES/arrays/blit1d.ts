// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/blit.ts

import { blit1d } from "@thi.ng/arrays";

console.log(
  blit1d(
     // dest array
     [1, 1, 1, 1, 1, 1, 1, 1, 1],
     // paste from index 2
     2,
     // source array
     [2, 3, 2, 3, 2],
     // mask value
     3
  )
);
//[1, 1, 2, 1, 2, 1, 2, 1, 1]