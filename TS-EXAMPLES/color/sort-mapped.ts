// Tangled @ 2025-07-05T17:29:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/src/sort.ts

import { css, luminanceSrgb, sortMapped, srgb } from "@thi.ng/color";

// memory buffer of 4 sRGB colors
const buf = new Float32Array([
  0, 1, 0, 1, 0, 0.5, 0, 1, 0, 0.25, 0, 1, 0, 0.75, 0, 1,
]);

// map buffer (creates 4 SRGB instances linked to the buffer)
const pix = srgb.mapBuffer(buf);

// display original order
console.log(pix.map((x) => css(x)));
// [ '#00ff00', '#008000', '#004000', '#00bf00' ]

// sort colors (buffer!) by luminance
sortMapped(pix, luminanceSrgb);

// new order
console.log(pix.map((x) => css(x)));
// [ '#004000', '#008000', '#00bf00', '#00ff00' ]

// buffer contents have been re-ordered
console.log(buf);
// Float32Array(16) [
//     0, 0.25, 0, 1,
//     0, 0.5, 0, 1,
//     0, 0.75, 0, 1,
//     0, 1, 0, 1
// ]