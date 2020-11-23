<script>
    import { Tag } from '../components';
    import { Copy as CopyIcon } from '../components/icons';
    import CopyToClipboard from "svelte-copy-to-clipboard";
    export let command;
    export let description;
    export let tags;
</script>

<style>
    .command-container {
        margin: 2em auto;
    }

    .command {
        display: flex;
        justify-content: center;
    }

    textarea, button {
        background: #f6f8fa;
        font-size: large;
        height: 3rem;
    }

    textarea {
        border-radius: 6px 0 0 6px;
        font-family: monospace;
        margin: 0;
        max-width: 75vw;
        outline: none;
        overflow-y: hidden;
        padding: 1em 1em 1em 2em;
        resize: none;
        white-space: nowrap;
        width: 50ch;
    }

    button {
        background: #333;
        border-color: #333;
        border-radius: 0 6px 6px 0;
        color: white;
        cursor: copy;
        margin-left: -2px;
        padding: 0 1em;
    }

    button:active {
        background: black;
        border-color: black;
    }

    .description {
        margin: 2em;
    }
</style>

<div class="command-container">
    <div class="command">
        <textarea readonly>{command}</textarea>
        <CopyToClipboard text={command} let:copy>
            <button on:click={copy}>
                <CopyIcon />
            </button>
        </CopyToClipboard>
    </div>
    <p class="description">{description}</p>
    <div class="tags">
    {#each tags as { name }}
        <small> <Tag tag={name} /></small>
    {/each}
    <br />
    </div>
</div>
