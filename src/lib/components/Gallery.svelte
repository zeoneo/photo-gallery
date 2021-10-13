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
  async function Draw() {
    if (browser) {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery--custom-html-markup',
        children: 'a',

        // Adjust thumbnail selector,
        // (for opening/closing zoom transition)
        thumbSelector: 'a',

        pswpModule: PhotoSwipe
      });
      lightbox.on('itemData', (e) => {
        console.log('item data is called', e);
        const { itemData } = e;

        // element is children
        const { element } = itemData;

        itemData.src = element.href;
        const sizeAttr = element.dataset.mySize;
        itemData.w = Number(sizeAttr.split('x')[0]);
        itemData.h = Number(sizeAttr.split('x')[1]);
        itemData.msrc = element.dataset.thumbSrc;
        itemData.thumbCropped = true;
      });
      lightbox.init();
    }
  }
</script>

<div class="pswp-gallery pswp-gallery--single-column" id="gallery--custom-html-markup">
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
    data-my-size="1875x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)"
    target="_blank">Test 1</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-my-size="1669x2500"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)"
    target="_blank">Test 2</a
  >
  <a
    href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-my-size="2500x1666"
    data-thumb-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
    style="background-image:url(https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)"
    target="_blank">Test 3</a
  >
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

  #gallery--custom-html-markup a {
    width: 100px;
    height: 100px;

    background-size: cover;
    background-position: 50% 50%;

    text-indent: -300px;
    overflow: hidden;
  }
</style>
