// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/setter.ts

import { defSetter } from "@thi.ng/paths";

type State = { a: { b: number } };

const path = <const>["a","b"];

const setB = defSetter<State, typeof path[0], typeof path[1]>(path);