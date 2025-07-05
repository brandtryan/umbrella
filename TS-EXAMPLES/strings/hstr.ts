// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/hollerith.ts

import { hstr } from "@thi.ng/strings";

console.log(hstr("abc"));  // "3Habc"
console.log(hstr(123.45)); // "6H123.45"
console.log(hstr(""));     // "0H"
console.log(hstr(null));   // ""