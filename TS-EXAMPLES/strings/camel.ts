// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/case.ts

import { camel } from "@thi.ng/strings";

console.log(camel("foo-bar23-baz"));
// fooBar23Baz

console.log(camel("FOO_BAR23_BAZ", "_"));
// fooBar23Baz