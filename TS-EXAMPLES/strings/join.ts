// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/join.ts

import { format, join } from "@thi.ng/strings";
import { partial } from "@thi.ng/compose";

const slashes = join("/");

console.log(
  slashes([1, 2, 3])
);
// "1/2/3"

// pre-compose formatter function w/ partial arguments
const formatOBJFace = partial(
  format, ["f ", slashes, " ", slashes, " ", slashes]
);

console.log(
  formatOBJFace([1, 2], [3, 4], [5, 6])
);
// "f 1/2 3/4 5/6"