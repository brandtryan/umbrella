// Tangled @ 2025-07-05T17:30:10-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/hiccup/src/attribs.ts

import { mergeClasses } from "@thi.ng/hiccup";

console.log(
  mergeClasses("foo bar", { foo: false, baz: true })
);
// "bar baz"

console.log(
  mergeClasses("foo", ["bar", "baz"])
);
// "foo bar baz"

console.log(
  mergeClasses("foo bar", "baz")
);
// "foo bar baz"