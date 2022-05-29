<script lang="ts">
	import { message as modalMessage } from "../stores/modal";
	import Tag from "./Tag.svelte";

	export let script: Script;

	const { script: text, description, tags } = script;

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(
			function () {
				console.log("Copied to clipboard: " + text);
				$modalMessage = "Copied!";
			},
			function () {
				console.error("Copy to clipboard failed");
				$modalMessage = "Copy failed!";
			}
		);
	};
</script>

<div class="script-container">
	<div class="script" on:click={() => copyToClipboard(text)}>
		{text}
	</div>
	<p class="description">{description}</p>
	<div class="tags">
		{#each tags as tag}
			<small><Tag {tag} /></small>
		{/each}
		<br />
	</div>
</div>

<style>
	.script-container {
		margin: 2em auto;
	}
	.script {
		background: #f6f8fa;
		border: 1px solid #cdcfd1;
		border-radius: 6px;
		cursor: copy;
		font-size: large;
		font-family: monospace;
		margin: auto;
		max-width: 75vw;
		overflow-y: hidden;
		padding: 1em;
		text-align: left;
		width: 50ch;
		white-space: pre;
	}
	.description {
		margin: 2em;
	}
</style>
