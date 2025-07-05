// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/group-binary.ts

import { groupBinary, reduce } from "@thi.ng/transducers";

const tree = reduce(
  groupBinary<number>(4, (x) => x, undefined, undefined, 0, 1),
  [1, 2, 3, 4, 5, 6, 7]
);

console.log(tree[0][1][0][1]); // 0101 == 5 in binary
// [ 5 ]

console.log(tree[0][1][1]);    // 011* == branch
// [ [ 6 ], [ 7 ] ]