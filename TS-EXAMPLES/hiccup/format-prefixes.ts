// Tangled @ 2025-07-05T17:30:10-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/hiccup/src/prefix.ts

import { formatPrefixes } from "@thi.ng/hiccup";
import { foaf, xsd } from "@thi.ng/prefixes";

console.log(
  formatPrefixes({ foaf, xsd })
);
// "foaf: http://xmlns.com/foaf/0.1/ rdf: http://www.w3.org/2001/XMLSchema#"