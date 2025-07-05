// Tangled @ 2025-07-05T17:29:20-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/atom/src/view.ts

import { defAtom, defView } from "@thi.ng/atom";

const a = defAtom({ a: { b: 1 } });
const v = defView(a, ["a", "b"], (x) => x * 10);

console.log(v.deref());
// 10

// update atom state
console.log(
  a.resetIn(["a", "b"], 2)
);
// { a: { b: 2 } }

console.log(v.changed());
// true

console.log(v.deref());
// 20

// remove view from parent state
v.release()