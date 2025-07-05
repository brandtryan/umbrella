// Tangled @ 2025-07-05T17:29:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color/src/gradients.ts

import { lch, multiColorGradient, swatchesH } from "@thi.ng/color";
import { serialize } from "@thi.ng/hiccup";
import { svg } from "@thi.ng/hiccup-svg";
import { writeFileSync } from "node:fs";

const gradient = multiColorGradient({
  num: 100,
  // LCH color stops
  stops: [
    // pink red
    [0, lch(0.8, 0.8, 0)],
    // green
    [1 / 3, lch(0.8, 0.8, 1 / 3)],
    // blue
    [2 / 3, lch(0.8, 0.8, 2 / 3)],
    // gray
    [1, lch(0.8, 0, 1)],
  ]
});

// write gradient as SVG swatches
writeFileSync(
  `lch-multigradient.svg`,
  serialize(
    svg(
      { width: 500, height: 50, __convert: true },
      swatchesH(gradient, 5, 50)
    )
  )
);