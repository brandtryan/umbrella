// Tangled @ 2025-07-05T17:30:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/ramp/src/nested.ts

import { ramp, nested, LINEAR_N, HERMITE_N } from "@thi.ng/ramp";

const example = ramp(
  // nested ramp spec w/ interpolation modes for each key
  nested({a: LINEAR_N, b: HERMITE_N }),
  // keyframes
  [
    [0, { a: 0, b: 1000 }],
    [100, { a: -10, b: 2000 }],
  ]
)

console.log(example.at(25));
// { a: -2.5, b: 1156.25 }