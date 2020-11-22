<script>
    import Command from './Command.svelte';
    import { state, API } from '../store';
    let { tag, query } = state;

    async function fetchCommands() {
		const response = await self.fetch(`${API}/commands`);
        const result = await response.json();

		if (response.ok) {
  		    return result;
        }
        else {
            throw new Error(result.message);
        }
    }

    async function fetchCommandsFromTag(tag) {
		const response = await self.fetch(`${API}/commands?tags.name=${tag}`);
        const result = await response.json();

        if (response.ok) {
            return result;
        }
        else {
            throw new Error(result.message);
        }
    }

    async function fetchCommandsFromQuery(query) {
        const queryString = query.split(' ')
            .filter(q => !!q)
            .map(q => `&description_contains=${q}`);
		const response = await self.fetch(`${API}/commands?${queryString}`);
        const result = await response.json();

        if (response.ok) {
            return result;
        }
        else {
            throw new Error(result.message);
        }
    }

    let promise = fetchCommands();
  
    tag.subscribe( async value => {
        if (value) {
            promise = fetchCommandsFromTag(value);
        }
        else {
            promise = fetchCommands();
        }
    });

    query.subscribe( async value => {
        if (value) {
            promise = fetchCommandsFromQuery(value);
        }
        else {
            promise = fetchCommands();
        }
    });
</script>

<style>

</style>
{#await promise}
	<p>...waiting</p>
{:then commands}
  {#each commands as { command, description, tags }}
    <Command {command} {description} {tags} />
  {/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}