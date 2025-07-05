// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition-sync.ts

import { partitionSync } from "@thi.ng/transducers";

const src = [
  ["a", 1], ["a", 2], ["d", 100], ["b", 10],
  ["b", 11], ["c", 0], ["a", 3]
];

// form tuples for values only from sources "a" & "b"
// here the label is the first element of each input item
console.log(
  [...partitionSync(["a", "b"], { key: (x) => x[0] }, src)]
);
// [ { a: ["a", 2], b: ["b", 10] },
//   { b: ["b", 11], a: ["a", 3] } ]