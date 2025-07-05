// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/match-first.ts

import {
  comp, map, matchFirst, push, transduce
} from "@thi.ng/transducers";

console.log(
  matchFirst((x) => x >= 5, [3, 1, 4, 2, 6, 5])
);
// 6

const res = transduce(
  comp(
    matchFirst((x) => x >= 5),
    map((x) => x * 10)
  ),
  push(),
  [3, 1, 4, 2, 6, 5]
);

console.log(res);
// [60]