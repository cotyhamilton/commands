<script lang="ts">
	import { active, scripts } from "$lib/stores/scripts";
	import { searchFilter } from "$lib/stores/search";

	const search = (value: string) => {
		const filter: Script[] = [];

		if (!value) {
			$active = $scripts;
			return;
		}

		$scripts.forEach((script) => {
			if (script.script.toLowerCase().includes(value.toLowerCase())) {
				filter.push(script);
			} else if (script.description.toLowerCase().includes(value.toLowerCase())) {
				filter.push(script);
			} else if (script.tags.toString().toLowerCase().includes(value.toLowerCase())) {
				filter.push(script);
			}
		});

		$active = filter;
	};

	$: search($searchFilter);
</script>

<input type="text" bind:value={$searchFilter} />

<style>
	input {
		border-radius: 6px;
		font-size: large;
		outline: none;
	}
</style>
