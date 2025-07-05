// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/post-worker.ts

import { postWorker, stream } from "@thi.ng/rstream";

// worker source code
const src = `self.onmessage = (e) => console.log("worker", e.data);`;

const a = stream<any>();
a.subscribe(
  postWorker(new Blob([src], { type: "application/javascript" }))
);

a.next(42)
// worker 42