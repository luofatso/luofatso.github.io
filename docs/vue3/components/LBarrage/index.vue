<template>
  <div class="box">
    <video ref="videoRef" controls autoplay muted loop class="full">
      <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <LBarrage
      ref="barrageRef"
      :arr="[]"
      :isPause="isPause"
      :percent="80"
      class="full"
      v-if="isBarrage"
    />
  </div>
  <div class="tool">
    <button @click="isBarrage = !isBarrage">{{ isBarrage ? '关闭弹幕' : '开启弹幕' }}</button>
    <button v-if="isBarrage" @click="isPause = !isPause">
      {{ isPause ? '开始弹幕' : '暂停弹幕' }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from 'vue'
import LBarrage from './LBarrage.vue'

const videoRef = ref<any>(null)
const barrageRef = ref<any>(null)

const isPause = ref<boolean>(false)
const isBarrage = ref<boolean>(true)

const addBarrage = (content: string, isSelf: boolean = false) => {
  barrageRef.value?.addBarrage({
    content,
    message: content,
    senderId: isSelf ? 1 : 2,
  })
}

const getRandom = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * (max - min)) + min
}

// 初始化模拟弹幕数据
const initBarrageData = () => {
  const barrageMock = [
    '今夕何夕，见此良人😜',
    '盈盈一水间，脉脉不得语',
    '折芦花赠远，零落一身秋🤣',
    '曾经沧海难为水，除却巫山不是云',
    '欲买桂花同载酒，终不似，少年游😂',
    '人生无根蒂，飘如陌上尘😄',
    '何当共剪西窗烛，却话巴山夜雨时',
    '人面不知何处去，桃花依旧笑春风😄',
  ]

  for (let index = 0; index < 100; index += 1) {
    addBarrage(`${barrageMock[getRandom(8)]} = ${index}`)
  }
}

watch(isBarrage, (val) => {
  if (val) {
    setTimeout(() => {
      initBarrageData()
      isPause.value = false
    }, 0)
  }
})

onMounted(() => {
  videoRef.value?.play()
  initBarrageData()
})
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  width: 100%;
  height: 390px;
}
</style>
