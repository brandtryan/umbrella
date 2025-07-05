// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/binary-search.ts

import { binarySearch, bsGT } from "@thi.ng/arrays";

const src = [10, 20, 30, 40];

console.log(
  bsGT(binarySearch(src, 25), src.length)
)
// 2

console.log(
  bsGT(binarySearch(src, 40), src.length)
)
// -1