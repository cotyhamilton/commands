<script lang="ts">
	import { scripts } from "$lib/stores/scripts";
	import { active } from "$lib/stores/scripts";
	import { searchFilter } from "../lib/stores/search";
	import Script from "$lib/components/Script.svelte";
	import Search from "$lib/components/Search.svelte";
	import Modal from "$lib/components/Modal.svelte";

	const reset = () => {
		$active = $scripts;
		$searchFilter = "";
	};
</script>

<div class="content">
	<Modal />
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
