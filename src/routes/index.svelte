<script>
  import MyCarousel from '$lib/components/MyCarousel.svelte';
  import Logo1 from './image.js';
  // const modules = import.meta.glob('./*.js');

  // const Logo1 = await import(`./image.js`);
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div>
  <MyCarousel />
  <img srcset={Logo1} alt="Your  alt" />
</div>
