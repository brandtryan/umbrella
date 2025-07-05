// Tangled @ 2025-07-05T17:29:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/bidir-index/src/encode.ts

import { defBidirIndex, decodeObject } from "@thi.ng/bidir-index";

const index = defBidirIndex<string>();
index.addAll(["r", "g", "b", "a", "foo"]);

// decode with defaults/fallback
console.log(
  decodeObject(index, [255, 128, 64], { a: 1 })
);
// { r: 255, g: 128, b: 64, a: 1 } (key `foo` is omitted in result)

console.log(
  decodeObject(index, [null, null, null, null, "bar"])
);
// { foo: "bar" }