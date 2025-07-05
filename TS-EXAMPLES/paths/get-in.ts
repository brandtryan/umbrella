// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/get-in.ts

import { getIn } from "@thi.ng/paths";

// type checked path and inferred return type
console.log(
  getIn({ a: { b: { c: 23 } } }, ["a","b","c"])
);
// 23