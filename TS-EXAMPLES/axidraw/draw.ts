// Tangled @ 2025-07-05T17:29:21-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/axidraw/src/axidraw.ts

import { AxiDraw, polyline, START, STOP } from "@thi.ng/axidraw";

const axi = new AxiDraw();

// execute start sequence, draw a triangle, then exec stop sequence
axi.draw([
  START,
  ...polyline([[50, 50], [100, 50], [75, 100], [50, 50]]),
  STOP
]);