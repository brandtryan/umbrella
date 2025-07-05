// Tangled @ 2025-07-05T17:29:20-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/associative/src/join.ts

import { join } from "@thi.ng/associative";

console.log(
  join(
    new Set([
      {id: 1, name: "foo"},
      {id: 2, name: "bar"},
      {id: 3, name: "baz"}]),
    new Set([
      {id: 1, color: "red"},
      {id: 2, color: "blue"}])
  )
);
// Set {
//   { id: 1, color: 'red', name: 'foo' },
//   { id: 2, color: 'blue', name: 'bar' }
// }

import { joinWith } from "@thi.ng/associative";

console.log(
  joinWith(
    new Set([
      {id: 1, name: "foo"},
      {id: 2, name: "bar"},
      {id: 3, name: "baz"}]),
    new Set([
      {type: 1, color: "red"},
      {type: 2, color: "blue"}]),
    {id: "type"}
  )
);
// Set {
//   { type: 1, color: 'red', id: 1, name: 'foo' },
//   { type: 2, color: 'blue', id: 2, name: 'bar' } }