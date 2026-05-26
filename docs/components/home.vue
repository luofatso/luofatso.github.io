<template>
  <main class="home">
    <HomeStart />
    <HomeBabyMusic />
    <HomePoint />
    <HomePoem />
  </main>
</template>
<script setup>
import HomeStart from './HomeStart.vue'
import HomePoint from './HomePoint.vue'
import HomePoem from './HomePoem.vue'
import HomeBabyMusic from './HomeBabyMusic.vue'
</script>
<style lang="scss">
.VPHome {
  padding-bottom: 0 !important;
}
</style>
