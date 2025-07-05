// Tangled @ 2025-07-05T17:29:37-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/date/src/format.ts

import { formatDuration } from "@thi.ng/date";

console.log(
  formatDuration(45296000)
);
// "12 h, 34 min, 56 s"

console.log(
  formatDuration(45296000, "h")
);
// "13 h"

console.log(
  formatDuration(45296000,"d")
);
// "< 1 d"