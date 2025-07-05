// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/stringify.ts

import { stringify } from "@thi.ng/strings";

console.log(
  stringify()("hello")
);
// hello

console.log(
  stringify(true)("hello")
);
// "hello"

console.log(
  stringify()({ a: "hello" })
);
// { "a": "hello" }