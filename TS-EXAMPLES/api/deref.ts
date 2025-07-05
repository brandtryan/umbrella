// Tangled @ 2025-07-05T17:29:17-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/api/src/deref.ts

import type { DerefedKeys, IDeref } from "@thi.ng/api";

interface Foo {
    a: IDeref<string>;
    b: IDeref<number>;
    c: { d: number };
}

type Foo2 = DerefedKeys<Foo>;
// { a: string; b: number; c: { d: number; } }

type Foo3 = DerefedKeys<Foo, "b">;
// { b: number; }