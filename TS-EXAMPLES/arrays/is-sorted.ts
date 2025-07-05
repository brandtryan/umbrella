// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/is-sorted.ts

import { isSorted } from "@thi.ng/arrays";

console.log(
  isSorted([3, 2, 1])
);
// false

// w/ custom comparator
console.log(
  isSorted([3, 2, 1], (a, b) => b - a)
);
// true