<template>
  <div class="home">
    <section class="home-page home-start">
      <h1 class="blog-author" title="LuoFatso">LuoFatso</h1>
      <p>道阻且长，行则将至</p>
    </section>

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
    
    <section class="home-page home-poem">
      <p class="font-18 title pb-4">
        <a href="/个人随笔/梦呓/追光者">《追光者》</a>
      </p>
      <pre>
        那些混沌颠倒
        是熬啊 是数啊
        满眼盈溢着的星光
        是憧憬 是过往
        期盼着过的时间里

        时间若鸿沟
        是从未感知
        从未拥有过的 温情

        其实早已悄然
        书写画描
        藏酝酵酿

        花开不待
        奇迹自然

        <p class="font-14 author">
          2023-2-23
          <a href="/about">LuoFatso</a>
        </p>
      </pre>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getRandom } from '../utils/util'
import oneDay2023 from '../关于生活/生活/components/OneDay/OneDay2023'

const oneDayArr = ref([])
const scrollWrapper = ref(null)
const translateX = ref(0)
const winH = window.innerHeight

const getOneDay = () => {
  for (let index = 0; index < 5; index++) {
    oneDayArr.value.push({
      key: `key-${index}`,
      one: oneDay2023[getRandom(oneDay2023.length)]
    })
  }
}

const handleScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop
  if (scrollY >= winH + 200 && scrollY <= 5 * winH - 400) {
    const newX = -(scrollY - winH - 260)
    translateX.value = newX > 0 ? 0 : newX
  }
}

onMounted(() => {
  getOneDay()
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="scss">
.VPHome {
  padding-bottom: 0 !important;
}
</style>
<style scoped lang="scss">
.vp-doc p {
  line-height: normal;
  margin: 0;
}
.vp-doc h2 {
  border: none;
}
.home {
  &-page {
    height: calc(100vh - 64px);
    box-sizing: border-box;
  }
  &-start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: no-repeat url('/bg.jpeg') center / cover;
    color: #fff;

    h1 {
      font-size: 48px;
      line-height: 64px;
      font-weight: 700;
      padding-bottom: 10px;

      filter: blur(10px);
      letter-spacing: -3rem;
      -webkit-text-stroke: 1px black;
      animation:
        glitch 1s 0.5s linear infinite,
        expand 1s forwards;
    }

    p {
      line-height: 2;
    }
  }

  &-point {
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

  &-poem {
    width: 65%;
    margin: 0 auto;
    /* text-indent: 2em; */
    // padding-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .author {
      padding-left: 30px;
      margin-top: -30px;
    }
    pre {
      margin-left: -25px;
    }
  }
}

.blog-author:before,
.blog-author:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.blog-author:before {
  animation: glitchTop 1s 0.5s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

.blog-author:after {
  animation: glitchBotom 1.5s 0.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes expand {
  to {
    letter-spacing: 0.4rem;
    filter: blur(0px);
  }
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }

  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }

  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(2px, -2px);
  }

  4%,
  60% {
    transform: translate(-2px, 2px);
  }

  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

@keyframes glitchBotom {
  2%,
  64% {
    transform: translate(-2px, 0);
  }

  4%,
  60% {
    transform: translate(-2px, 0);
  }

  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}
</style>
