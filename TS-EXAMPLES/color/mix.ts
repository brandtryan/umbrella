// Tangled @ 2025-07-05T17:29:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/src/mix.ts

import { mix, rgb, RED, GREEN } from "@thi.ng/color";
import { circular } from "@thi.ng/math";

console.log(
  mix([], rgb("#f00"), rgb("#0f0"), 0.5)
);
// [ 0.5, 0.5, 0, 1 ]

console.log(
  mix([], rgb(RED), rgb(GREEN), circular(0.5))
);
// [ 0.1339745962155614, 0.8660254037844386, 0, 1 ]