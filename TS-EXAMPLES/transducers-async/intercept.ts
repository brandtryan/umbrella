// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-async/src/intercept.ts

import { intercept, iterator } from "@thi.ng/transducers-async";

// tag-based inference
const xform = intercept<string[]>([
  // add an "untitled" tag, if needed
  (tags) => !tags.find(x => /^title:/.test(x)) ? [...tags, "untitled"] : tags,
]);

// dynamically add a second interceptor to skip items if they're tagged with "temp"
// using .prepend() here to avoid extraneous processing
xform.prepend((tags) => tags.includes("temp") ? null : tags);

const items = [
  ["photo1", "title:test"],
  ["photo2"],
  ["photo3", "temp"],
];

// process inputs and display results
for await(let tags of iterator(xform, items)) console.log(tags);