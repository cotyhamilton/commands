<script>
    import { Tag } from '../components';
    import { state } from '../store';
    let { tag, query } = state;

    async function fetchCommands() {
		const response = await self.fetch('http://localhost:1337/commands');
        const result = await response.json();

		if (response.ok) {
  		    return result;
        }
        else {
            throw new Error(result.message);
        }
    }

    async function fetchCommandsFromTag(tag) {
		const response = await self.fetch(`http://localhost:1337/commands?tags.name=${tag}`);
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
		const response = await self.fetch(`http://localhost:1337/commands?${queryString}`);
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
    textarea {
        background: #f6f8fa;
        border-radius: 6px;
        color: black;
        cursor: text;
        font-family: monospace;
        font-size: large;
        height: 3em;
        margin: 0;
        max-width: 80vw;
        overflow-y: hidden;
        padding: 16px;
        resize: none;
        text-align: center;
        white-space: nowrap;
        width: 50ch;
    }

    .description {
        margin: 2em;
    }

    .command-container {
        margin: 2em 0;
    }
</style>
{#await promise}
	<p>...waiting</p>
{:then commands}
  {#each commands as { command, description, platform, tags }}
    <div class="command-container">
        <textarea disabled>{command}</textarea>
        <p class="description">{description}</p>
        <div class="tags">
        {#each tags as { name }}
            <small> <Tag tag={name} /></small>
        {/each}
        <br />
        </div>
    </div>
  {/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}