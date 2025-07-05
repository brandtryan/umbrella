// Tangled @ 2025-07-05T17:29:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bidir-index/src/encode.ts

import { defBidirIndex, decodeObjectIterator } from "@thi.ng/bidir-index";

const index = defBidirIndex<string>();
index.addAll("rgbxyz");

const data = [1, 2, 3, 0, 0, 0, 0, 0, 0, 4, 5, 6];

for(let obj of decodeObjectIterator(index, data, 6)) {
  console.log(obj);
}

// { r: 1, g: 2, b: 3, x: 0, y: 0, z: 0 }
// { r: 0, g: 0, b: 0, x: 4, y: 5, z: 6 }