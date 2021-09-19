<script>
  import { tick } from 'svelte';
  import { crossfade, fade } from 'svelte/transition';

  export let data = [];
  export let selected = '';
  let gallery;
  const [send, receive] = crossfade({
    duration: () => 350,
    fallback: fade
  });
  console.log(data, selected);
  $: currentIdx = selected ? data.findIndex((d) => d === selected) : -1;
</script>

{#if selected !== ''}
  <div
    class="image-viewer"
    on:click={(e) => {
      if (e.target === e.currentTarget) {
        selected = '';
      }
    }}
  >
    <img in:receive={{ key: selected }} out:send={{ key: selected }} src={selected} alt="" />
    <div aria-label="group aria label" role="group" bind:this={gallery} class="gallery" tabindex={0}>
      {#each data as d (d.name)}
        <div
          role="img"
          aria-label={d.name}
          data-selected={selected === d}
          class:active={selected === d}
          on:click={() => (selected = d)}
          class="image"
          style="background-image:url({d})"
        />
      {/each}
    </div>
  </div>
{/if}

<p class="visually-hidden" aria-atomic={true} aria-live="assertive">
  {#if data[currentIdx]}
    current Image：{data[currentIdx].name}
  {/if}
</p>

<style>
  * {
    box-sizing: border-box;
  }

  .visually-hidden {
    visibility: hidden;
  }

  .image {
    width: 100%;
    height: 100px;
    background: center / cover no-repeat;
  }

  .gallery {
    display: inline-flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: auto;
  }

  .gallery > .image {
    flex-shrink: 0;
    margin-right: 8px;
    width: 100px;
    height: 100px;
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
    max-height: 70%;
  }

  .active {
    border: 3px solid #000;
  }
</style>
