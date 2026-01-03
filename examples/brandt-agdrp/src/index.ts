import { absLayout } from "./absLayout";
import { ecs } from "./ecs";

setInterval(
	() =>
		ecs.idgen.freeID > 3297
			? console.log("Problem")
			: console.log("No Problem"),
	300000
);
