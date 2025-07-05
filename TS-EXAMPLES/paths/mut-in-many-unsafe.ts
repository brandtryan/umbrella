// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/mut-in-many.ts

import { mutInManyUnsafe } from "@thi.ng/paths";

const res = mutInManyUnsafe(
  { a: { b: 1 }, x: { y: { z: 2 } } },
  // pair #1
  "a.b", 10,
  // pair #2
  "x.y.z", 20
);

console.log(res);
// { a: { b: 10 }, x: { y: { z: 20 } } }