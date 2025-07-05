// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/swap.ts

import { multiSwap } from "@thi.ng/arrays";

const a = [2, 1];
const b = [20, 10];
const c = [40, 30];

const ms = multiSwap(b, c);
ms(a, 0, 1);

console.log(a);
// [1, 2]

console.log(b);
// [10, 20]

console.log(c);
// [30, 40]