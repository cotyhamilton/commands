<script lang="ts">
	import { active, scripts } from "$lib/stores/scripts";

	const search = (event: Event) => {
		const filter: Script[] = [];
		const { value } = event.target as HTMLInputElement;

		if (!value) {
			$active = $scripts;
			return;
		}

		$scripts.forEach((script) => {
			if (script.script.includes(value)) {
				filter.push(script);
			} else if (script.description.includes(value)) {
				filter.push(script);
			} else if (script.tags.includes(value)) {
				filter.push(script);
			}
		});

		$active = filter;
	};
</script>

<input type="text" on:input={search} />

<style>
	input {
		border-radius: 6px;
		font-size: large;
		outline: none;
	}
</style>
