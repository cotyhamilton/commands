<script>
    import { state } from '../store';
    let { query } = state;
</script>

<style>
    input {
        border-radius: 6px;
        font-size: large;
        outline: none;
    }
</style>

<input type="text" bind:value={$query} />