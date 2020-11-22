<script>
  import { Router, Route } from 'svelte-routing';
  import { PageNotFound } from './components';
  import Home from './Home.svelte';
</script>

<div class="section columns">
  <Router>
    <main class="column">
      <div>
        <Route path="/" component={Home} />
        <Route path="**" component={PageNotFound} />
      </div>
    </main>
  </Router>
</div>