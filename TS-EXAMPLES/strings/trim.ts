// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/trim.ts

import { trim } from "@thi.ng/strings";

console.log(
  trim()("  Hello   ")
);
// "Hello"

console.log(
  trim(" -+")("-+-+- Hello -+-+-")
);
// "Hello"