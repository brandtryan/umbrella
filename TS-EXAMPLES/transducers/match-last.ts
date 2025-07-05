// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/match-last.ts

import { comp, map, matchLast, push, transduce } from "@thi.ng/transducers";

console.log(
  matchLast((x) => x >= 5, [3, 1, 6, 5, 4, 2])
);
// 5

const res = transduce(
  comp(
    matchLast((x) => x >= 5),
    map((x) => x * 10)
  ),
  push(),
  [3, 1, 6, 5, 4, 2]
);

console.log(res);
// [ 50 ]