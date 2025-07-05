// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/ansi.ts

import { stripAnsi } from "@thi.ng/strings";

console.log(
  stripAnsi("\x1B[32mhello\x1B[0m \x1B[91mworld\x1B[0m!")
);
// 'hello world!'