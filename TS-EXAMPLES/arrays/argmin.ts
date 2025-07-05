// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/argmin.ts

import { argMin } from "@thi.ng/arrays";

console.log(
  argMin([42, 11, 66, 23])
);
// 1

// same as argmax() with defaults
console.log(
  argMin([42, 11, 66, 23], -Infinity, (a, b) => a > b)
);
// 2