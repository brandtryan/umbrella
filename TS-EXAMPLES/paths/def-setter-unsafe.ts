// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/setter.ts

import { defSetterUnsafe } from "@thi.ng/paths";

const s = defSetterUnsafe("a.b.c");
// or
// const s = defSetterUnsafe(["a", "b", "c"]);

console.log(
  s({ a: { b: { c: 23} } }, 24)
);
// { a: { b: { c: 24} } }

console.log(
  s({ x: 23 }, 24)
);
// { x: 23, a: { b: { c: 24 } } }

console.log(
  s(null, 24)
);
// { a: { b: { c: 24 } } }