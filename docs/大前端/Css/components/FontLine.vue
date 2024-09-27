<template>
  <div class="font-line">
    我是渐变色的文字
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.font-line {
  padding-top: 50px;
  height: 120px;
  line-height: 100%;
  font-size: 60px;
  background-image: linear-gradient(135deg, red, blue);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
