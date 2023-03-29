<template>
  <div class="bmi px-2 pt-4">
    <h1>体重计算器</h1>
    <form @submit.prevent>
      <div class="d-flex">
        <label for="height">身高：</label>
        <input id="height" type="number" v-model="height" min="0" step="0.01" required />
        <span>cm</span>
      </div>
      <div class="d-flex">
        <label for="weight">体重：</label>
        <input id="weight" type="number" v-model="weight" min="0" step="0.01" required />
        <span>kg</span>
      </div>
      <button @click="calculateBMI">计算一下</button>
    </form>

    <div v-if="bmi" class="font-13 line-20 px-4">
      <p class="font-15 text-c">计算结果：{{ bmiData[typeBmi].tit }}</p>
      <p class="mt-2">{{ bmiData[typeBmi].sub }}</p>
      <p v-if="typeBmi" class="py-2">1.饮食建议：</p>
      <p v-for="(it, i) in bmiData[typeBmi].suggestion.diet" :key="i">{{ it }}</p>
      <p v-if="typeBmi" class="py-2">2.作息建议：</p>
      <p v-for="(it, i) in bmiData[typeBmi].suggestion.rest" :key="i">{{ it }}</p>
      <p v-if="typeBmi" class="py-2">3.运动建议：</p>
      <p v-for="(it, i) in bmiData[typeBmi].suggestion.sports" :key="i">{{ it }}</p>
      <p class="pt-2">{{ bmiData[typeBmi].end }}</p>
    </div>

    <div class="grey--text font-13 line-20 pa-4">
      注意：本计算采用BMI计算标准。BMI（Body Mas
      Index，身体质量指数）是一种通过体重和身高计算得出的指标，用于评估一个人是否处于健康体重范围内。然而，BMI计算也存在一些局限性和注意事项，包括：
      <br />
      <p class="pt-2">
        1.BMI不能区分肌肉和脂肪。肌肉比脂肪密度更大，因此在相同体重和身高的情况下，肌肉量更多的人可能会被归类为超重或肥胖。这种情况通常出现在运动员和健身人士身上。
      </p>
      <p class="pt-2">
        2.BMI不能区分体内脂肪的类型。腹部脂肪与其他部位脂肪不同，更易增加患糖尿病、高血压和心脏疾病的风险。因此，身体脂肪分布的位置也需要被考虑。
      </p>
      <p class="pt-2">
        3.年龄、性别和种族等因素会影响BMI的解读。例如，年龄较大的人可能会因为骨骼重量增加而被错误分类为超重或肥胖。
      </p>
      <p class="py-2">
        4.BMI只是一个指标，不能代表一个人的整体健康状况。其它的身体指标，如腰围、体脂率、肌肉量等，也需要被考虑。
      </p>

      综上所述，BMI是一个简单而便捷的健康指标，但它并不能完全反映人体健康状况。在计算BMI时，应该注意BMI的局限性，并结合其他健康指标进行综合评估。如果您有任何健康疑虑，最好咨询医生或其他医疗专业人员的意见。
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

const height = ref<number>(0)
const weight = ref<number>(0)
const bmi = ref<number>(0)
const typeBmi = ref<EnumBmi>(EnumBmi.NORMAL)

const calculateBMI = () => {
  if (height.value === 0 || weight.value === 0) {
    return
  }
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
// $bg-color: #eee;
$main-color: #f00808;

.bmi {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  min-height: 100vh;
  padding-top: 100rpx;
  // background-color: $bg-color;
  overflow-y: auto !important;

  h1 {
    font-size: 60rpx;
    margin-bottom: 20rpx;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding-top: 20rpx;

    input[type='number'] {
      border: 2rpx solid $main-color;
      border-radius: 10rpx;
      font-size: 32rpx;
      padding: 10rpx;
      margin-bottom: 20rpx;
      text-align: center;
      margin-right: 10rpx;
    }

    button {
      background-color: $main-color;
      color: #fff;
      border: none;
      font-size: 32rpx;
      padding: 5rpx 20rpx;
      margin-bottom: 20rpx;
      cursor: pointer;
    }
  }
}
</style>
