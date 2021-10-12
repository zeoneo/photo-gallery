<script language="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'sveltestrap';
  import { getNewCarouselActiveIndex } from './Utils';

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

{#if columns}
  <div id="gallery" bind:clientWidth={galleryWidth} style={galleryStyle}>
    {#each columns as column}
      <div class="column">
        {#each column as url}
          <img src={url} alt="" class="img-fluid img-thumbnail" on:click={HandleClick} />
        {/each}
      </div>
    {/each}
  </div>
{/if}

{#if typeof activeIndex !== 'undefined'}
  <div
    class="image-viewer"
    on:click={(e) => {
      if (e.target === e.currentTarget) {
        activeIndex = undefined;
      }
    }}
  >
    <!-- <Carousel {items} bind:activeIndex> -->
    <CarouselIndicators bind:activeIndex {items} />
    <img src={items[activeIndex]} alt="" />
    <CarouselControl direction="prev" bind:activeIndex {items} />
    <CarouselControl direction="next" bind:activeIndex {items} />
    <button
      type="button"
      class="btn-close btn-close-white"
      aria-label="Close"
      on:click={(e) => {
        activeIndex = undefined;
      }}
    />
    <!-- </Carousel> -->
  </div>
{/if}

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
