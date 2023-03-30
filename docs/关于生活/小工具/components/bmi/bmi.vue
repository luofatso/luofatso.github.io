<template>
  <div class="bmi px-2 pt-6 pb-6 d-flex flex-column align-center">
    <form @submit.prevent class="pt-5 box-center flex-column">
      <div class="d-flex align-center justify-center mb-5">
        <label for="height">身高：</label>
        <input id="height" type="number" placeholder="请输入身高" v-model="height" min="0" step="0.1" required />
        <span>cm</span>
      </div>
      <div class="d-flex align-center justify-center mb-5">
        <label for="weight">体重：</label>
        <input id="weight" type="number" placeholder="请输入体重" v-model="weight" min="0" step="0.01" required />
        <span>kg</span>
      </div>
      <button @click="calculateBMI">计算一下</button>
    </form>

    <div v-if="bmi" class="font-13 line-20 px-4">
      <p class="font-15 text-c" :class="typeBmi">计算结果：{{ bmiData[typeBmi].tit }}</p>
      <p class="mt-2">{{ bmiData[typeBmi].sub }}</p>
      <p v-if="typeBmi" class="py-2 font-14">1.饮食建议：</p>
      <p v-for="(it, i) in bmiData[typeBmi].suggestion.diet" :key="i">{{ it }}</p>
      <p v-if="typeBmi" class="py-2 font-14">2.作息建议：</p>
      <p v-for="(it, i) in bmiData[typeBmi].suggestion.rest" :key="i">{{ it }}</p>
      <p v-if="typeBmi" class="py-2 font-14">3.运动建议：</p>
      <p v-for="(it, i) in bmiData[typeBmi].suggestion.sports" :key="i">{{ it }}</p>
      <p class="pt-2">{{ bmiData[typeBmi].end }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import bmiData from './bmiData'

const enum EnumBmi {
  THIN = 'THIN',
  NORMAL = 'NORMAL',
  OVERWEIGHT = 'OVERWEIGHT',
  FAT = 'FAT'
}

const height = ref<number>(175)
const weight = ref<number>(65)
const bmi = ref<number>(0)
const typeBmi = ref<EnumBmi>(EnumBmi.NORMAL)

const calculateBMI = () => {
  if (height.value <= 0 && weight.value <= 0) return
  const h = height.value / 100 // 转换为米
  const w = weight.value
  bmi.value = w / (h * h)
  if (bmi.value < 18.5) {
    typeBmi.value = EnumBmi.THIN
  } else if (bmi.value < 24) {
    typeBmi.value = EnumBmi.NORMAL
  } else if (bmi.value < 28) {
    typeBmi.value = EnumBmi.OVERWEIGHT
  } else {
    typeBmi.value = EnumBmi.FAT
  }
}
</script>

<style lang="scss" scoped>
.vp-doc p, .vp-doc summary{
  margin: 0;
}
.THIN{
  color: var(--c-green);
}
.NORMAL{
  color: var(--c-blue);
}
.OVERWEIGHT{
  color: var(--c-yellow);
}
.FAT{
  color: var(--c-red);
}
.bmi {
  padding-top: 100px;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 auto;

  form {
    input[type='number'] {
      width: 75%;
      height: 50px;
      border: 2px solid var(--c-blue);
      border-radius: 10px;
      font-size: 24px;
      // background-color: #fff;
      text-align: center;
      margin-right: 10px;
      &:hover,&:active,&:focus{
        border-color: var(--c-blue-light);
      }
    }

    button {
      width: 50%;
      height: 50px;
      background-color: var(--c-blue);
      color: #fff;
      border: none;
      font-size: 18px;
      padding: 5px 20px;
      margin-bottom: 20px;
      cursor: pointer;
      border-radius: 10px;
      &:hover,&:active{
        background-color: var(--c-blue-light);
      }
    }
  }
}
</style>
