// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition-sort.ts

import { partitionSort } from "@thi.ng/transducers";

console.log(
  [...partitionSort(4, [5, 9, 2, 6, 4, 1, 3, 8, 7, 0])]
);
// [ 2, 5, 6, 9, 1, 3, 4, 8, 0, 7 ]

// with key fn and custom comparator
const res = [...partitionSort(
  3,
  { key: (x) => x.val, compare: (a, b) => b - a },
  [
    { id: "a", val: 5 },
    { id: "b", val: 7 },
    { id: "c", val: 8 }
  ]
)];

console.log(res);
// [ { id: 'c', val: 8 }, { id: 'b', val: 7 }, { id: 'a', val: 5 } ]