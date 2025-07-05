// Tangled @ 2025-07-05T17:29:37-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/date/src/timecode.ts

import { defTimecode, DAY, HOUR, MINUTE, SECOND } from "@thi.ng/date";

const fmt = defTimecode(30);

console.log(
  fmt(HOUR + 2*MINUTE + 3*SECOND + 4*1000/30)
);
// "01:02:03:04"

console.log(fmt(DAY));
// "01:00:00:00:00"

const fmt2 = defTimecode(30, ["d ", "h ", "' ", '" ']);

console.log(
  fmt2(DAY + HOUR + 2 * MINUTE + 3 * SECOND + 999)
);
// "01d 01h 02' 03" 29"