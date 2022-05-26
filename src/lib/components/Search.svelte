<script lang="ts">
	import { active, scripts } from "$lib/stores/scripts";
	import { searchFilter } from "$lib/stores/search";

	const search = () => {
		const filter: Script[] = [];

		if (!$searchFilter) {
			$active = $scripts;
			return;
		}

		$scripts.forEach((script) => {
			if (script.script.includes($searchFilter)) {
				filter.push(script);
			} else if (script.description.includes($searchFilter)) {
				filter.push(script);
			} else if (script.tags.includes($searchFilter)) {
				filter.push(script);
			}
		});

		$active = filter;
	};

	$: $searchFilter && search();
</script>

<input type="text" bind:value={$searchFilter} />

<style>
	input {
		border-radius: 6px;
		font-size: large;
		outline: none;
	}
</style>
