// Tangled @ 2025-07-05T17:30:09-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/heaps/src/heap.ts

import { Heap } from "@thi.ng/heaps";

const h = new Heap([20, 5, 10]);
h.push(15);

console.log(h.pop()); // 5
console.log(h.pop()); // 10
console.log(h.pop()); // 15
console.log(h.pop()); // 20
console.log(h.pop()); // undefined