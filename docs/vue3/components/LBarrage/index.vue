<template>
  <div class="box" ref="videoBox">
    <video ref="videoRef" autoplay muted loop  class="full">
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
      :full="isFullscreen"
    />
  </div>
  <div class="tool">
    <div class="py-5">
      <el-input v-model="text" style="width: 300px;" placeholder="发送新弹幕" clearable />
      <el-button type="primary" class="ml-2" @click="addBarrage(text, true)" >发送弹幕</el-button>
    </div>
    <el-button type="primary" @click="isBarrage = !isBarrage">
      {{ isBarrage ? '关闭该死的弹幕' : '想继续看弹幕' }}
    </el-button>
    <el-button type="primary" v-if="isBarrage" @click="isPause = !isPause">
      {{ isPause ? '继续开始弹幕' : '暂停一下弹幕' }}
    </el-button>
    <el-button type="primary" @click="videoMuted" >{{ muted ? '没有声音怎么能行' : '真该死，吵死了'}}</el-button>
    <el-button type="primary" @click="toggle">全屏播放</el-button>
   
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from 'vue'
import { useFullscreen } from '@vueuse/core'
import LBarrage from './LBarrage.vue'

const videoBox = ref<any>(null)
const videoRef = ref<any>(null)
const barrageRef = ref<any>(null)

const text = ref<string>('')
const muted = ref<boolean>(true)
const isPause = ref<boolean>(false)
const isBarrage = ref<boolean>(true)

const { isFullscreen, enter, exit, toggle } = useFullscreen(videoBox)

const videoMuted = () => {
  videoRef.value.muted = muted.value = !videoRef.value.muted
}

const addBarrage = (content: string, isSelf: boolean = false) => {
  if(!content.length) return
  if(isSelf) text.value = ''
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

  for (let index = 0; index < 500; index += 1) {
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
  video{
    position: relative;
    z-index: 1;
  }
}
</style>
