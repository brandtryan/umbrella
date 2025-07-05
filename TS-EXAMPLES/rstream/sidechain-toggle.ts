// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/sidechain-toggle.ts

import { fromInterval, sidechainToggle, trace } from "@thi.ng/rstream";

const src = fromInterval(500);

// close stream after 5 secs
setTimeout(() => src.done(), 5000);

// use slower interval stream to toggle faster main stream on/off
sidechainToggle(src, fromInterval(1000)).subscribe(trace());
// 0
// 1
// 4
// 5
// 8
// 9
// done