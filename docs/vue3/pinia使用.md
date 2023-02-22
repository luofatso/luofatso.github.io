#  pinia 快速入门

小、快、易、直观等，更多请移步[官方文档](https://pinia.vuejs.org/)

## 安装
```
yarn add pinia
# or with npm
npm install pinia
```

在main.ts注册

```
import { createPinia } from 'pinia'

app.use(createPinia())
```

## 使用

- store 方式一
```
// main.ts
import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export default defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "main",
  // state: 返回对象的函数
  state: ()=> ({
    count: 1,
    name: '超级管理员',
    items:[]
  }),
  getters: {
    // 方式一
    countPow2(state) {
      return state.count ** 2;
    },
    方式二
    countPow2() {
      return this.count ** 2;
    },
    // 传参
    addCount: (state) => {
      return (num: number) => state.count += num
    }
  },
  actions: {
    increment() {
      this.count += 1
    },
    addNum(num: number) {
      this.count += num
    },
    editName(name: string) {
      this.name = name
    }
  }
});
```
- store 方式二
```
// main.ts
import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export default defineStore('main', () => {
  const count = ref(1)

  const countPow2 = () => {
    return count.value ** 2
  }
  const increment = () => {
    count.value += 1
  }

  return {
    countPow2,
    increment
  }
});
```
- 使用 Store
```
<template>
  <div>
    {{store.count}}
  </div>
  <div>{{ store.countPow2 }}</div>
  <div>{{ addCount(2) }}</div>
  <button @click="add()">加10</button>
</template>
<script setup lang="ts">
import { mainStore } from "@/store/main"

const store = mainStore()
const addCount = (num: number) => {
  return store.addCount(num)
}
const add = (num: number = 10) => {
  store.addNum(num)
}
</script>
```
- 其它修改方式
```
// 直接修改,但还是推荐在 actions 中操作，保证状态不被意外改变
store.name = '娃哈哈名字被修改了'

// actions 修改方式
store.editName('娃哈哈名字被修改了1')

// 同时修改多个值
store.$patch({
  name: '娃哈哈名字被修改了123',
  count: 20
})

// 针对集合修改
mainStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.count = 21
})

// $state 可以通过将 store 的属性设置为新对象来替换 store 的整个状态
store.$state = {
  name: '设置为新对象来替换商店的整个状态',
  count: 20
}
```
- 直接重置store
```
store.$reset()
```
- 在 router 中使用
```
import { createPinia } from 'pinia'
import useMainStore from '@/store/main'

const store = useMainStore(createPinia())
```
> 注意在router和axios中使用时，一定要在函数的内部去初始化；不然会报错pinia没有注册！