<template>
  <section class="barrage-wrapper" ref="barrageWrapperRef" :style="{ height: percent + '%' }">
    <div class="barrage-main">
      <div
        class="barrage-main-box"
        :class="{ 'ani-pause': isPause, 'ani-running': !isPause }"
        ref="barrageMainBoxRef"
      >
        <template v-for="item in domPool">
          <div
            v-for="it in item"
            :key="it.id"
            class="barrage-item"
            :class="{ 'self-dm': it.isSelf, 'barrage-img': it.actionType.length }"
            :ref="setItemRef"
            :style="{
              transform: `translate3d(${barMainWidth}px,0,0)`,
              top: `${it.row * (200 / CHANNEL_COUNT)}px`,
              animation: it.animation ? 'barrage-run 6s linear' : '',
            }"
            @animationend="barrageAnimationEnd(it.row, it.col)"
          >
            <template v-if="it.actionType?.length">
              <div class="ani-box">这里是其他动画礼物之类的，有机会在搞</div>
              <!-- <l-avatar :avatar="it.avatar" :size="30" c/lass="ml-10" /> -->
            </template>
            <span v-else>{{ it.text }}</span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts" name="LBarrage">
// import { Vue3Lottie } from 'vue3-lottie'
// import 'vue3-lottie/dist/style.css'
// import { useAppStore } from '@/store'
// import getChatActionHooks from '@/hooks/getChatActionHooks'
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

type Props = {
  full: boolean // 视频是否全屏
  arr: any // 弹幕源数组
  isPause: boolean // 弹幕是否暂停状态
  percent?: number // 弹幕占比
}

type BarrageType = {
  id: string
  row: number
  col: number
  isUse: boolean
  isFree: boolean
  text: string
  isSelf: boolean
  actionType: string
  avatar: string
  animation: boolean
}

// const appStore = useAppStore()
const props = withDefaults(defineProps<Props>(), {
  percent: 80,
  full: false,
})

const CHANNEL_COUNT = 5 // 行数
const MAX_DM_COUNT = 10 // 每行弹幕数最大值
const INTER_VAL_TIME = 100 // 取弹幕时间间隔
// const USER_ID = appStore.userInfo.id
const USER_ID = 1

const barrageWrapperRef = ref<any>(null)
const barrages = ref<any>([]) // 弹幕数组
const intervalDM = ref<any>(null) // intervalDM
const hasPosition = ref<any>([]) // 滚动弹幕的通道
const domPool = ref<BarrageType[][]>([]) // dom池
const barrageMainBoxRef = ref<any>(null) // 弹幕容器
const barMainWidth = ref(barrageWrapperRef.value?.offsetWidth ?? 750) // 弹幕容器宽度

// const { isLove, animationGood, animationLove } = getChatActionHooks()

const itemRefs: any = []
const setItemRef = (el: any) => {
  if (el) itemRefs.push(el)
}

// 动画结束 恢复dom原本数据
const barrageAnimationEnd = (row: number, col: number) => {
  const thatBarrage = domPool.value[row][col]

  if (thatBarrage) {
    thatBarrage.animation = false
    thatBarrage.isSelf = false
    thatBarrage.isFree = false
    thatBarrage.actionType = ''
    thatBarrage.avatar = ''
  }
}

const init = () => {
  // 初始化一些DOM 重复利用这些DOM
  for (let j = 0; j < CHANNEL_COUNT; j += 1) {
    const doms: BarrageType[] = []
    hasPosition.value[j] = true // hasPosition 标记每个通道目前是否有位置
    for (let i = 0; i < MAX_DM_COUNT; i += 1) {
      // 放入该通道的DOM池
      doms.push({
        id: `${j}-${i}`,
        row: j,
        col: i,
        isUse: false,
        isFree: false,
        text: '',
        actionType: '',
        avatar: '',
        isSelf: false,
        animation: false,
      })
    }
    domPool.value.push(doms)
  }
}

// 获取一个可以发射弹幕的通道 没有则返回-1
const getChannel = () => {
  for (let i = 0; i < CHANNEL_COUNT; i += 1) {
    if (hasPosition.value[i] && domPool.value[i].length) return i
  }
  return -1
}

// 根据DOM和弹幕信息 发射弹幕
const shootBarrage = (domItem: BarrageType, dmItem: any, channel: number) => {
  hasPosition.value[channel] = false

  const { sender = null, isSelf, content, actionType = '' } = dmItem
  const thatBarrage = domPool.value[domItem.row][domItem.col]

  // 设置当前通道为false
  thatBarrage.isFree = true
  thatBarrage.avatar = sender?.avatar || ''
  thatBarrage.actionType = actionType
  thatBarrage.isSelf = isSelf
  thatBarrage.text = content
  thatBarrage.animation = true

  // 弹幕全部显示之后 才能开始下一条弹幕
  // 大概 dom.clientWidth * 10 的时间 该条弹幕就从右边全部划出到可见区域 再加1秒保证弹幕之间距离
  setTimeout(() => {
    hasPosition.value[channel] = true
  }, (itemRefs[domItem.col + domItem.row * CHANNEL_COUNT]?.clientWidth || 100) * 10 + 1000)
}

