<script lang="ts">
	import { active } from "$lib/stores/scripts";
	import { tags } from "$lib/stores/tags";

	export let tag: string;

	const setActiveTag = (tag: string) => {
		console.log($tags);
		console.log($tags[tag]);
		$active = $tags[tag];
	};
</script>

<small on:click={() => setActiveTag(tag)} class="tag">{tag}</small>

<style>
	.tag {
		background: #eee;
		border-radius: 3px 0 0 3px;
		color: #999;
		cursor: pointer;
		display: inline-block;
		height: 26px;
		line-height: 26px;
		padding: 0 8px 0 12px;
		position: relative;
		margin: 0 20px 10px 0;
		transition: color 0.2s;
	}
	.tag::after {
		background: #fff;
		border-bottom: 13px solid transparent;
		border-left: 10px solid #eee;
		border-top: 13px solid transparent;
		content: "";
		position: absolute;
		left: 100%;
		top: 0;
	}
</style>
