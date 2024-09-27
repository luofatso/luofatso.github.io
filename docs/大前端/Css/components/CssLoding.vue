<template>
  <div class="loading-box box-center" data-title="条形加载条" v-if="show === 1">
    <ul class="strip-loading">
      <li style="--line-index: 0"></li>
      <li style="--line-index: 1"></li>
      <li style="--line-index: 2"></li>
      <li style="--line-index: 3"></li>
      <li style="--line-index: 4"></li>
      <li style="--line-index: 5"></li>
    </ul>
  </div>
  <div class="loading2 box-center" v-else-if="show === 2">
    <div class="loader">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      <div class="bar12"></div>
    </div>
  </div>
  <div class="loading3 box-center" v-else-if="show === 3">
    <div class="loader">
      <div class="orbe" style="--index: 0"></div>
      <div class="orbe" style="--index: 1"></div>
      <div class="orbe" style="--index: 2"></div>
      <div class="orbe" style="--index: 3"></div>
      <div class="orbe" style="--index: 4"></div>
    </div>
  </div>
  <div class="loading4 box-center" v-else-if="show === 4">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>
<script setup lang='ts'>
withDefaults(defineProps<{ show: number }>(), { show: 1 })
</script>
<style lang='scss' scoped>
.loading-box {
  height: 300px;

  li {
    list-style: none;
  }

  .strip-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;

    li {
      --time: calc(var(--line-index) * 200ms);
      border-radius: 3px;
      width: 6px;
      height: 30px;
      background-color: #f66;
      animation: beat 1.5s ease-in-out var(--time) infinite;

      &+li {
        margin-left: 5px;
      }
    }
  }

  @keyframes beat {

    0%,
    100% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(0.5);
    }
  }

}

// 环形加载 start
.loading2 {
  height: 300px;

  .loader {
    position: absolute;
    width: 54px;
    height: 54px;
    margin: 0 40%;
    border-radius: 10px;
  }

  .loader div {
    width: 8%;
    height: 24%;
    background: rgb(128, 128, 128);
    position: absolute;
    left: 50%;
    top: 30%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: fade458 1s linear infinite;
  }

  @keyframes fade458 {
    from {
      opacity: 1;
    }

    to {
      opacity: 0.25;
    }
  }

  .loader .bar1 {
    transform: rotate(0deg) translate(0, -130%);
    animation-delay: 0s;
  }

  .loader .bar2 {
    transform: rotate(30deg) translate(0, -130%);
    animation-delay: -1.1s;
  }

  .loader .bar3 {
    transform: rotate(60deg) translate(0, -130%);
    animation-delay: -1s;
  }

  .loader .bar4 {
    transform: rotate(90deg) translate(0, -130%);
    animation-delay: -0.9s;
  }

  .loader .bar5 {
    transform: rotate(120deg) translate(0, -130%);
    animation-delay: -0.8s;
  }

  .loader .bar6 {
    transform: rotate(150deg) translate(0, -130%);
    animation-delay: -0.7s;
  }

  .loader .bar7 {
    transform: rotate(180deg) translate(0, -130%);
    animation-delay: -0.6s;
  }

  .loader .bar8 {
    transform: rotate(210deg) translate(0, -130%);
    animation-delay: -0.5s;
  }

  .loader .bar9 {
    transform: rotate(240deg) translate(0, -130%);
    animation-delay: -0.4s;
  }

  .loader .bar10 {
    transform: rotate(270deg) translate(0, -130%);
    animation-delay: -0.3s;
  }

  .loader .bar11 {
    transform: rotate(300deg) translate(0, -130%);
    animation-delay: -0.2s;
  }

  .loader .bar12 {
    transform: rotate(330deg) translate(0, -130%);
    animation-delay: -0.1s;
  }
}

// 环形加载 end

// 环形加载2 start
.loading3 {
  height: 300px;

  .loader {
    --size-loader: 50px;
    --size-orbe: 10px;
    width: var(--size-loader);
    height: var(--size-loader);
    position: relative;
    transform: rotate(45deg);
  }

  .orbe {
    position: absolute;
    width: 100%;
    height: 100%;
    --delay: calc(var(--index) * 0.1s);
    animation: orbit7456 ease-in-out 1.5s var(--delay) infinite;
    opacity: calc(1 - calc(0.2 * var(--index)));
  }

  .orbe::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: var(--size-orbe);
    height: var(--size-orbe);
    background-color: #3ae374;
    box-shadow: 0px 0px 20px 2px #3ae374;
    border-radius: 50%;
  }

  @keyframes orbit7456 {
    0% {}

    80% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}

// 环形加载2 end

// antd loading start

.loading4 {
  height: 300px;

  .loader {
    --dim: 3rem;
    width: var(--dim);
    height: var(--dim);
    position: relative;
    animation: spin988 2s linear infinite;
  }

  .loader .circle {
    --color: red;
    --dim: 1.2rem;
    width: var(--dim);
    height: var(--dim);
    background-color: var(--color);
    border-radius: 50%;
    position: absolute;
  }

  .loader .circle:nth-child(1) {
    top: 0;
    left: 0;
  }

  .loader .circle:nth-child(2) {
    top: 0;
    right: 0;
  }

  .loader .circle:nth-child(3) {
    bottom: 0;
    left: 0;
  }

  .loader .circle:nth-child(4) {
    bottom: 0;
    right: 0;
  }

  @keyframes spin988 {
    0% {
      transform: scale(1) rotate(0);
    }

    20%,
    25% {
      transform: scale(1.3) rotate(90deg);
    }

    45%,
    50% {
      transform: scale(1) rotate(180deg);
    }

    70%,
    75% {
      transform: scale(1.3) rotate(270deg);
    }

    95%,
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
}

// antd loading end
</style>
