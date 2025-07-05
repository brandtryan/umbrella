// Tangled @ 2025-07-05T17:30:36-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/pointfree-lang/src/runtime.ts

import { run } from "@thi.ng/pointfree-lang";

// foo uses local var `a` with same name as global
// foo also writes to `b` (a new global)
// b=12 because foo's local `a` takes precedence over global `a`
// during `foo` execution the stack for var `a` is:
// {... __vars: {a: [2, 1]}}

console.log(
  run(`: foo ^{ a } @a 10 + b!; 2 foo`, { a: 1 })
);
// [
//   [],
//   [],
//   {
//     a: 1,
//     b: 12,
//     __words: { foo: [Function] },
//   }
// ]