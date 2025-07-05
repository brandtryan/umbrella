// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/update-in.ts

import { updateIn, updateInUnsafe } from "@thi.ng/paths";

const add = (x: number, y: number) => x + y;

console.log(
  updateInUnsafe({ a: { b: { c: 23 } } }, "a.b.c", add, 10)
);
// { a: { b: { c: 33 } } }

// type checked
console.log(
  updateIn({ a: { b: { c: 23 } } }, ["a", "b", "c"], add, 10)
);
// { a: { b: { c: 33 } } }

// type error (value at "a.b" is not a number)
// updateIn({ a: { b: { c: 23 } } }, ["a", "b"], add, 10)