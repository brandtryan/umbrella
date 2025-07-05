// Tangled @ 2025-07-05T17:29:20-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/associative/src/hash-map.ts

import { HashMap } from "@thi.ng/associative";
import { hash } from "@thi.ng/vectors";

const m = new HashMap([], { hash })
m.set([1, 2], "a");
m.set([3, 4], "b");
m.set([1, 2], "c");

console.log([...m]);
// HashMap { [ 1, 2 ] => 'c', [ 3, 4 ] => 'b' }