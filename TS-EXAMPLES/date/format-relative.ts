// Tangled @ 2025-07-05T17:29:37-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/date/src/format.ts

import { formatRelative } from "@thi.ng/date";

console.log(
  formatRelative("2020-06-01", "2021-07-01")
);
// "1 year ago"

console.log(
  formatRelative("2020-08-01", "2021-07-01")
);
// "11 months ago"

console.log(
  formatRelative("2021-07-01 13:45", "2021-07-01 12:05")
);
// "in 2 hours"

console.log(
  formatRelative("2021-07-01 12:23:24", "2021-07-01 12:05")
);
// "in 18 minutes"