// Tangled @ 2025-07-05T17:29:32-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compare/src/ops.ts

import { stringOp } from "@thi.ng/compare";

const equalsABC = stringOp("=", "abc");

["xyz", "abc", "def"].map(equalsABC)
// [ false, true, false ]

class X {
  constructor(public body: string) {}

  toString() {
    return this.body;
  }
}

equalsABC(new X("abc"))
// true