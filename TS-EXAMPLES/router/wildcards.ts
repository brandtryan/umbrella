// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/router/src/trie.ts

import { Trie } from "@thi.ng/router";

const trie = new Trie();
trie.set(["a", "?", "c"], "A");
trie.set(["a", "b"], "B");
trie.set(["a", "+"], "C");
trie.set(["+"], "D");

// matches A because B doesn't match
// and A has higher priority than C
console.log(trie.get(["a", "b", "c"]));
// A

// perfect match B
console.log(trie.get(["a", "b"]));
// B

// matches C because neither A or B matches
console.log(trie.get(["a", "b", "d"]));
// C

// matches D because all others fail
console.log(trie.get(["a"]));
// D