// Tangled @ 2025-07-05T17:29:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bidir-index/src/encode.ts

import { defBidirIndex, encodeObject } from "@thi.ng/bidir-index";

const index = defBidirIndex<string>();

console.log(
  encodeObject(index, { r: 255, g: 128, b: 64, a: 1 }, 0)
);
// [255, 128, 64, 1]

// encode without updating index
console.log(
  encodeObject(index, { b: 3, r: 1, g: 2 }, 0, false)
);
// [1, 2, 3, 0] (key `a` uses default)