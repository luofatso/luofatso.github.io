<template>
  <h2 id="今日一点" tabindex="-1">今日一点 <a class="header-anchor" href="#今日一点" aria-hidden="true">#</a></h2>
  <div class="one-day d-flex aling-center justify-center flex-column ">
    {{ todayOne }}
    <p class="intro text-c"> <strong>每日一点</strong> 已坚持发布 <span>{{ OneDayAll.length }}</span> 天</p>
  </div>
  <h2 id="全部一点" tabindex="-1">全部一点 <a class="header-anchor" href="#全部一点" aria-hidden="true">#</a></h2>
  <ul>
    <li v-for="it in OneDayAll">
      <p>{{ it }}</p>
    </li>
  </ul>
</template>
<script setup lang='ts'>
import OneDay2023 from './OneDay2023'
import OneDay2024 from './OneDay2024'
import { getRandom } from '../../../../utils/util'

const OneDayAll = [...OneDay2024.reverse(), ...OneDay2023.reverse()]

const todayOne = OneDayAll[getRandom(OneDayAll.length)]

</script>
<style lang='scss' scoped>
.one-day{
  padding: 80px 50px 20px;
  border: 1px solid rgba(82, 82, 89, 0.32);
  line-height: 2em;
  .intro{
    color: #999;
    padding-top: 60px;
    span{
      color: var( --c-red);
      font-size: 26px;
      font-weight: 700;
    }
  }
}
</style>
