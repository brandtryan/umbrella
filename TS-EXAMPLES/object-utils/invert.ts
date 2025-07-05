// Tangled @ 2025-07-05T17:30:28-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/object-utils/src/invert.ts

import { invertMap } from "@thi.ng/object-utils";

console.log(
  invertMap(new Map([["a", 1], ["b", 2]]))
);
// Map { 1 => 'a', 2 => 'b' }

import { invertObj } from "@thi.ng/object-utils";

console.log(
  invertObj({ a: 1, b: 2 })
);
// { '1': 'a', '2': 'b' }