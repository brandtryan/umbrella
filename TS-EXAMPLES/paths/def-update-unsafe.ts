// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/updater.ts

import { defUpdaterUnsafe } from "@thi.ng/paths";

const incB = defUpdaterUnsafe("a.b", (x, n) => x + n);
// or
// const incB = defUpdaterUnsafe(["a", "b"], (x, n) => x + n);

console.log(
  incB({ a: { b: 10 } }, 13)
);
// { a: { b: 23 } }