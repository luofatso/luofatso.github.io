<template>
  <div :id="id"></div>
</template>
<script setup lang='ts'>
withDefaults(defineProps<{id: string}>(), {})
</script>
<style lang='scss' scoped>
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}

#triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
}

#triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 100px solid red;
}

#triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 100px solid red;
}

#triangle-top-left {
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-right: 100px solid transparent;
}

#triangle-top-right {
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-left: 100px solid transparent;
}

#triangle-bottom-left {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-right: 100px solid transparent;
}

#triangle-bottom-right {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
}

</style>
