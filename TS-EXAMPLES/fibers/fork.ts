// Tangled @ 2025-07-05T17:29:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fibers/src/fiber.ts

import { fiber, wait } from "@thi.ng/fibers";

fiber(function* (ctx) {
  console.log("main start")
  // create 2 child processes
  ctx.fork(function* () {
    console.log("child1 start");
    yield* wait(500);
    console.log("child1 end");
  });
  // second process will take longer than first
  ctx.fork(function* () {
    console.log("child2 start");
    yield* wait(1000);
    console.log("child2 end");
  });
  // wait for children to complete
  yield* ctx.join();
  console.log("main end")
}).run();

// main start
// child1 start
// child2 start
// child1 end
// child2 end
// main end