// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/interpolate.ts

import { interpolate } from "@thi.ng/strings";

console.log(
  interpolate("let {0}: {2} = {1};", "a", 42, "number")
);
// "let a: number = 42;"