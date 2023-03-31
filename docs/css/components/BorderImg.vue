<template>
  <div class="box box-center">
    <div class="skulls"></div>
  </div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped>
.box {
  height: 300px;

  .skulls {
    position: relative;
    width: 260px;
    height: 150px;
    margin: auto;
    border: 24px solid;
    border-image: url(../img/border-img.svg);
    border-image-slice: 32;
    border-image-repeat: round;
  }
}
</style>
