// Tangled @ 2025-07-05T17:29:45-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp/src/osc.ts

import { modOsc, osc, saw, sin, rect } from "@thi.ng/dsp";

// FM sin osc using rect osc as frequency modulator
modOsc(sin, 0.01, osc(rect, 0.1, 0.2))

// AM sin osc using rect osc as amplitude modulator
modOsc(sin, 0.01, 0, osc(rect, 0.1, 0.2))

// FM & AM sin osc using rect osc as fmod and saw as amod
modOsc(sin, 0.01, osc(rect, 0.1, 0.2), osc(saw, 0.05))