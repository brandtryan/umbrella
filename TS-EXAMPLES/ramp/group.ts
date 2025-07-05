// Tangled @ 2025-07-05T17:30:40-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/ramp/src/group.ts

import { group, hermite, linear } from "@thi.ng/ramp";

const example = group({
  // named, independent child ramps/timelines
  a: linear([[0.1, 0], [0.5, -10]]),
  b: hermite([[0, 100], [1, 200]]),
});

console.log(example.at(0.2));
// { a: -2.5, b: 110.4 }

// set new keyframe for `b` ramp
// (in TS need to cast to proper type first)
(<Ramp<number>>example.children.b).setStopAt(0.5, 200);

console.log(example.at(0.2));
// { a: -2.5, b: 135.2 }