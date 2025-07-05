// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/cursor.ts

import { computeCursorPos } from "@thi.ng/strings";

console.log(
  computeCursorPos("thi.ng\numbrella", 10)
);
// [ 2, 4 ]

// w/ custom offset
console.log(
  computeCursorPos("thi.ng\numbrella", 10, "\n", [11, 1])
);
// [ 12, 4 ]