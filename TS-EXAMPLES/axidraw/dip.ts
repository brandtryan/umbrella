// Tangled @ 2025-07-05T17:29:21-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/axidraw/src/dip.ts

import { dip, MOVE } from "@thi.ng/axidraw";

// simple 2x up/down
console.log([...dip(2)]);
// [
//   [ "d", undefined ],
//   [ "u", undefined ],
//   [ "d", undefined ],
//   [ "u", undefined ],
// ]

// 3x dipping with custom up/down delays, each time at a random position
console.log(
  [...dip(3, {
    down: 300,
    up: 400,
    commands: () => [ MOVE([Math.random()* 5, Math.random()* 5]) ]
  })]
);
// [
//   [ "d", 300 ],
//   [ "M", [ 3.996, 1.707 ], 1 ],
//   [ "u", 400 ],
//   [ "d", 300 ],
//   [ "M", [ 4.747, 4.925 ], 1 ],
//   [ "u", 400 ],
//   [ "d", 300 ],
//   [ "M", [ 1.751, 0.670 ], 1 ],
//   [ "u", 400 ]
// ]