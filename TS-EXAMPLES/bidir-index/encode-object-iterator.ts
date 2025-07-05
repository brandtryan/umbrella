// Tangled @ 2025-07-05T17:29:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bidir-index/src/encode.ts

import { defBidirIndex, encodeObjectIterator } from "@thi.ng/bidir-index";

const index = defBidirIndex<string>();

// source data objects
const data = [
  { r: 1, g: 2, b: 3},
  { x: 4, y: 5, z: 6}
];

// directly encode into a typedarray
const buf = new Uint8Array(encodeObjectIterator(index, data, 0));

console.log(buf);
// Uint8Array(12) [ 1, 2, 3, 0, 0, 0, 0, 0, 0, 4, 5, 6 ]