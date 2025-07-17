# JS片段

[TOC]

## 检查当前用户是否为苹果设备

```
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: will return true if user is on an Apple device
```

## 根据子ID查找所有父级ID或name

```
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

## 数组乱序

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};
```

## 一键给网页上边框

常用于调试的时候，看一下DOM的框是不是自己想要的，其中颜色是随机生成的。

```
[].forEach.call($$('*'), function (a) {
    a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16);
});
```

## 判断是否是周末

```
// 判断是否是周末
const isWeekend = (date = new Date()) => date.getDay() === 6 || date.getDay() === 0;
```

## 计算两个时间之间的差值

例子为计算两个日期之间的天数差值（天的毫秒），其他可以对应修改。

```
const dayDif = (d1 = new Date(new Date().getFullYear(), 0, 0), d2 = new Date()) => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000);
dayDif(new Date('2024-10-01'), new Date('2024-12-12')); // 72
```

## 获取当前时间

```
const getTimeFormat = (date = new Date()) => date.toTimeString().slice(0, 8);
getTimeFormat(new Date()); // 返回当前时间 10:35:00
```

## 获取一个随机颜色

```
const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
```

## 是否暗色模式

```
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

## 判断对象是否为空

```
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
```

## 数组对象某个值去重

```
const uniqueByArray = (arr, key) => {
  return Array.from(new Map(arr.map(item => [item[key], item])).values());
};
```
