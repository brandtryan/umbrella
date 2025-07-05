// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/sidechain-partition.ts

import { fromEvent, fromRAF, merge, sidechainPartition, trace } from "@thi.ng/rstream";

// merge various event streams
const events = merge({
  src: [
    fromEvent(document,"mousemove"),
    fromEvent(document,"mousedown"),
    fromEvent(document,"mouseup")
  ]
});

// queue event processing to only execute during the
// requestAnimationFrame cycle (RAF)
sidechainPartition(events, fromRAF()).subscribe(trace())