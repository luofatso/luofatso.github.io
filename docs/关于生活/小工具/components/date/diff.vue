<template>
  <div class="diff px-2 pt-6 pb-6 d-flex flex-column align-center">
    <form @submit.prevent class="pt-5 box-center flex-column">
      <div class="d-flex align-center justify-center mb-5">
        <label for="height">开始时间：</label>
        <input id="height" v-model="startTime" placeholder="请输入时间" />
        <!-- <span>cm</span> -->
      </div>
      <div class="d-flex align-center justify-center mb-5">
        <label for="weight">结束时间：</label>
        <input id="weight" placeholder="请输入时间" v-model="endTime" />
        <!-- <span>kg</span> -->
      </div>
      <div class="d-flex align-center justify-center">
        <label style="visibility: hidden;">结束时间：</label>
        <button @click="calculateBMI">计算一下</button>
      </div>
    </form>

    <div v-if="diff" class="font-18 line-20 px-4 primary--text">相差{{ Math.abs(diff) }}天</div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'


const startTime = ref<string>(dayjs().format('YYYY-MM-DD'))
const endTime = ref<string>('')
const diff = ref<number>()

const calculateBMI = () => {
  const ymd = /\d{4}-\d{2}-\d{2}/
  if(ymd.test(startTime.value) && ymd.test(endTime.value)){
    diff.value = dayjs(startTime.value).diff(dayjs(endTime.value), 'day')
  } else {
    alert('格式不正确，例:2000-01-01')
  }
  
}
</script>

<style lang="scss" scoped>
.diff {
  padding-top: 100px;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 auto;

  form {
    input {
      width: 200px !important;
      height: 50px;
      border: 2px solid var(--c-blue);
      border-radius: 10px;
      font-size: 24px;
      // background-color: #fff;
      text-align: center;
      margin-right: 10px;

      &:hover,
      &:active,
      &:focus {
        border-color: var(--c-blue-light) !important;
      }
    }

    button {
      width: 200px;
      height: 50px;
      background-color: var(--c-blue);
      color: #fff;
      font-size: 18px;
      padding: 5px 20px;
      margin-bottom: 20px;
      cursor: pointer;
      border-radius: 10px;
      border: 2px solid var(--c-blue);
      margin-left: -10px;
      &:hover,
      &:active {
        background-color: var(--c-blue-light);
      }
    }
  }
}</style>
