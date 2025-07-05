// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-async/src/events.ts

import { events, map, run } from "@thi.ng/transducers-async";

const resize = events(window, "resize");

const sizes = map(
  (e) => [window.innerWidth, window.innerHeight],
  resize
);

for await (let [w, h] of sizes) {
  console.log(w, h)
}

// to stop listening and stop iterator
resize.close();