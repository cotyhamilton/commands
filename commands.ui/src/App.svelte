<script>
  import { Router, Route } from 'svelte-routing';
  import { PageNotFound } from './components';
  import Home from './Home.svelte';
  export let url = '';
</script>

<div class="section columns">
  <Router {url}>
    <main class="column">
      <div>
        <Route path="/" component={Home} />
        <Route path="**" component={PageNotFound} />
      </div>
    </main>
  </Router>
</div>