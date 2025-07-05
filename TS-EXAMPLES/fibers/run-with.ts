// Tangled @ 2025-07-05T17:29:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fibers/src/fiber.ts

import { fiber } from "@thi.ng/fibers";

// start with custom higher frequency handler
fiber(function*() {
  while(true) {
    console.log("hello");
    yield;
  }
}).runWith(setImmediate);