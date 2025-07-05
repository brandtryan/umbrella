// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/setter.ts

import { defSetterUnsafe } from "@thi.ng/paths";

const s = defSetterUnsafe("a.b.c");

const a = { x: { y: { z: 1 } } };
const b = s(a, 2);

console.log(b);
// { x: { y: { z: 1 } }, a: { b: { c: 2 } } }

console.log(a.x === b.x); // true
console.log(a.x.y === b.x.y); // true