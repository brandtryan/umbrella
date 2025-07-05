// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/named-number.ts

import { namedNumber } from "@thi.ng/strings";

console.log(namedNumber()(9));
// "nine"

console.log(namedNumber()(10));
// "10"

console.log(namedNumber(["null", "eins", "zwei"])(2));
// "zwei"