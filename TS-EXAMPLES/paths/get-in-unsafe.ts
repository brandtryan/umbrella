// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/get-in.ts

import { getInUnsafe } from "@thi.ng/paths";

console.log(
  getInUnsafe({ a: { b: { c: 23 } } }, "a.b.c")
);
// 23