// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/object.ts

import { fromObject, trace } from "@thi.ng/rstream";

type Foo = { a?: number; b: string; };

const obj = fromObject(<Foo>{ a: 1, b: "foo" });

obj.streams.a.subscribe(trace("a"));
// a 1

obj.streams.b.subscribe(trace("b"));
// b foo

obj.next({ b: "bar" });
// a undefined
// b bar