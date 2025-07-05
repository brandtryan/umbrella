// Tangled @ 2025-07-05T17:30:24-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/math/src/mix.ts

import { mix, lens, tween } from "@thi.ng/math";
import { partial } from "@thi.ng/compose";

// interpolated position in [100..400] interval for given `t`
// const y = mix(100, 400, lens(0.5, 1, t));

// or compose tween function via `tween()` & `partial()`
const f = tween(partial(lens, 0.75, 1), 100, 400);

for(let i=0; i<=10; i++) console.log(f(i / 10));
// 100.0
// 102.0
// 108.1
// 118.7
// 134.6
// 157.2
// 190.0
// 244.2
// 370.0
// 393.7
// 400.0