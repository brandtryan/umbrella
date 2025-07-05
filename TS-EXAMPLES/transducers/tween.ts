// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/tween.ts

import { tween } from "@thi.ng/transducers";

console.log(
  [...tween({
    num: 10,
    min: 0,
    max: 100,
    init: (a, b) => [a, b],
    mix: ([a, b], t) => Math.floor(a + (b - a) * t),
    stops: [[20, 100], [50, 200], [80, 0]]
  })]
);
// [ 100, 100, 100, 133, 166, 200, 133, 66, 0, 0, 0 ]