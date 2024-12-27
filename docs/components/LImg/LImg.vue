<template>
  <div
    v-if="data?.length"
    class="d-flex flex-wrap pt-4 img-box"
    :class="data.length == 1 ? 'justify-center' : 'justify-between'"
    :id="gallery"
  >
    <a
      class="mb-1 img-box-item"
      v-for="(it, i) in data"
      :key="it.src"
      :class="'imgs' + (data.length < 3 ? data.length : 3)"
      :style="{ flex: data.length === 1 ? '0 0 ' + width + '%' : '' }"
      target="_blank"
      rel="noreferrer"
      :href="it.src"
      :data-src="it.src"
      :data-pswp-width="it.width"
      :data-pswp-height="it.height"
    >
      <img class="w100" :src="it.src" :alt="it.title" :title="it.title" />
    </a>
  </div>
  <p class="img-intr text-c font-12" v-if="intr && intr.length">{{ intr }}</p>
</template>
<script setup lang="ts">
import { onMounted, ref, onUnmounted, toRef } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { getRandom } from '../../utils/util'

interface IImgItem {
  src: string
  title: string
  width?: number
  height?: number
}

const props = withDefaults(defineProps<{ imgs: IImgItem[]; intr?: string; width?: string }>(), {})
const data = toRef(props.imgs)

const gallery = ref('gallery' + Date.now() + getRandom(100))

const openImage = (index: number) => {
  if (lightbox.value) {
    lightbox.value.loadAndOpen(index)
  }
}

onMounted(() => {
  // 动态获取图片宽高
  data.value.forEach((img) => {
    const image = new Image()
    image.src = img.src
    image.onload = () => {
      img.width = image.width
      img.height = image.height
    }
  })

  if (!lightbox.value) initPhotoSwipe()
  if (!lightbox.value) initPhotoSwipe()
})

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})

const lightbox = ref<PhotoSwipeLightbox | null>(null)
const initPhotoSwipe = () => {
  lightbox.value = new PhotoSwipeLightbox({
    gallery: '#' + gallery.value,
    children: 'a',
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 1, // 限制缩小的比例
    maxZoomLevel: 2, // 最大放大倍数
    pswpModule: () => import('photoswipe')
  })
  lightbox.value.on('uiRegister', function () {
    lightbox.value &&
      lightbox.value?.pswp?.ui?.registerElement({
        name: 'download-button',
        order: 8,
        isButton: true,
        tagName: 'a',

        // SVG with outline
        html: {
          isCustomSVG: true,
          inner:
            '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
          outlineID: 'pswp__icn-download'
        },

        // Or provide full svg:
        // html: '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="pswp__icn"><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" /></svg>',

        // Or provide any other markup:
        // html: '<i class="fa-solid fa-download"></i>'

        onInit: (el: any, pswp: any) => {
          const currentDate = new Date()
          const year = currentDate.getFullYear()
          const month = currentDate.getMonth() + 1
          const day = currentDate.getDate()
          el.setAttribute('download', `luofatso-${year}${month}${day}-${currentDate.getTime()}.png`)
          el.setAttribute('target', '_blank')
          el.setAttribute('rel', 'noopener')

          pswp.on('change', () => {
            el.href = pswp.currSlide.data.src
          })
        }
      })
  })
  lightbox.value.init()
}
</script>
<style lang="scss" scoped>
.img-intr {
  color: #999;
  margin: 10px 0 16px;
}
.img-box {
  .imgs1 {
    flex: 0 0 65%;
  }

  .imgs2 {
    flex: 0 0 49%;
  }

  .imgs3 {
    flex: 0 0 33%;
  }

  .imgs2,
  .imgs3 {
    border: 1px solid rgba(82, 82, 89, 0.32);
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 959px) {
  .img-box {
    .imgs1,
    .imgs2,
    .imgs3 {
      img {
        cursor: zoom-in;
      }

      flex: 0 0 100% !important;
    }

    &-item {
      border: none !important;
    }
  }
}

:deep(.pswp__img) {
  object-fit: contain !important; /* 确保图片保持比例，不拉伸 */
  max-width: 100%;
  max-height: 100%;
}
</style>
