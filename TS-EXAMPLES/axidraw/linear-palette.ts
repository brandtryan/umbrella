// Tangled @ 2025-07-05T17:29:21-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/axidraw/src/palettes.ts

import { AxiDraw, linearPalette } from "@thi.ng/axidraw";
import { points } from "@thi.ng/geom";
import { asAxiDraw } from "@thi.ng/geom-axidraw";
import { repeatedly } from "@thi.ng/transducers";
import { randMinMax2 } from "@thi.ng/vectors";

// configure palette
const palette = linearPalette({
  // first palette slot is near the world origin (slight offset)
  pos: [2, 0],
  // palette has 5 paint slots
  num: 5,
  // each slot 40mm separation along Y-axis
  // (needs to be measured/determined manually)
  step: [0, 40],
  // 2mm jitter radius (to not always move to exact same position)
  jitter: 2,
  // dip brush 3x each time
  repeat: 3,
});

// investigate command sequence for requesting slot #1
console.log(palette(1));
// [
//   [ "M", [ 0.8949, 41.6697 ], 1 ],
//   [ "d", undefined, undefined ],
//   [ "u", undefined, undefined ],
//   [ "d", undefined, undefined ],
//   [ "u", undefined, undefined ],
//   [ "d", undefined, undefined ],
//   [ "u", undefined, undefined ]
// ]

// define point cloud of 100 random points
// using a random palette slot each time (for each refill)
// assign axidraw-specific attribs to refill brush every 10 dots
const cloud = points(
  [...repeatedly(() => randMinMax2([], [10, 10], [190, 190]), 100)],
  {
    __axi: {
      interleave: {
        num: 10,
        commands: () => palette((Math.random() * 5) | 0)
      }
    }
  }
);

// AxiDraw setup
const axi = new AxiDraw();

// convert geometry into axidraw commands and send to plotter
axi.draw(asAxiDraw(cloud));