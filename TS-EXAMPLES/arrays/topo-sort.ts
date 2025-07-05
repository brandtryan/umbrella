// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/topo-sort.ts

import { topoSort } from "@thi.ng/arrays";

const graph: Record<string, { deps?: string[] }> = {
  a: { deps: ["c", "b"] },
  b: {},
  c: { deps: ["d"] },
  d: { deps: ["b"] }
};

console.log(
  topoSort(graph, (node) => node.deps)
);
// [ "b", "d", "c", "a" ]

// An error will be thrown if the graph contains cycles...
graph.d.deps!.push("a");

console.log(
  topoSort(graph, (node) => node.deps)
);
// Uncaught Error: illegal state: dependency cycle: a -> c -> d -> a