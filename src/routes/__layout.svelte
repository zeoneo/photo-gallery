<script>
  import '../app.scss';
  import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
  <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono" /> -->
</svelte:head>

<div class="g-app-wrapper">
  <div style="display: block; flex:0">
    <Nav />
  </div>
  <div style="flex:1; display:flex; flex-direction:column">
    <slot />
  </div>
</div>
