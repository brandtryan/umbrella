// Tangled @ 2025-07-05T17:29:18-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/args/src/args.ts

import { coerceInt, parse, tuple } from "@thi.ng/args";

console.log(
  parse({ a: tuple(coerceInt, 2, {})}, ["--a", "1,2"])
);
// {
//   result: { a: Tuple { value: [1, 2] } },
//   index: 2,
//   rest: [],
//   done: true
// }