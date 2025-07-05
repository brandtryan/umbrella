// Tangled @ 2025-07-05T17:31:07-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-binary/src/utf8.ts

import { hexDump, utf8Encode } from "@thi.ng/transducers-binary";
import { comp, str, transduce } from "@thi.ng/transducers";

const res = transduce(
  comp(utf8Encode(), hexDump({ cols: 8 })),
  str("\n"),
  "¡Hola niña! 😀"
);

console.log(res);
// 00000000 | c2 a1 48 6f 6c 61 20 6e | ..Hola n
// 00000008 | 69 c3 b1 61 21 20 f0 9f | i..a! ..
// 00000010 | 98 80 00 00 00 00 00 00 | ........