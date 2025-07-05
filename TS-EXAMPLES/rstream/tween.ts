// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/tween.ts

import { stream, tween, trace } from "@thi.ng/rstream";

const val = stream<number>();

tween(
  // consume from `val` stream
  val,
  // initial start value to interpolate from
  0,
  // interpolation fn (LERP)
  (a, b) => a + (b - a) * 0.5,
  // stop emitting values if difference to previous result < 0.01
  (a, b) => Math.abs(a - b) < 0.01
).subscribe(trace("tweened"))

val.next(10)
// 5
// 7.5
// ...
// 9.98046875

val.next(100)
// 55
// 77.5
// ...
// 99.989013671875

// terminate after 1sec
setTimeout(() => val.done(), 1000);