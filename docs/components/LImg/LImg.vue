<template>
  <div v-if="imgs.length" class="d-flex flex-wrap pt-4 img-box"
    :class="imgs.length == 1 ? 'justify-center' : 'justify-between'">
    <div class="mb-1 img-box-item" v-for="(it, i) in imgs" :key="i" :class="'imgs' + (imgs.length < 3 ? imgs.length : 3)"
      @click="openImg(it)" :style="{ flex: imgs.length === 1 ? '0 0 ' + width + '%' : '' }">
      <img class="w100" :src="'/blog'+it.src" :alt='it.title' :title='it.title'>
    </div>
  </div>
  <p class="img-intr text-c font-12" v-if="intr && intr.length">{{ intr }}</p>
  <div class="mask-bg" v-show="isShow" :class="{ open: isShow }" @click="isShow = false"></div>
</template>
<script setup lang='ts'>

import { ref } from 'vue'

interface IImgItem {
  src: string,
  title: string
}

withDefaults(defineProps<{ imgs: IImgItem[], intr?: string, width?: string }>(), {})

const maskImg = ref('')
const isShow = ref(false)

const openImg = (it: IImgItem) => {
  // isShow.value = true
  maskImg.value = it.src
}
</script>
<style lang='scss' scoped>
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
    ;
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

.mask-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity .3s;
  will-change: opacity;

  opacity: 0;
  z-index: 9999;
  background: #fff;

  &.open {
    opacity: .7;
    cursor: zoom-out;
  }
}

.mask-img {
  cursor: pointer;
  cursor: zoom-in;
  z-index: 9999;
  transition: transform .3s cubic-bezier(.2, 0, .2, 1) !important;

  .open {
    cursor: zoom-out;
    will-change: transform;
  }
}</style>
