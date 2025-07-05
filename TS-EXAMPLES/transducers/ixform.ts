// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/api.ts

import {
  comp, drop, map, push, range, takeNth, transduce,
  type IXform
} from "@thi.ng/transducers";

class Mul implements IXform<number, number> {
  constructor(public factor = 10) {}

  xform() { return map((x: number) => this.factor * x); }
}

console.log(
  transduce(new Mul(11), push(), range(4))
);
// [0, 11, 22, 33, 44]

// also usable w/ comp()
const res = transduce(
  comp(
    drop(1),
    new Mul(11),
    takeNth(2)
  ),
  push(),
  range(4)
);

console.log(res);
// [11, 33]