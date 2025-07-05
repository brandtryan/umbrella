// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/getter.ts

import { defGetter } from "@thi.ng/paths";

interface Foo {
  a: { b: { c: number; } }
}

// fully type checked getter
const g = defGetter<Foo, "a", "b", "c">(["a","b","c"]);

// error (wrong `d` key)
// g = defGetter<Foo, "a", "b", "d">(["a","b","d"]);

console.log(g({ a: { b: { c: 23} } }));
// 23

// error
console.log(g({ x: 23 }));

// error
console.log(g());