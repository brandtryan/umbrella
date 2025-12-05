import { equiv } from "@thi.ng/equiv";
import { ECS, LOGGER as log, Group } from "@thi.ng/ecs";
import { ConsoleLogger } from "@thi.ng/logger";

log.set(new ConsoleLogger());

let ecs: ECS<any>;

ecs = new ECS({ capacity: 16 });

const collect = (g: Group<any, any>) => {
	let res: any[] = [];
	g.forEach((x) => res.push(x));
	return res;
};

const a = ecs.defComponent({ id: "a", default: () => "a" })!;
log.debug(`Keys: ${a.keys}
		Values: ${a.values}
		id: ${a.id}`);
const b = ecs.defComponent({ id: "b", type: "f32", size: 2 })!;
const g = ecs.defGroup([a, b]);
ecs.defEntity(["a", "b"]);
ecs.defEntity({ a: "aa", b: [1, 2] });
ecs.defEntity({ a: "aaa", b: [3, 4] });

log.debug(g.has(0) === true, " // true");
log.debug(g.has(1) === true, " // true");
log.debug(g.has(2) === true, " // true");
log.debug(g.has(3) === false, " // true");
log.debug(g.ids);
log.debug(equiv([...ecs.componentsForID(2)], [a, b]), " //true");
log.debug(equiv([...ecs.groupsForID(2)], [g]), " //true");
log.debug(
	equiv(collect(g), [
		{ a: "a", b: [0, 0], id: 0 },
		{ a: "aa", b: [1, 2], id: 1 },
		{ a: "aaa", b: [3, 4], id: 2 },
	]),
	" // true"
);

a.delete(0);
log.debug(
	equiv(collect(g), [
		{ a: "aa", b: [1, 2], id: 1 },
		{ a: "aaa", b: [3, 4], id: 2 },
	]),
	" // true"
);
a.delete(2);
log.debug(equiv(collect(g), [{ a: "aa", b: [1, 2], id: 1 }]), " // true");
a.set(1, "hi");
log.debug(equiv(collect(g), [{ a: "hi", b: [1, 2], id: 1 }]), " // true");
