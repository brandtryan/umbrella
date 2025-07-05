// Tangled @ 2025-07-05T17:29:39-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/defmulti/src/impls.ts

import { defmulti, implementations } from "@thi.ng/defmulti";

const foo = defmulti((x) => x.id);
const bar = defmulti((x) => x.id);
const bax = defmulti((x) => x.id);
const baz = defmulti((x) => x.id);

// define impls for dispatch value `a`
implementations(
  "a",

  // delegate bax & baz impls to dispatch val `b`
  {
     b: [bax, baz]
  },

  // concrete multi-fn impls
  foo,
  (x) => `foo: ${x.val}`,

  bar,
  (x) => `bar: ${x.val.toUpperCase()}`
);

// add parent impls
bax.add("b", (x) => `bax: ${x.id}`);
baz.add("c", (x) => `baz: ${x.id}`);

// use "c" impl for "b"
baz.isa("b", "c");

console.log(foo({ id: "a", val: "alice" }));
// "foo: alice"

console.log(bar({ id: "a", val: "alice" }));
// "bar: ALICE"

console.log(bax({ id: "a", val: "alice" }));
// "bax: a"

console.log(baz({ id: "a", val: "alice" }));
// "baz: a"

console.log([...baz.impls().keys()]);
// Set { "c", "a", "b" }