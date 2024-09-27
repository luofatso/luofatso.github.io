<script setup lang="ts">
import { ref } from 'vue'

const one = ref()
const two = ref()

const rendom = (max: number, min: number = 1) => ~~(Math.random() * (max - min)) + min

const getArr = (max: number, len: number, arr: number[] = []) => {
  while (arr.length < len) {
    const num = rendom(max)
    !arr.includes(num) && arr.push(num)
  }
  return arr.sort((a, b) => a - b)
}

const getRendom = (i: number = 1) => {
  i === 1 ? one.value = [...getArr(33, 6), rendom(16)] : two.value = [...getArr(35, 5), ...getArr(12, 2)]
}
</script>

<template>
  <div class="get">
    <p>随机的双大乐透：{{ one }}</p>
    <button @click="getRendom()">随机一个大乐透</button>
    <p>随机的双色球：{{ two }}</p>
    <button @click="getRendom(2)">随机一个双色球</button>
    <p>纯属娱乐，谨慎使用</p>
  </div>
</template>


<style scoped lang="scss">
.get {
  display: flex;
  flex-flow: column wrap;
  button {
    display: inline-block;
    width: 120px;
    height: 45px;
    color: #fff;
    background-color: var(--c-green);
    cursor: pointer;
    &:hover,&:active{
      background-color: var(--c-green-light);
    }
  }
}
</style>