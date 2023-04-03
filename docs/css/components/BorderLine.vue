<template>
  <div class="border-line box-center" v-if="show === 2">
    <div class="border-image-clip-path"></div>
  </div>
  <div class="hover-line d-flex" v-else-if="show === 3">
    <div>Hover Me</div>
    <div>Hover Me</div>
  </div>
  <div class="clip-path box-center" v-else-if="show === 4">
    <div>Hello</div>
  </div>
  <div class="rotate-line box-center" v-else-if="show === 5">
    <div class="conic"></div>
    <div class="conic conic-demo"></div>
  </div>
  <div class="border-line2 box-center" v-else-if="show === 6">
    <div class="gradient box-center">Hover Me</div>
    <div class="outline box-center">Hover Me</div>
  </div>
  <div class="rotate-line2 box-center" v-else-if="show === 7">
    <div class="border-radius"></div>
  </div>
</template>
<script setup lang='ts'>
withDefaults(defineProps<{ show: number }>(), { show: 2 })
</script>
<style lang='scss' scoped>
.border-line {
  height: 300px;
}

.border-image-clip-path {
  width: 200px;
  height: 100px;
  margin: auto;
  border: 10px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 10px);
  animation: huerotate 6s infinite linear;
  filter: hue-rotate(360deg);
}

@keyframes huerotate {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rorate(360deg);
  }
}

// hover line start
.hover-line {
  height: 400px;
  background-color: yellowgreen;

  div {
    position: relative;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    overflow: hidden;

    &::after {
      content: "Hover Me";
      position: absolute;
      top: 4px;
      bottom: 4px;
      right: 4px;
      left: 4px;
      line-height: 92px;
      font-size: 24px;
      background: #fff;
      // border-radius: 50%;
      border: 2px solid yellowgreen;
      cursor: pointer;
      color: yellowgreen;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: -20px;
      left: 0px;
      background: #fff;
      //border-radius: 50%;
      transform: rotateZ(-90deg) translate(-100%, -100%);
      transform-origin: top left;
      transition: transform .3s;
      transition-timing-function: linear;
    }

    &:hover {
      filter: contrast(1.2);
    }

    &:hover::before {
      transform: rotateZ(0deg) translate(0%, -0%);
    }
  }

  div:nth-child(2) {
    overflow: unset;

    &::after {
      content: "";
    }
  }

  div:nth-child(1):hover~div:nth-child(2)::before {
    transform: rotateZ(0deg) translate(0%, -0%);
  }
}

// hover line end

// clip-path start
.clip-path {
  height: 300px;

  div {
    position: relative;
    margin: auto;
    width: 120px;
    line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    transition: all .3s;
    cursor: pointer;

    &:hover {
      filter: contrast(1.1);
    }

    &:active {
      filter: contrast(0.9);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 2px solid gold;
      transition: all .5s;
      animation: clippath 3s infinite linear;
      border-radius: 10px;
    }

    &::after {
      animation: clippath 3s infinite -1.5s linear;
    }
  }

  @keyframes clippath {

    0%,
    100% {
      clip-path: inset(0 0 98% 0);
    }

    25% {
      clip-path: inset(0 98% 0 0);
    }

    50% {
      clip-path: inset(98% 0 0 0);
    }

    75% {
      clip-path: inset(0 0 0 98%);
    }
  }
}

// clip-path end

// rotate line start 
.rotate-line {
  background-color: #000;
  height: 350px;

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .conic {
    position: relative;
    z-index: 0;
    width: 400px;
    height: 200px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #1a232a;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: #000;
      border-radius: 5px;
    }
  }

  .conic-demo::after {
    animation: opacityChange 5s infinite linear;
  }

  @keyframes opacityChange {
    50% {
      opacity: .5;
    }

    100% {
      opacity: 1;
    }
  }
}

// rotate line end


// border-line2 start
.border-line2 {
  height: 300px;

  div {
    position: relative;
    width: 140px;
    height: 64px;
    margin: auto;
  }

  .gradient {
    background:
      linear-gradient(90deg, red 50%, transparent 0) repeat-x,
      linear-gradient(90deg, red 50%, transparent 0) repeat-x,
      linear-gradient(0deg, red 50%, transparent 0) repeat-y,
      linear-gradient(0deg, red 50%, transparent 0) repeat-y;
    background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;
    cursor: pointer;

    &:hover {
      animation: linearGradientMove .3s infinite linear;
    }
  }

  .outline {
    // border: 1px solid red;
    outline: 1px solid red;
    outline-offset: -1px;
    transition: all .3s linear;
    cursor: pointer;

    &:hover {
      // border: 1px solid transparent;
      outline: 1px solid transparent;
      background:
        linear-gradient(90deg, red 50%, transparent 0) repeat-x,
        linear-gradient(90deg, red 50%, transparent 0) repeat-x,
        linear-gradient(0deg, red 50%, transparent 0) repeat-y,
        linear-gradient(0deg, red 50%, transparent 0) repeat-y;
      background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
      background-position: 0 0, 0 100%, 0 0, 100% 0;
      animation: linearGradientMove .3s infinite linear;
    }
  }

  @keyframes linearGradientMove {
    100% {
      background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
    }
  }
}

// border-line2 end

// rotate-line2 start
.rotate-line2 {
  height: 300px;

  div {
    position: relative;
    width: 140px;
    height: 64px;
    margin: auto;
    border: 1px solid #03A9F3;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      transition: .3s ease-in-out;
    }

    &::before {
      top: -5px;
      left: -5px;
      border-top: 1px solid #03A9F3;
      border-left: 1px solid #03A9F3;
    }

    &::after {
      right: -5px;
      bottom: -5px;
      border-bottom: 1px solid #03A9F3;
      border-right: 1px solid #03A9F3;
    }

    &:hover::before,
    &:hover::after {
      width: calc(100% + 9px);
      height: calc(100% + 9px);
    }
  }

}

// rotate-line2 end
</style>


