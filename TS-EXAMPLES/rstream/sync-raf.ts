// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/sync-raf.ts

import { defAtom } from "@thi.ng/atom";
import { fromAtom, syncRAF } from "@thi.ng/rstream";

const atom = defAtom("alice");

// any changes to the atom will only be received by this subscription
// during next RAF update cycle
syncRAF(fromAtom(atom)).subscribe({
  next({ name }) { document.body.innerText = name; }
});

// trigger update
atom.reset("bob");