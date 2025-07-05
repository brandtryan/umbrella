// Tangled @ 2025-07-05T17:29:41-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/distance/src/manhattan.ts

import { MANHATTAN2 } from "@thi.ng/distance";

console.log(MANHATTAN2.metric([0,0], [10,20]));
// 30

console.log(MANHATTAN2.from(30));
// 21.213203435596427

console.log(Math.hypot(15, 15)); // <-- diagonal of manhattan square
// 21.213203435596427

console.log(Math.hypot(10, 20)); // <-- actual eucledian dist
// 22.360679774997898

console.log(MANHATTAN2.to(21.213203435596427));
// 30

// however, starting w/ eucledian dist first
const e = Math.hypot(10, 20)
// 22.360679774997898

const m = MANHATTAN2.to(e)
// 31.622776601683793

console.log(MANHATTAN2.from(m) === e);
// true