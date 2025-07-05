// Tangled @ 2025-07-05T17:29:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/src/color-range.ts

import { colorsFromTheme } from "@thi.ng/color";

console.log(
  [...colorsFromTheme(
    [["cool", "aliceblue"], ["bright", "orange", 0.25], ["hotpink", 0.1]],
    { num: 10 }
  )]
);