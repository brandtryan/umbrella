// Tangled @ 2025-07-05T17:29:39-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/defmulti/src/defmulti-n.ts

import { defmultiN } from "@thi.ng/defmulti";

const foo = defmultiN<string>({
  0: () => "zero",
  1: (x) => `one: ${x}`,
  3: (x, y, z) => `three: ${x}, ${y}, ${z}`
});

console.log(foo());
// zero

console.log(foo(23));
// one: 23

console.log(foo(1, 2, 3));
// three: 1, 2, 3

console.log(foo(1, 2));
// Error: illegal arity: 2

foo.add(2, (x, y) => `two: ${x}, ${y}`);

console.log(foo(1, 2));
// two: 1, 2