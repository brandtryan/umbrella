// Tangled @ 2025-07-05T17:29:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/csp/src/channel.ts

import { channel } from "@thi.ng/csp";

const chan = channel<number>();

(async () => {
  // implicit iterator conversion of the channel
  for await(let x of chan) console.log("received", x);
  console.log("channel closed");
})()

chan.write(1);
chan.write(2);
chan.write(3);
chan.close();