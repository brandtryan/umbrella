// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/stream-shuffle.ts

import { range, streamShuffle } from "@thi.ng/transducers";
import { XsAdd } from "@thi.ng/random";

console.log(
  [...streamShuffle(5, range(10))]
);
// [ 3, 2, 5, 0, 8, 7, 1, 6, 4, 9 ]

console.log(
  [...streamShuffle({ n: 5, rnd: new XsAdd(12345) }, range(10))]
);
[ 0, 4, 3, 7, 8, 1, 5, 2, 6, 9 ]