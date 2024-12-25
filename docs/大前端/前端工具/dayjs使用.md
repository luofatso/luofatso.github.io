# Day.js的使用

`Day.js` 是一个轻量的处理时间和日期的 `JavaScript` 库，和 `Moment.js` 的 `API` 设计保持完全一样。

- [Day.js | Github](https://github.com/iamkun/dayjs)
- [Day.js | 文档-英文](https://day.js.org/docs/en/installation/installation)
- [Day.js | 文档-中文](https://dayjs.gitee.io/zh-CN/)

## 安装

::: code-group

```js [npm]
npm install dayjs
```

```js [yarn]
yarn add dayjs
```

```js [pnpm]
pnpm add dayjs
```

```js [cdn]
<script src="https://unpkg.com/dayjs"></script>
```

:::

## 创建

```js
dayjs() // 当前时间 Tue Dec 12 2000 00:00:00 GMT+0800
dayjs('2000-12-12') // 2000-12-12
dayjs(Date.now() + 24 * 60 * 60 * 1000) // 明天
```

## 显示

```js
dayjs('2000-01-01').valueOf() // 返回当前实例的 UNIX 时间戳，13位数字，毫秒
dayjs('2000-01-01').unix() // 返回当前实例的 UNIX 时间戳，10位数字，秒
dayjs().format('YYYY-MM-DD HH:mm:ss') // 格式化时间 2000-12-12 00:00:00
dayjs().format('[YYYY]') // "[2000]"
dayjs('2000-01-01').daysInMonth() // 获取当前月份包含的天数
```

## 操作

```js
dayjs().subtract(7, 'days') // 7天后
dayjs().add(7, 'days') // 7天前
dayjs().subtract(1, 'months') // 上个月
dayjs().add(1, 'months') // 下个月
dayjs().startOf('months') // 获取一月初
dayjs().endOf('year') // 获取一年年末
```

## 查询

```js
dayjs().isLeapYear() // 当前年份是否是闰年
dayjs('2000-01-01').isLeapYear() // 指定年份是否是闰年
dayjs('2000-01-01').isBefore('2000-01-02') // 是否在另一个提供的日期时间之前
dayjs('2000-01-01').isAfter('2000-01-02') // 是否在另一个提供的日期时间之后

// 是否在两个时间之间
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)
dayjs('2010-10-20').isBetween('2000-10-10', dayjs('2020-10-30')) // 默认毫秒
dayjs().isBetween('2000-10-10', '2020-10-10', 'month')
```

## 实战倒计时

需要使用 [duration 插件 ](https://day.js.org/docs/zh-CN/plugin/duration#docsNav) 用于将时间差转换为 `Day.js` 对象

::: code-group

```js [js]
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

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
  console.log(`倒计时：${duration.format('DD 天 HH 时 mm 分 ss 秒')}`)
}

// 使用定时器更新倒计时
setInterval(countdown, 1000)
```

```vue [vue]
<script setup>
const format = '[<span>]HH[</span>] 时 [<span>]mm[</span>] 分 [<span>]ss[</span>] 秒'
</script>

<template>
  <div class="countdown" v-html="count.format(format)"></div>
  {{ count.format('D 天 HH 时 mm 分 ss 秒') }}
  {{ count.format('DD : HH : mm : ss') }}
  {{ count.format('HH-mm-ss') }}
  <div class="countdown">
    使用取值方法：
    <span>{{ count.hours() }}</span>
    时
    <span>{{ count.minutes() }}</span>
    分
    <span>{{ count.seconds() }}</span>
    秒
    <span>{{ count.milliseconds() }}</span>
  </div>
</template>
```

:::

<script setup lang='ts'>
  import DayDuration from './components/DayDuration.vue'
</script>

<DayDuration />

::: tip 优势

- 使用 `Day.js` 对象的 `format` 方法进行格式化
  - 无需自己实现格式化函数
  - 个位数时都不需要字符串补位操作
  - 在使用 `format` 时，在方括号中的字符不会被格式化替换
- 兼容性良好
  :::

::: warning 缺点
当需求场景超出 `Day.js` 对象的 `format` 方法的能力时（即不是标准的年月日时分秒格式）需要自己实现格式化函数

- 40 天 13 时 14 分 00 秒
- 52 时 13 分 14 秒
- 100 分 50 秒
  :::

- [实战参考](https://notes.fe-mm.com/workflow/library/dayjs)
