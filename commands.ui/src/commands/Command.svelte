<script>
    import { Tag } from '../components';
    export let command;
    export let description;
    export let tags;
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
