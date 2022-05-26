import { derived } from "svelte/store";
import { scripts } from "./scripts";

export const tags = derived(scripts, (values) => {
	return values.reduce((prev, curr) => {
		curr.tags.forEach((tag) => {
			prev[tag] = prev[tag] ? [...prev[tag], curr] : [curr];
		});
		return prev;
	}, <Tags>{});
});
