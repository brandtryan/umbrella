// Tangled @ 2025-07-05T17:30:22-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/lsys/src/index.ts

import { rewrite } from "@thi.ng/lsys";

const RULES = {
  a: ["b"],
  b: ["a", "c"],
  c: () => [Math.random() < 0.8 ? "a" : "x"]
};

console.log([...rewrite(RULES, "a/b/c")]);
// [ "b", "/", "a", "c", "/", "x" ]