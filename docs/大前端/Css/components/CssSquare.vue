<template>
  <div class="box">
    <div class="square1">
      <span>固定宽高</span>
    </div>
    <div class="square2">
      <span>内边距</span>
    </div>
    <div class="square3">
      <span>aspect-ratio</span>
    </div>
    <div class="square4">
      <span>vw</span>
    </div>
    <div class="square5">
      <span>flex</span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  span {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }

  div {
    position: relative;
  }

  .square1 {
    width: 200px;
    height: 200px;
    background-color: #3b8eed;
  }

  .square2 {
    width: 200px;
    background-color: #549ced;
  }

  .square2::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .square3 {
    width: 200px;
    aspect-ratio: 1 / 1;
    background-color: #50a2ff;
  }

  .square4 {
    width: 10vw;
    height: 10vw;
    background-color: #3468a3;
  }
  .square5 {
    width: 200px;
    display: flex;
    background-color: #255489;
  }
  .square5::after {
    content: '';
    padding-top: 100%;
  }
}
</style>
