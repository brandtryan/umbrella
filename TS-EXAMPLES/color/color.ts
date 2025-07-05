// Tangled @ 2025-07-05T17:29:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/src/color.ts

import { color } from "@thi.ng/color";

console.log(color("springgreen"));
// $Color [srgb] { offset: 0, stride: 1, buf: [ 0, 1, 0.498, 1 ] }

console.log(color("#ff0"));
// $Color [srgb] { offset: 0, stride: 1, buf: [ 1, 1, 0, 1 ] }

console.log(color("oklch(60% 0.15 50)"));
// $Color [oklch] { offset: 0, stride: 1, buf: [ 0.6, 0.0015, 0.139, 1 ] }

console.log(color("hsv", [0.5, 1, 1, 1]));
// $Color [hsv] { offset: 0, stride: 1, buf: [ 0.5, 1, 1, 1 ] }