// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/string.ts

import { defFormat } from "@thi.ng/vectors";

console.log(
  defFormat()([1, -2, 3])
);
// [1.000, -2.000, 3.000]

console.log(
  defFormat({ width: 10, wrap: "||", delim: "|\n|" })([1, -2, 3])
);
// |     1.000|
// |    -2.000|
// |     3.000|

console.log(
  defFormat({ prec: 5, delim: " " })([1, -2, 3])
);
// [1.00000 -2.00000 3.00000]