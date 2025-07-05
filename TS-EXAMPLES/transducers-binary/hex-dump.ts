// Tangled @ 2025-07-05T17:31:07-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-binary/src/hex-dump.ts

import { hexDump } from "@thi.ng/transducers-binary";

const src = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 33, 48, 49, 50, 51, 126, 122, 121, 120
];

console.log(
  [...hexDump({ cols: 8, address: 0x400 }, src)].join("\n")
);
// 00000400 | 41 42 43 44 45 46 47 48 | ABCDEFGH
// 00000408 | 49 4a 21 30 31 32 33 7e | IJ!0123~
// 00000410 | 7a 79 78 00 00 00 00 00 | zyx.....