// 获取空闲通道中空闲的dom
const getFreeChannelDom = (channel: number) => {
  return domPool.value[channel].find((it: any) => !it.isFree)
}

// 暂停弹幕
const pauseBarrage = () => {
  if (intervalDM.value) {
    clearInterval(intervalDM.value)
    intervalDM.value = null
  }
}

// 播放弹幕
const playBarrage = () => {
  // 每隔1ms从弹幕池里获取弹幕（如果有的话）并发射
  intervalDM.value = setInterval(() => {
    // 更新逻辑
    if (barrages.value.length > 0) {
      let channel
      const barrage = barrages.value.shift()
      if (barrage.direction === 'default' && (channel = getChannel()) !== -1) {
        const domItem = getFreeChannelDom(channel)
        if (domItem) {
          shootBarrage(domItem, barrage, channel)
        } else {
          barrages.value.unshift(barrage)
        }
      } else {
        barrages.value.unshift(barrage)
      }
    }
  }, INTER_VAL_TIME)
}

// const visibilitychangeFn = () => {
//   if (!document.hidden) {
//     // 处于当前页面
//     playBarrage()
//     console.log('进入页面')
//   } else {
//     console.log('离开页面')
//     clearInterval(intervalDM.value)
//     intervalDM.value = null
//   }
// }

const addBarrage = (res: any) => {
  const obj: any = { ...res, content: res.message, direction: 'default' }
  // 动画弹幕
  if (obj.type === 'INTERACTION') {
    // obj.actionType = isLove(res.message) ? 'LOVE' : 'GOOD'
  }
  // 是否为本人所发
  if (res.senderId === USER_ID) {
    if (barrages.value.length) {
      barrages.value.unshift({
        ...obj,
        isSelf: true,
      })
    } else {
      barrages.value.push({
        ...obj,
        isSelf: true,
      })
    }
  } else {
    barrages.value.push(obj)
  }
}

// 设置弹幕卡槽长度
const setBarrageWidth = () => {
  nextTick(() => {
    barMainWidth.value = barrageWrapperRef.value?.offsetWidth
  })
}

watch(
  () => props.isPause,
  (val) => {
    // eslint-disable-next-line no-unused-expressions
    val ? pauseBarrage() : playBarrage()
  },
)

watch(
  () => props.full,
  () => {
    setBarrageWidth()
  },
)

onMounted(() => {
  // 初始化弹幕dom组
  init()

  // 开始播放弹幕
  playBarrage()

  // 弹幕卡槽长度
  setBarrageWidth()

  // 注册页面监听器
  // document.addEventListener('visibilitychange', visibilitychangeFn)
})


onBeforeUnmount(() => {
  // document.removeEventListener('visibilitychange', visibilitychangeFn)
  clearInterval(intervalDM.value)
  intervalDM.value = null
})

defineExpose({
  addBarrage,
})
</script>
<style lang="scss" scoped>
.barrage-wrapper {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0px;
  top: 30px;
  width: 100%;
  height: 100%;

  .barrage-img {
    display: flex !important;
    align-items: center;
    height: 45px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 32px;
    padding: 1px 10px !important;

    .ani-box {
      width: 30px;
      height: 30px;
      position: relative;
      margin-right: 40px;

      .ani {
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }

  .barrage-item {
    z-index: 99;
    position: absolute;
    // left: 0px;
    // top: 0px;
    // transform: translateX(-100%);
    // padding: 5px 0px;
    user-select: none; // 禁用选择文字
    position: absolute;
    white-space: pre;
    cursor: pointer;
    // pointer-events: none;
    // perspective: 500px;
    display: inline-block;
    will-change: transform;
    font-size: 20px;
    color: rgb(255, 255, 255);
    font-family: SimHei, 'Microsoft JhengHei', Arial, Helvetica, sans-serif;
    font-weight: bold;
    line-height: 1.125;
    opacity: 1;
    text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px,
      rgb(0, 0, 0) -1px 0px 1px;

    &:hover {
      color: red;
      animation-play-state: paused !important;
      z-index: 150;
    }
  }

  .top-item {
    z-index: 100;
  }

  .barrage-main {
    /* border: 2px solid blue; */
    width: 100%;
    height: 100%;
    position: relative;
    // overflow: hidden;
    // background: #000;
  }

  .barrage-main-box {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}

.self-dm {
  border: 2px solid var(--c-blue);
  box-sizing: border-box;
  color: var(--c-blue) !important;
  padding: 1px 10px;
}

@keyframes barrage-run {
  0% {
    // transform: translate3d(500px, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes barrage-fade {
  0% {
    visibility: visible;
    // opacity: 1;
  }

  100% {
    visibility: hidden;
    // opacity: 0;
  }
}

.ani-pause {
  & div {
    animation-play-state: paused !important;
  }
}

.ani-running {
  & div {
    animation-play-state: running !important;
  }
}
</style>
