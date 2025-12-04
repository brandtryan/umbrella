import { ECS } from "@thi.ng/ecs";

interface CompSpecs {
	elementId: string;
	position: DOMRectReadOnly;
	vel: Float32Array;
}

// Initialize the ECS with the specs and a max number of entities.
const ecs = new ECS<CompSpecs>({ capacity: 100 });

// Define components using `defComponent`.

// Stores the HTML element's `id` attribute(string)
export const elementId = ecs.defComponent({
	id: "elementId",
	default: () => "",
});

// Stores the element's position and size. Also use an
// object component, which will hold the `DOMRectReadOnly` object returned
// by `getBoundingClientRect()`.
export const position = ecs.defComponent({
	id: "position",
	// DOMRectReadOnly is not constructible, so use a default plain jane object.
	default: () =>
		({
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		} as DOMRectReadOnly),
});

// (4) Create an entity and associate it with the <span> element.

const word = document.getElementById("w000000");

// Ensure our components were defined correctly before proceeding
if (word && elementId && position) {
	console.log("Found element:", word);

	// Create a new entity and assign its initial component values.
	// The keys must match the component IDs defined in `CompSpecs`.
	const wordEntity = ecs.defEntity({
		elementId: word.id,
		position: word.getBoundingClientRect(),
	});

	if (wordEntity !== undefined) {
		console.log("Successfully created entity with ID:", wordEntity);

		// Retrieve the component data for the entity.
		// The `get()` method on the component returns the value for a given ENTITY ID.
		const idVal = elementId.get(wordEntity);
		const posVal = position.get(wordEntity);
		const posArr = [posVal?.x, posVal?.y];
		console.log("Position Array: " + posArr);

		console.log(`Component 'elementId' for entity ${wordEntity}:`, idVal);
		console.log(`Component 'position' for entity ${wordEntity}:`, posVal);
	} else {
		console.error("Failed to create entity.");
	}
} else {
	if (!word) console.error("Could not find element with id='word'");
	if (!elementId) console.error("Failed to define 'elementId' component");
	if (!position) console.error("Failed to define 'position' component");
}
