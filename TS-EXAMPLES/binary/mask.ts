// Tangled @ 2025-07-05T17:29:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/binary/src/mask.ts

import { defMask } from "@thi.ng/binary";

console.log(defMask(1,31).toString(16));
// 7ffffffe

console.log(defMask(3,8).toString(16));
// f8