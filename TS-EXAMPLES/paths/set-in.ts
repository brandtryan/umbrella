// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/set-in.ts

import { setIn } from "@thi.ng/paths";

// type checked path & value
console.log(
  setIn({ a: { b: { c: 23 } } }, ["a", "b", "c"], 24)
);
// { a: { b: { c: 24 } } }

// error (wrong value type)
console.log(
  setIn({ a: { b: { c: 23 } } }, ["a", "b", "c"], "24")
);