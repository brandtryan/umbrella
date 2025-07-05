// Tangled @ 2025-07-05T17:29:44-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/dsp-io-wav/src/write.ts

import { osc, sin } from "@thi.ng/dsp";
import { wavByteArray } from "@thi.ng/dsp-io-wav";
import { writeFileSync } from "node:fs";

// sample rate
const FS = 48000;

// write 1 second 24bit mono WAV file, 440Hz sine
writeFileSync(
  "sine-440.wav",
  wavByteArray(
    { sampleRate: FS, channels: 1, length: FS, bits: 24 },
    osc(sin, 440 / FS)
  )
)