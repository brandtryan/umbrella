// Tangled @ 2025-07-05T17:30:29-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/src/combinators/dynamic.ts

import { defContext, dynamic,lit  } from "@thi.ng/parse";

const parser = dynamic<string>();
parser.set(lit("a"));

console.log(parser(defContext("a")));
// true