<template>
  <div class="todos box-border">
    <h3>当前时间：{{ weekStrArr[today.todayWeek] }} {{ today.today }} </h3>
    <div class="todos-add">
      <input
        type="text"
        maxlength="20"
        placeholder="例: 2020-01-01"
        class="full px-3 box-border"
        v-model="time"
      />
    </div>
    <div class="d-flex pa-4">
      <div @click="getLunar(true)" class="box-center flex-1 todos-btn mr-2 primary">
        阳历转阴历
      </div>
      <div @click="getLunar()" class="box-center flex-1 todos-btn ml-2 primary">
        阴历转阳历
      </div>
    </div>
    <div class="d-flex flex-column align-center font-13" v-show="date?.date">
      <p class="grey--text">注意:只支持1900-2100</p>
      查询结果：
      <p class="pt-3" @click="openDialog()">阳历(公历): {{ date?.date }}</p>
      <p @click="openDialog(1)">阴历(农历): {{ date?.lunarDate }}</p>
      <p>{{ date?.IMonthCn + '●' + date?.IDayCn }}</p>
      <p>{{ date?.ncWeek }}</p>
      <p>{{ date?.astro }}</p>
      <p>
        {{ date?.gzYear + date?.Animal + '年' }}●{{ date?.gzMonth + '月' }}●{{ date?.gzDay + '日' }}
      </p>
      <p v-show="date?.Term" class="font-20 mt-6 primary">
        {{ time24.includes(date?.Term) ? '24节气：' + date?.Term : date?.Term + '节' }}
      </p>
    </div>
    <div class="pa-2 font-13" v-if="time24.includes(date?.Term)">
      <p class="text-c my-2 pb-6">{{ time24Obj[date?.Term].title }}</p>
      <p class="text-c my-2">
        <span class="grey">{{ date?.Term }}的简介</span>
      </p>
      <p class="text-2em my-1" v-for="(it, i) in time24Obj[date?.Term].intro" :key="i">{{ it }}</p>
      <p class="text-c my-2">
        <span class="grey">{{ date?.Term }}的由来</span>
      </p>
      <p class="text-2em my-1" v-for="(it, i) in time24Obj[date?.Term].origin" :key="i">{{ it }}</p>
      <p class="text-c my-2">
        <span class="grey">{{ date?.Term }}的习俗</span>
      </p>
      <p class="text-2em my-1" v-for="(it, i) in time24Obj[date?.Term].custom" :key="i">{{ it }}</p>
      <p class="text-c my-2">
        <span class="grey">{{ date?.Term }}的养生</span>
      </p>
      <p class="text-2em my-1" v-for="(it, i) in time24Obj[date?.Term].life" :key="i">{{ it }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
// import calendar from 'js-calendar-converter'
// import Toast from '@/wxcomponents/vant/dist/toast/toast'
import { time24, time24Obj, weekStrArr } from './time24'
// import Dialog from '@/wxcomponents/vant/dist/dialog/dialog'
import { ref, onMounted, watch } from 'vue'
import { calendar } from './js-calendar-converter'

// const {} = pkg

const today = ref({
  today: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  todayWeek: dayjs().day(),
})
const time = ref(dayjs().format('YYYY-MM-DD'))
const date = ref<any>()

const getLunar = (type: boolean = false) => {
  const ymd = /(19[0-9][0-9]|20[0-9][0-9]|2100)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
  if (ymd.test(time.value)) {
    const [year, month, day] = time.value.split('-')
    date.value = type
      ? calendar.solar2lunar(year, month, day) // 阳转阴
      : calendar.lunar2solar(year, month, day, false) // 阴转阳
  } else {
    // Toast('格式不正确')
    alert('格式不正确')
  }
}

const openDialog = (type: number = 0) => {
  const solar =
    '阳历亦即太阳历，其历年为一个回归年，现时国际通用的公历（格里高利历）和中国的干支历即属于太阳历这类。'
  const lunar =
    '阴历亦称月亮历，或称太阴历，其历月是一个朔望月，历年为12个朔望月，其大月30天，小月29天，伊斯兰历即为阴历的一种。'
  // Dialog.alert({
  //   title: ['阳历', '阴历'][type],
  //   message: type === 0 ? solar : lunar
  // })
}

watch(
  () => today.value.today,
  () => {
    setTimeout(() => {
      today.value = {
        today: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        todayWeek: dayjs().day()
      }
    }, 1000)
  },
  {
    immediate: true
  }
)

onMounted(() => {
  getLunar(true)
})
</script>
<style lang="scss" scoped>
.vp-doc p, .vp-doc summary{
  margin: 0;
}
.todos {
  width: 80%;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  // background-color: #eee;
  input {
    width: 100%;
    height: 60px;
    font-size: 18px;
    border-radius: 10px;
    margin: 15px 0 10px;
    border: 2px solid var(--c-blue);
  }
  &-btn {
    height: 45px;
    border-radius: 10px;
  }
}
.text-2em {
  text-indent: 2em;
  padding: 0 10px 20px;
}
</style>
