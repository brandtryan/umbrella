// Tangled @ 2025-07-05T17:29:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/binary/src/swizzle.ts

import { swizzle8 } from "@thi.ng/binary";

console.log(
  swizzle8(0x12345678, 3, 2, 1, 0).toString(16)
);
// 0x78563412

console.log(
  swizzle8(0x12345678, 1, 0, 3, 2).toString(16)
);
// 0x34127856

console.log(
  swizzle8(0x12345678, 2, 2, 0, 0).toString(16)
);
// 0x56561212