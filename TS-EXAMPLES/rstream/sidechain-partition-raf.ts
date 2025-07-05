// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/sidechain-partition.ts

import { defAtom } from "@thi.ng/atom";
import { fromAtom, sidechainPartitionRAF } from "@thi.ng/rstream";

const atom = defAtom("alice");

// any change to the atom will only be applied during next RAF update
sidechainPartitionRAF(fromAtom(atom)).subscribe({
  next(name) { document.body.innerText = name; }
});

// trigger update
atom.reset("bob");