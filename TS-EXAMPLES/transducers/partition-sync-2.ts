// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition-sync.ts

import { partitionSync } from "@thi.ng/transducers";

const src = [
  ["a", 1], ["a", 2], ["d", 100], ["b", 10],
  ["b", 11], ["c", 0], ["a", 3]
];

// passing `false` to disable tuple reset
const res = [...partitionSync(
  ["a", "b"],
  {
    key: (x) => x[0],
    reset: false
  },
  src
)];

console.log(res);
// [ { a: ["a", 2], b: ["b", 10] },
//   { a: ["a", 2], b: ["b", 11] },
//   { a: ["a", 3], b: ["b", 11] } ]