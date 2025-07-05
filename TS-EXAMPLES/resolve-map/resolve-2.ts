// Tangled @ 2025-07-05T17:30:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/resolve-map/src/index.ts

import { resolve } from "@thi.ng/resolve-map";

// `c` uses ES6 destructuring form to look up `a` & `b` values
// `d` uses provided resolve fn arg `$` to look up `c`
console.log(
  resolve({ a: 1, b: 2, c: ({ a, b }) => a + b, d: ($) => $("c") })
);
// { a: 1, b: 2, c: 3, d: 3 }

// last item references item @ index = 2
console.log(
  resolve([1, 2, ($) => $("0") + $("1"), "@2"])
);
// [1, 2, 3, 3]