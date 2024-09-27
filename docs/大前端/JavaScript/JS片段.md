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
