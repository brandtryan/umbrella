// Tangled @ 2025-07-05T17:29:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compose/src/trampoline.ts

import { trampoline } from "@thi.ng/compose";

const countdown = (acc, x) =>
  x >= 0 ?
    () => (acc.push(x), countdown(acc, x-1)) :
    acc;

trampoline(countdown([], 4))
// [ 4, 3, 2, 1, 0 ]

trampoline(countdown([], -1))
// []