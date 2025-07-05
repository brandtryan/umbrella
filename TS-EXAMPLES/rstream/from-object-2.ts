// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/object.ts

import { fromObject, subscription, trace } from "@thi.ng/rstream";

type Foo = { a?: number; b: string; };

const obj = fromObject(<Foo>{}, { keys: ["a", "b"], initial: false });
obj.streams.a.subscribe(trace("a"));
obj.streams.b.subscribe(trace("b"));

const src = subscription<Foo, Foo>();
// use `obj` as subscriber itself
src.subscribe(obj);

src.next({ a: 1, b: "foo" });
// a 1
// b foo