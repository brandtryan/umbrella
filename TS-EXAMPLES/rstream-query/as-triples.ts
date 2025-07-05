// Tangled @ 2025-07-05T17:30:51-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream-query/src/convert.ts

import { asTriples } from "@thi.ng/rstream-query";

const src = {
  "@thi.ng/rstream-query": {
    type: "project",
    author: "toxi",
    tag: ["ES6", "TypeScript", "graph"]
  },
  toxi: {
    type: "person",
    hasAccount: [
      {type: "twitter", id: "toxi"},
      {type: "github", id: "postspectacular"}
    ]
  }
};

console.log([...asTriples(src)]);
// [ [ '@thi.ng/rstream-query', 'type', 'project' ],
//   [ '@thi.ng/rstream-query', 'author', 'toxi' ],
//   [ '@thi.ng/rstream-query', 'tag', 'ES6' ],
//   [ '@thi.ng/rstream-query', 'tag', 'TypeScript' ],
//   [ '@thi.ng/rstream-query', 'tag', 'graph' ],
//   [ 'toxi', 'type', 'person' ],
//   [ 'toxi', 'hasAccount', '__b0__' ],
//   [ '__b0__', 'type', 'twitter' ],
//   [ '__b0__', 'id', 'toxi' ],
//   [ 'toxi', 'hasAccount', '__b1__' ],
//   [ '__b1__', 'type', 'github' ],
//   [ '__b1__', 'id', 'postspectacular' ] ]