// Tangled @ 2025-07-05T17:29:42-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/distance-transform/src/transform.ts

import { distanceTransform, EUCLEDIAN } from "@thi.ng/distance-transform";
import {
  intBuffer, GRAY8,
  floatBuffer, FLOAT_GRAY,
  canvasFromPixelBuffer
} from "@thi.ng/pixel";
import { SYSTEM } from "@thi.ng/random";

// create image with 100 random pixels set
const img = intBuffer(256, 256, GRAY8);
for(let i = 0; i < 100; i++) {
  img.setAt(SYSTEM.int() % img.width, SYSTEM.int() % img.height, 255);
}

// compute distance field (aka voronoi)
const dt = distanceTransform(img, EUCLEDIAN);
// wrap as float pixel buffer
const dtImg = floatBuffer(img.width, img.height, FLOAT_GRAY, dt);
// ...create & copy to a canvas to display
canvasFromPixelBuffer(dtImg, document.body);