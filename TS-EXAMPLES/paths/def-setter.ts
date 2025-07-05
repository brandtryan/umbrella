// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/setter.ts

import { defSetter } from "@thi.ng/paths";

type State = { a: { b: number } };

const setB = defSetter<State, "a", "b">(["a", "b"]);

setB({ a: { b: 1 } }, 2); // ok!
setB({ a: { b: 1 } }, "2"); // error!