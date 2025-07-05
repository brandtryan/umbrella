// Tangled @ 2025-07-05T17:29:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp/src/sweep.ts

import { adsr, osc, sin, sweep } from "@thi.ng/dsp";

// sample rate
const FS = 44100

// render 2 sec osc sweep from 100 - 10000Hz
osc(
  sin,
  // freq & phase gen
  sweep(100 / FS, 10000 / FS, 2 * FS, 0.1),
  // amplitude gen / envelope
  adsr({ a: 0.5 * FS, r: 1.5 * FS, slen: 0 })
).take(2 * FS)
// [...]