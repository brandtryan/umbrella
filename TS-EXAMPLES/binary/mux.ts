// Tangled @ 2025-07-05T17:29:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/binary/src/swizzle.ts

import { mux } from "@thi.ng/binary";

console.log(
  mux(0x12345678, 0xaaaa5555, 0xffff0000)
);
// 0xaaaa5678

console.log(
  mux(0x12345678, 0xaaaa5555, 0x0000ffff)
);
// 0x12345555