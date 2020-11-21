<script>
    import Commands from './commands/Commands.svelte';
    import { Search } from './components';
</script>

<style>
    .main {
        text-align: center;
    }
    .main a {
        color: inherit;
        text-decoration: none;
    }
</style>

<div class="main">
    <a href="/"><h1>Commands</h1></a>
    <Search />
    <Commands />
</div>