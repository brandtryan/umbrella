// Tangled @ 2025-07-05T17:29:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fibers/src/ops.ts

import { asPromise, wait } from "@thi.ng/fibers";

(async () => {
  // create & spawn task/fiber
  const task = asPromise(function*() {
    for(let i = 0; i< 3; i++) {
      console.log("working...", i);
      yield* wait(1000);
    }
    return 42;
  });
  // now wait for task to complete
  const result = await task;
  console.log("final result", result);
})()