// Tangled @ 2025-07-05T17:29:37-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/date/src/format.ts

import { formatRelativeParts, setLocale, EN_LONG } from "@thi.ng/date";

setLocale(EN_LONG);

// with default precision (seconds)
console.log(
  formatRelativeParts("2022-09-01 12:23:24", "2021-07-01 12:05")
);
// "in 1 year, 2 months, 21 hours, 18 minutes, 24 seconds"

// with day precision
console.log(
  formatRelativeParts("2012-12-25 17:59", "2021-07-01 12:05", "d")
);
// "8 years, 6 months, 5 days ago"

console.log(
  formatRelativeParts("2021-07-01 17:59", "2021-07-01 12:05", "d")
);
// "in less than a day"