// Tangled @ 2025-07-05T17:29:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compose/src/thread-first.ts

import { threadFirst } from "@thi.ng/compose";

const neg = (x) => -x;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

// without operator: (-5 - 10) / 20
console.log(div(sub(neg(5), 10), 20));
// -0.75

// rewritten using operator:
threadFirst(
  5,
  neg,       // -5
  [sub, 10], // (-5) - 10
  [div, 20], // (-5 - 10) / 20
  console.log
);
// -0.75