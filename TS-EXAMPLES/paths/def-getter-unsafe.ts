// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/getter.ts

import { defGetterUnsafe } from "@thi.ng/paths";

const g = defGetterUnsafe("a.b.c");

console.log(g({ a: { b: { c: 23} } }));
// 23

console.log(g({ x: 23 }));
// undefined