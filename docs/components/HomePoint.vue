<template>
  <section class="home-page home-point">
    <div class="sticky-container">
      <div
        class="scroll-wrapper"
        ref="scrollWrapper"
        :style="{ transform: `translate3d(${translateX}px, 0, 0)` }"
      >
        <div
          v-for="(it, i) in oneDayArr"
          :key="it.key"
          class="scroll-item img-bg"
          :style="{ backgroundImage: `url('/home/one${++i}.jpg')` }"
        >
          <div class="scroll-item-text box-center">{{ it.one }}</div>
        </div>
      </div>
      <div class="bg box-center">
        <h2 class="pa-0 ma-0">
          <a href="/关于生活/生活/每日一点">一点</a>
        </h2>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getRandom } from '../utils/util'
import oneDay2023 from '../关于生活/生活/components/OneDay/OneDay2023'
import oneDay2024 from '../关于生活/生活/components/OneDay/OneDay2024'

const OneDayAll = [...oneDay2024.reverse(), ...oneDay2023.reverse()]

const oneDayArr = ref([])
const scrollWrapper = ref(null)
const translateX = ref(0)
const winH = ref(0)

const getOneDay = () => {
  for (let index = 0; index < 5; index++) {
    oneDayArr.value.push({
      key: `key-${index}`,
      one: OneDayAll[getRandom(OneDayAll.length)]
    })
  }
}

const handleScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop
  if (scrollY >= winH.value + 200 && scrollY <= 5 * winH.value - 400) {
    const newX = -(scrollY - winH.value - 260)
    translateX.value = newX > 0 ? 0 : newX
  }
}

onMounted(() => {
  winH.value = window.innerHeight
  getOneDay()
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped lang="scss">
.vp-doc p {
  line-height: normal;
  margin: 0;
}
.vp-doc h2 {
  border: none;
}
.home-page {
  height: calc(100vh - 64px);
  box-sizing: border-box;
}
.home-point {
  background-color: #232323;
  width: 100%;
  height: 500vh !important;
  position: relative;
  .sticky-container {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .scroll-wrapper {
      flex-shrink: 0;
      width: auto;
      display: inline-flex;
      align-items: center;
      will-change: transform;
      padding: 0 200px;
      gap: 200px;
      .scroll-item {
        width: 35vw;
        height: 22vw;
        // background-color: #fff;
        min-width: 500px;
        min-height: 314px;
        max-width: 650px;
        max-height: 408px;
        position: relative;
        &-text {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 50px;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.2);
          color: #fff;
        }
      }
    }
  }
  .bg {
    background-color: #eee;
    position: absolute;
    width: 30.208333vw;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    min-width: 400px;
    max-width: 550px;
    z-index: -1;
    border-radius: 100%;
    display: flex;
    &::before {
      content: '';
      padding-top: 100%;
    }
  }
}
</style>
