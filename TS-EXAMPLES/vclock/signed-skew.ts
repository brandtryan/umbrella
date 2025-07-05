// Tangled @ 2025-07-05T17:31:13-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vclock/src/index.ts

import { signedSkew } from "@thi.ng/vclock";

console.log(
  signedSkew({a: 1, b: 4, c: 2}, {a: 2, c: 20})
);
// -18