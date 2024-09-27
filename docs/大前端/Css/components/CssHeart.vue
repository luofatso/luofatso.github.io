<template>
  <div class="box box-center">
    <div class="heart-shape"></div>
  </div>
  <!-- <div class="box box-center">
    <div class="heart"></div>
  </div> -->
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped>
.box {
  height: 300px;
}

.heart-shape {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);

  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    background-color: red;
    content: "";
  }

  &::before {
    transform: translateX(-50%);
    // background-color: #fee;
  }

  &::after {
    transform: translateY(-50%);
    // background-color: #999;
  }
}


.heart {
  position: relative;
  width: 100px;
  height: 90px;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background-color: red;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
</style>
