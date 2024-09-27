<template>
  <div ref="centerBg" class="centerBg">
    <!-- mask -->
    <div v-if="len" class="mask">
      <div class="grid" :style="{ gridTemplateColumns: `repeat(${col}, 1fr)` }">
        <div v-for="index in row * col" :key="index" class="col" :style="
            getCellStyle(
              Math.floor((index - 1) / col) + 1,
              ((index - 1) % col) + 1
            )
          " />
      </div>
    </div>
    <!-- title -->
    <div class="title" title="娃哈哈">
      娃哈哈
    </div>
  </div>
</template>

<script setup>
  import { onMounted,ref } from 'vue';
const centerBg = ref(null);
const row = ref(0);
const col = ref(0);
const len = ref(0);

// 定义网格样式
const getCellStyle = (rowIndex, colIndex) => {
  return {
    width: `${len.value}px`,
    transition: `opacity ${100 + Math.random() * 500}ms ${
      ((colIndex + rowIndex / 2) / 20) * Math.random() * 500
    }ms`
  };
};

// 初始化网格
const initGrid = () => {
  const imageWidth = window.innerWidth;
  const imageHeight = window.innerHeight;
  const maxGridCount =
    window.innerWidth > 1920
      ? 1000
      : window.innerWidth > 1080
      ? 600
      : window.innerWidth > 640
      ? 400
      : 100;
  len.value = Math.min(imageWidth, imageHeight) / Math.sqrt(maxGridCount);
  col.value = Math.ceil(imageWidth / len.value);
  row.value = Math.ceil(imageHeight / len.value);
};

// 图片加载完成后
const bgLoad = () => {
  const url = getComputedStyle(centerBg.value).getPropertyValue('--img');
  const urlMatch = url.match(/url\(['"]?([^'"]+)['"]?\)/)[1];
  const image = new Image();
  image.src = urlMatch;
  image.onload = () => {
    setTimeout(() => {
      centerBg.value.style.setProperty('--o', 0);
      setTimeout(() => {
        len.value = 0;
      }, 2000);
    }, 800);
  }
};

initGrid();

onMounted(() => {
  bgLoad();
});
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  .centerBg {
    height: 400px;
    --o: 1;
    --img: url('http://pic.616pic.com/bg_w1180/00/03/57/voXsmWh7He.jpg!/fw/1120');

    background: var(--img) center center/cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    /* css原生嵌套语法 */
    & .grid {
      display: grid;
    }

    & .col {
      background: white;
      opacity: var(--o);
      aspect-ratio: 1 / 1;
    }
  }

  .mask {
    position: absolute;
    inset: 0;
  }

  .title {
    filter: blur(10px);
    letter-spacing: -3rem;
    color: white;
    font-size: 3.75rem;
    font-weight: 800;
    line-height: 1;
    -webkit-text-stroke: 1px black;
    animation:
      glitch 1s 0.5s linear infinite,
      expand 1s forwards;
  }

  .title:before,
  .title:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  .title:before {
    animation: glitchTop 1s 0.5s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  .title:after {
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