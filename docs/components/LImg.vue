<template>
  <div ref="galleryRef" :class="['l-img-wrapper', wrapperClass]">
    <a
      :href="src"
      :data-pswp-width="pswpWidth"
      :data-pswp-height="pswpHeight"
      :class="['l-img-link', linkClass]"
    >
      <img :src="src" :alt="alt" :class="imgClass" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  width?: number
  height?: number
  imgClass?: string
  linkClass?: string
  wrapperClass?: string
}>(), {
  alt: '',
  width: 1920,
  height: 1080,
  imgClass: '',
  linkClass: '',
  wrapperClass: ''
})

const pswpWidth = props.width
const pswpHeight = props.height
const galleryRef = ref<HTMLElement | null>(null)
let lightbox: PhotoSwipeLightbox | null = null

onMounted(() => {
  if (!galleryRef.value) return

  lightbox = new PhotoSwipeLightbox({
    gallery: galleryRef.value,
    children: 'a',
    pswpModule: () => import('photoswipe'),
    bgOpacity: 0.85,
    padding: { top: 30, bottom: 30, left: 30, right: 30 }
  })
  lightbox.init()
})

onUnmounted(() => {
  lightbox?.destroy()
})
</script>

<style>
.l-img-link {
  cursor: zoom-in;
  display: block;
}
.l-img-link img {
  display: block;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.l-img-link:hover img {
  transform: scale(1.03);
}
</style>
