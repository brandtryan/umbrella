// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/group-binary.ts

import { frequencies, groupBinary, reduce } from "@thi.ng/transducers";

const tree = reduce(
  groupBinary<string>(3, (x) => x.length, undefined, frequencies()),
  "aa bbb dddd ccccc bbb eeee fff".split(" ")
);

console.log(tree);
// {
//   l: {
//     r: {
//       l: Map(1) { "aa": 1 },
//       r: Map(2) { "bbb": 2, "fff": 1 },
//     },
//   },
//   r: {
//     l: {
//       l: Map(2) { "dddd": 1, "eeee": 1 },
//       r: Map(1) { "ccccc": 1 },
//     },
//   },
// }