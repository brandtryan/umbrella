// Tangled @ 2025-07-05T17:30:26-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/memoize/src/memoizeo.ts

import { memoizeO } from "@thi.ng/memoize";

const test = memoizeO((x: number) => (console.log("exec", x), x * 10));

console.log(test(1));
// exec 1
// 10

console.log(test(1))
// 10

console.log(test(2));
// exec 2
// 20