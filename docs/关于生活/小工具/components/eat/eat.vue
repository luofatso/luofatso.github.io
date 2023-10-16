<template>
  <div class="eat d-flex flex-column">
    <div class="main flex-1 box-center primary--text font-26">
      {{
        eatIndex === -1
        ? '吃点啥好呢？'
        : eatIndex === 999
          ? '这么挑别吃了，啥也不是！'
          : eatArr.split(',')[eatIndex]
      }}
    </div>
    <div class="foot box-center">
      <div @click="randomEat(true)" class="btn primary box-center" :class="{ grey: inClick }">
        {{ inClick ? '为您安排中' : eatOff > 5 ? '罢工啦！' : eatOff === 1 ? '开始' : '换一个' }}
      </div>
    </div>
    <p class="text-c ">可编辑下面菜单</p>
    <textarea class="px-2" name="" id="" cols="30" rows="10" v-model="eatArr"></textarea>
  </div>
</template>
<script setup lang="ts">
import { getRandom } from '../../../../utils/util'
import { ref } from 'vue'

let eatFlagIndex = 1
const eatFlag = ref({
  flag: false,
  time: 50,
  time2: 50
})
const eatOff = ref(1)
const inClick = ref(false)
const eatIndex = ref(-1)
const eatArr = ref(
  '盖饭, 火锅, 麻辣烫,面条,水果,鸡公煲,中餐,米线,凉面,水饺,猪脚饭,烧饼,快餐,面包,泡面,撸串,烧烤,汤锅,烤肉,烤鱼'
)

const randomEat = (click: boolean = false) => {
  if (click && eatOff.value === 5) {
    eatIndex.value = 999
    eatOff.value = 6
  }
  // 正在滚动中或超过5次就停止
  if ((click && inClick.value) || eatOff.value >= 5) return
  if (!inClick.value) inClick.value = true
  setTimeout(() => {
    eatIndex.value = getRandom(eatArr.value.split(',').length)
    if (eatFlagIndex < 15) {
      eatFlagIndex += 1
    } else {
      eatFlag.value.time = eatFlag.value.time2
      eatFlag.value.time2 = eatFlag.value.time + eatFlag.value.time2
    }
    if (eatFlag.value.time2 >= 1000) {
      eatFlag.value = {
        flag: false,
        time: 100,
        time2: 100
      }
      eatFlagIndex = 1
      eatOff.value += 1
      inClick.value = false
    } else {
      randomEat()
    }
  }, eatFlag.value.time2)
}
</script>
<style lang="scss" scoped>
.eat {
  width: 50%;
  border: 1px solid #eee;
  border-radius: 10px;
  // padding: 20px;
  margin: 0 auto;
  height: 500px;
  overflow: hidden;
 
}

.foot {
  border-top: 1px solid #eee;

  .btn {
    height: 50px;
    width: 100%;
    cursor: pointer;
  }
}

.grey {
  background-color: #999;
}</style>
