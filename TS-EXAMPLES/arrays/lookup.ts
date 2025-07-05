// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/lookup.ts

import { lookup } from "@thi.ng/arrays";

console.log(lookup([10,20,30], [2,2,0,1,1]));
// [30, 30, 10, 20, 20]

console.log(lookup([10,20,30], [3]));
// error: index out of bounds: 3