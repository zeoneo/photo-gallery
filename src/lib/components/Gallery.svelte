<script language="ts">
  import { browser } from '$app/env';

  import { onMount, createEventDispatcher } from 'svelte';
  import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'sveltestrap';
  import { getNewCarouselActiveIndex } from './Utils';
  import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
  import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';
  import { tick } from 'svelte';
  import { language } from 'gray-matter';
  export let gap = 10;
  export let maxColumnWidth = 250;
  export let imageData = [];
  let selected = '';
  let activeIndex = undefined;
  let data = [];

  const dispatch = createEventDispatcher();
  let slotHolder = null;
  let columns = [];
  let galleryWidth = 0;
  let columnCount = 0;
  $: items = imageData.map(({ src }) => src);
  $: columnCount = parseInt(galleryWidth / maxColumnWidth) || 1;
  $: columnCount && Draw();
  $: galleryStyle = `grid-template-columns: repeat(${columnCount}, 1fr); --gap: ${gap}px`;
  onMount(Draw);
  function HandleClick(e) {
    console.log(e.target.src);
    // document.body.style.overflow = 'hidden';
    // document.body.style.position = 'sticky';
    activeIndex = items.findIndex((value) => e.target.src.endsWith(value));
    dispatch('click', { src: e.target.src });
  }
  async function Draw() {
    await tick();
    columns = [];
    // Fill the columns with image URLs
    for (let i = 0; i < imageData.length; i++) {
      const idx = i % columnCount;
      columns[idx] = [...(columns[idx] || []), imageData[i].src];
    }
    if (browser) {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery--simple',

        children: 'a',
        pswpModule: PhotoSwipe
      });
      lightbox.init();
    }
  }
  function handleKeydown(event) {
    let direction = null;
    if (event.key === 'ArrowLeft') {
      direction = 'prev';
    } else if (event.key === 'ArrowRight') {
      direction = 'next';
    }
    if (direction) {
      activeIndex = getNewCarouselActiveIndex(direction, items, activeIndex);
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- {#if columns}
  <div id="gallery" bind:clientWidth={galleryWidth} style={galleryStyle}>
    {#each columns as column}
      <div class="column">
        {#each column as url}
          <img src={url} alt="" class="img-fluid img-thumbnail" on:click={HandleClick} />
        {/each}
      </div>
    {/each}
  </div>
{/if} -->

<div class="pswp-gallery pswp-gallery--single-column" id="gallery--simple">
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-pswp-width="1669"
    data-pswp-height="2500"
    target="_blank"
  >
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" alt="" />
  </a>

  <!-- cropped thumbnail -->
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg"
    data-pswp-width="1875"
    data-pswp-height="2500"
    data-cropped="true"
    target="_blank"
  >
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg" alt="" />
  </a>

  <!-- data-pswp-src with custom URL in href -->
  <a
    href="https://unsplash.com"
    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-pswp-width="2500"
    data-pswp-height="1666"
    target="_blank"
  >
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" alt="" />
  </a>

  <!-- Without thumbnail -->
  <a
    href="http://example.com"
    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
    data-pswp-width="2500"
    data-pswp-height="1668"
    target="_blank"
  >
    No thumbnail
  </a>

  <!-- wrapped with any element -->
  <div>
    <a
      href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg"
      data-pswp-width="2500"
      data-pswp-height="1667"
      target="_blank"
    >
      <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg" alt="" />
    </a>
  </div>
</div>

<style>
  #gallery {
    width: 100%;
    display: grid;
    gap: var(--gap);
  }
  #gallery .column {
    display: flex;
    flex-direction: column;
  }
  #gallery .column * {
    width: 100%;
    margin-top: var(--gap);
  }
  #gallery .column *:nth-child(1) {
    margin-top: 0;
  }

  .image-viewer {
    padding: 20px;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background-color: rgba(100, 100, 100, 0.8);
  }

  .image-viewer > img {
    max-height: 90%;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
  }
</style>
