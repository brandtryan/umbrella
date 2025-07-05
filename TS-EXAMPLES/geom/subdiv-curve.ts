// Tangled @ 2025-07-05T17:29:53-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom/src/subdiv-curve.ts

import { asSvg, rect, subdivCurve, SUBDIV_CHAIKIN_CLOSED } from "@thi.ng/geom";

console.log(
  asSvg(subdivCurve(rect(100), SUBDIV_CHAIKIN_CLOSED))
);
// <polygon points="0,25 25,0 75,0 100,25 100,75 75,100 25,100 0,75"/>