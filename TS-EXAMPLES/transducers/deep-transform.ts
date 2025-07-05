// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/deep-transform.ts

import { deepTransform, type TransformSpec } from "@thi.ng/transducers";

// source object to be transformed
const src = {
   meta: {
     author: { name: "Alice", email: "a@b.com" },
     date: 1041510896000
   },
   type: "post",
   title: "Hello world",
   body: "Ratione necessitatibus doloremque itaque."
};

// deep transformation spec
const spec: TransformSpec = [
   // root transform (called last)
   ({ type, meta, title, body }) => ["div", { class: type }, title, meta, body],
   // object of transform sub-specs
   {
     meta: [
       ({ author, date }) => ["div.meta", author, `(${date})`],
       {
         author: ({email, name}) => ["a", {href: `mailto:${email}`}, name],
         date: (d) => new Date(d).toLocaleString()
       }
     ],
     title: (title) => ["h1", title]
   }
];

// build transformer & apply to src
console.log(
  deepTransform(spec)(src)
);
// [ "div",
//   { class: "post" },
//   [ "h1", "Hello world" ],
//   [ "div.meta",
//     [ "a", { href: "mailto:a@.b.com" }, "Alice" ],
//     "(1/2/2003, 12:34:56 PM)" ],
//   "Ratione necessitatibus doloremque itaque." ]