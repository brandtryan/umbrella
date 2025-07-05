// Tangled @ 2025-07-05T17:30:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/math/src/mix.ts

import { easeInOut2, tween } from "@thi.ng/math";

// create tweening function
const anim = tween(easeInOut2, 100, 200);

for(let i=0; i<=10; i++) console.log(anim(i / 10));
// 100
// 102
// 108
// 118
// 132
// 150
// 168
// 182
// 192
// 198
// 200