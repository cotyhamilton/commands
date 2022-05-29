<script lang="ts">
	import { fly } from "svelte/transition";
	import { message } from "../stores/modal";

	let text: string, display: boolean;

	const displayModal = (message: string) => {
		if (message) {
			display = true;
			text = message;
			setTimeout(() => {
				resetModal();
			}, 2000);
		}
	};

	const resetModal = () => {
		$message = text = "";
		display = false;
	};

	$: displayModal($message);
</script>

{#if display && text}
	<div class="modal" transition:fly={{ y: -50, duration: 300 }}>{text}</div>
{/if}

<style>
	.modal {
		background-color: rgb(229, 243, 245);
		border: 1px solid #cdcfd1;
		border-radius: 6px;
		margin: 0 auto;
		max-width: 75vw;
		padding: 1rem;
		position: fixed;
		width: 50ch;
		z-index: 1000;
		left: 0;
		right: 0;
	}
</style>
