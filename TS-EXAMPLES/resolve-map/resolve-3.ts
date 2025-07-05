// Tangled @ 2025-07-05T17:30:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/resolve-map/src/index.ts

import { resolve } from "@thi.ng/resolve-map";

// `a` is derived from 1st array element in `b.d`
// `b.c` is looked up from `b.d[0]`
// `b.d[1]` is derived from calling `e(2)`
// `e` is a wrapped function
const res = resolve({
  a: ($) => $("b/c") * 100,
  b: { c: "@d/0", d: [2, ($) => $("../../e")(2) ] },
  e: () => (x) => x * 10,
  f: () => "@foo",
});

console.log(res);
// { a: 200, b: { c: 2, d: [ 2, 20 ] }, e: [Function], f: "@foo" }

console.log(res.e(2));
// 20