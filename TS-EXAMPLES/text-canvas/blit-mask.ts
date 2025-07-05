// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-canvas/src/image.ts

import {
  blitMask, canvas, canvasFromText, clear, formatCanvas
} from "@thi.ng/text-canvas";

// source canvas
const a = canvasFromText([
  "###==###",
  "##====##",
  "#======#",
  "##====##",
  "###==###",
]);

console.log(formatCanvas(a));

// destination canvas (filled w/ "-")
const b = canvas(12,7);
clear(b, true, "-");

// paste `a` several times into `b` using "#" as mask
blitMask(b, a, -4, -2, "#"); // top-left (partially outside)
blitMask(b, a, 2, 1, "#"); // center
blitMask(b, a, 8, 4, "#"); // bottom-right (part outside)

// show result
console.log(formatCanvas(b));
// ===---------
// ==---==-----
// =---====----
// ---======---
// ----====---=
// -----==---==
// ---------===