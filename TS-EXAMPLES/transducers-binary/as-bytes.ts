// Tangled @ 2025-07-05T17:31:07-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-binary/src/bytes.ts

import {
  asBytes, f32, i16, str, u32,
  hexDumpString
} from "@thi.ng/transducers-binary";

const bytes = asBytes([
  str("hello!"),
  u32(0xdecafbad),
  i16(-1),
  f32(Math.PI)
]);

console.log(hexDumpString({}, bytes));
// 00000000 | 68 65 6c 6c 6f 21 de ca fb ad ff ff 40 49 0f db | hello!......@I..