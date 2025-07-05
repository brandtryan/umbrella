// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/buffer.ts

import { mapBuffer } from "@thi.ng/vectors";

console.log(
  mapBuffer("f32", new ArrayBuffer(32), 4, 2)
);
// [
//   Float32Array [ 0, 0 ],
//   Float32Array [ 0, 0 ],
//   Float32Array [ 0, 0 ],
//   Float32Array [ 0, 0 ]
// ]