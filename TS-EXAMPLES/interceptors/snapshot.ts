// Tangled @ 2025-07-05T17:30:16-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/interceptors/src/interceptors.ts

import { defAtom, defHistory } from "@thi.ng/atom";
import { EventBus, snapshot, valueSetter, EV_UNDO } from "@thi.ng/interceptors";

const state = defAtom({ foo: 42 });
const history = defHistory(state);
const bus = new EventBus(state);
// register event handler
// each time the `foo` event is triggered, a snapshot of
// current app state is recorded first
bus.addHandlers({
  foo: [snapshot(), valueSetter("foo")]
});

// trigger event
bus.dispatch(["foo", 23]);

// pass history instance via interceptor context to handlers
bus.processQueue({ history });

// show updated state
console.log(state.deref());

// trigger & process built-in undo event
bus.dispatch([EV_UNDO]);
bus.processQueue({ history });

// show restored state
console.log(state.deref());