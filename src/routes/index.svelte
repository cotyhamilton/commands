<script lang="ts">
	import { scripts } from "$lib/stores/scripts";
	import { active } from "$lib/stores/scripts";
	import Script from "$lib/components/Script.svelte";
	import Search from "$lib/components/Search.svelte";

	const reset = () => {
		$active = $scripts;
	};
</script>

<div class="content">
	<h1 on:click={reset}>Scripts</h1>

	<Search />

	<div class="scripts">
		{#each $active as script (script.script)}
			<Script {script} />
		{/each}
	</div>
</div>

<style>
	h1 {
		cursor: pointer;
	}

	.content {
		text-align: center;
	}
</style>
