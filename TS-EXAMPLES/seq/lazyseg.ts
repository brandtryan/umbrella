// Tangled @ 2025-07-05T17:30:52-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/seq/src/lazyseq.ts

import { cons, lazyseq } from "@thi.ng/seq";

const rnd = () => lazyseq(() => cons(Math.random(), rnd()));
const a = rnd();

console.log(a.first());
// 0.4421468479982633

// already evaluated items will be cached (memoization)
console.log(a.first());
// 0.4421468479982633

console.log(a.next().first());
// 0.29578903713266524