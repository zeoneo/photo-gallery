<script>
  import '../app.scss';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div style="display: flex;flex-direction: column;">
  <Nav />
  <main style="flex:1; display:flex; flex-direction:column" class="container-fluid">
    <slot />
  </main>
  <Footer />
</div>
