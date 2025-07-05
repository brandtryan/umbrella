// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/line.ts

import { line } from "@thi.ng/transducers";

console.log(
  [...line(50, 100, 10)]
);
// [
//    50, 55, 60, 65, 70,
//    75, 80, 85, 90, 95,
//   100
// ]