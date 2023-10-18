<template>
  <div class="countdown" v-html="count?.format(format)"></div>
  <p>{{ count?.format('D 天 HH 时 mm 分 ss 秒') }}=</p>
  <p>{{ count?.format('DD : HH : mm : ss') }}-</p>
  <p>{{ count?.format('HH-mm-ss') }}!</p>
  <div class="countdown">
    使用取值方法：
    <span>{{ count?.hours() }}</span>
    时
    <span>{{ count?.minutes() }}</span>
    分
    <span>{{ count?.seconds() }}</span>
    秒
    <span>{{ count?.milliseconds() }}</span>
  </div>
</template>
<script setup lang='ts'>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { ref, onMounted } from 'vue'

const format = '[<span>]HH[</span>] 时 [<span>]mm[</span>] 分 [<span>]ss[</span>] 秒'
const count = ref(null)

// 配置 duration 插件
dayjs.extend(duration)

// 计算倒计时的时间差
const countdown = () => {
  const now = dayjs()
  // 目标日期（默认为当天 23:59:59）
  const target = dayjs().endOf('D')
  const diff = target.diff(now)

  // 将时间差转换为 Day.js 对象
  const duration = dayjs.duration(diff)

  // 输出倒计时结果（可直接使用 format 格式化）
  // console.log(`倒计时：${duration.format('DD 天 HH 时 mm 分 ss 秒')}`)

  return duration
}

// 使用定时器更新倒计时
onMounted(() => {
  setInterval(() => {
    count.value = countdown();
  }, 1000);
});
</script>
<style lang='scss' scoped>
  
</style>
