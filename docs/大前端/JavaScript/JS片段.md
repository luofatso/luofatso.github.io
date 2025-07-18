# JS片段

## 1.检查当前用户是否为苹果设备

```js
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
console.log(isAppleDevice)
// Result: will return true if user is on an Apple device
```

## 2.根据子ID查找所有父级ID或name

```js
// 根据子ID查找所有父级ID（此处为name）
findIds(array, id) {
  let stack = []
  let going = true
  let walker = (array, id) => {
    array.forEach((item) => {
      if (!going) return
      stack.push(item['serviceName'])
      if (item['id'] === id) {
        going = false
      } else if (item['children']) {
        walker(item['children'], id)
      } else {
        stack.pop()
      }
    })
    if (going) stack.pop()
  }
  walker(array, id)
  return stack
}
```

## 3.数组乱序

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}
```

## 4.一键给网页上边框

常用于调试的时候，看一下DOM的框是不是自己想要的，其中颜色是随机生成的。

```js
;[].forEach.call($$('*'), function (a) {
  a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
})
```

## 5.判断是否是周末

```js
// 判断是否是周末
const isWeekend = (date = new Date()) => date.getDay() === 6 || date.getDay() === 0
```

## 6.计算两个时间之间的差值

例子为计算两个日期之间的天数差值（天的毫秒），其他可以对应修改。

```js
const dayDif = (d1 = new Date(new Date().getFullYear(), 0, 0), d2 = new Date()) =>
  Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000)
dayDif(new Date('2024-10-01'), new Date('2024-12-12')) // 72
```

## 7.获取当前时间

```js
const getTimeFormat = (date = new Date()) => date.toTimeString().slice(0, 8)
getTimeFormat(new Date()) // 返回当前时间 10:35:00
```

## 8.获取一个随机颜色

```js
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
```

## 9.是否暗色模式

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
```

## 10.判断对象是否为空

```js
const isEmpty = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
```

## 11.数组对象某个值去重

```js
const uniqueByArray = (arr, key) => {
  return Array.from(new Map(arr.map((item) => [item[key], item])).values())
}
```

## 12.获取随机数

```js
/**
 * 获取随机数
 * @param {number} max 最大值
 * @param {number} min 最小值
 * @param {boolean} inclusive 是否包含最大值
 * @returns {number} 随机数
 */
export const getRendom = (max, min = 1, inclusive = true) => {
  if (max < min) [max, min] = [min, max] // 交换 max 和 min
  return inclusive
    ? ~~(Math.random() * (max - min + 1)) + min // 包含 max
    : ~~(Math.random() * (max - min)) + min // 不包含 max
}
```

## 13.异步重试

```js
/**
 * 异步重试
 * @param {function} fn 异步函数
 * @param {number} retries 重试次数
 * @param {number} delay 重试间隔
 * @returns {Promise} 异步函数返回的 Promise
 */
export const apiRetry = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn()
  } catch (error) {
    if (retries <= 0) throw error
    await new Promise((resolve) => setTimeout(resolve, delay))
    return apiRetry(fn, retries - 1, delay)
  }
}
```

## 14. 首字母大写

```js
/**
 * 首字母大写
 * @param {string} str 字符串
 * @returns {string} 首字母大写后的字符串
 */
export const upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)
```

## 15.生成随机字符串

```js
/**
 * 生成随机字符串
 * @param {number} length 字符串长度
 * @returns {string} 随机字符串
 */
export const randomString = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}
```
