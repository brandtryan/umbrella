// Tangled @ 2025-07-05T17:29:20-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/associative/src/indexed.ts

import { indexed } from "@thi.ng/associative";

console.log(
  indexed(
    new Set([{a: 1, b: 1}, {a: 1, b: 2}, {a: 1, b: 1, c: 2}]),
    ["a","b"]
  )
);
// EquivMap {
//   { a: 1, b: 1 } => Set { { a: 1, b: 1 }, { a: 1, b: 1, c: 2 } },
//   { a: 1, b: 2 } => Set { { a: 1, b: 2 } } }