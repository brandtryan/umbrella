// Tangled @ 2025-07-05T17:29:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compose/src/thread-last.ts

import { threadLast } from "@thi.ng/compose";

const neg = (x) => -x;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

// without operator: 20 / (10 - (-5))
console.log(div(20, sub(10, neg(5))));
// 1.3333333333333333

// rewritten using operator:
threadLast(
  5,
  neg,       // -5
  [sub, 10], // 10 - (-5)
  [div, 20],  // 20 / (10 - (-5))
  console.log
);
// 1.3333333333333333