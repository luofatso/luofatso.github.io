<template>
  <div class="important d-flex flex-column box-center">
    <div v-for="it in importantDay" :key="it.key">
      <div v-if="it.diff">
        距离<span class="font-700">{{ it.key }}</span
        >还有
        <span class="font-700 primary--text mx-1 font-20">{{ it.diff }}</span>
        天
      </div>
      <div v-else>
        今天<span class="font-700 primary--text mx-1">{{ it.key }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import importantDay from './important'
</script>
<style lang="scss" scoped>
.important{
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
}
</style>
