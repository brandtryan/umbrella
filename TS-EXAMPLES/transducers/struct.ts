// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/struct.ts

import { push, struct, transduce } from "@thi.ng/transducers";

const res = transduce(
    struct([["id", 1, (id) => id[0]], ["pos", 2], ["vel", 2], ["color", 4]]),
    push(),
    [0, 100, 200, -1, 0, 1, 0.5, 0, 1, 1, 0, 0, 5, 4, 0, 0, 1, 1]
);

console.log(res);
// [
//   {
//     color: [ 1, 0.5, 0, 1 ],
//     vel: [ -1, 0 ],
//     pos: [ 100, 200 ],
//     id: 0,
//   }, {
//     color: [ 0, 0, 1, 1 ],
//     vel: [ 5, 4 ],
//     pos: [ 0, 0 ],
//     id: 1,
//   }
// ]