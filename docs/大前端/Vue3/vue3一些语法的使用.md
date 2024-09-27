# vue3部分语法使用

## 1. toRef、toRefs

```
const obj = {
  foo: 1,
  bar: 1
}

const state = toRef(obj, 'bar')

const obj = reactive({
   foo: 1,
   bar: 1
})
let { foo, bar } = toRefs(obj)
```

## 2. shallowReactive 与 shallowRef

- shallowReactive：只处理对象最外层属性的响应式（浅响应式）
- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

## 3. readonly 与shallowReadonly

- readonly: 让一个响应式数据变为只读的（深只读）。
- shallowReadonly：让一个响应式数据变为只读的（浅只读）。

## 4. toRaw 与 markRaw

- toRaw

  - 作用：将一个由 reactive 生成的 响应式对象 转为 普通对象
  - 使用场景：用于读取响应式对象=>对应的普通对象,对这个普通对象的所有操作，不会引起页面的更新

- markRaw
  - 作用：标记一个对象，使用其永远不会再成为响应式对象
  - 应用场景：
    - 有些值不应被设置为响应式的，例如复杂的第三方类库
    - 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

## 5.Teleport 与 Suspense

- Teleport: 什么是 Teleport —— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术

```
<teleport to="移动位置">
  <div v-if="isShow" class="mask">
    <div class="dialog">
      <h3>我是一个弹窗</h3>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </div>
</teleport>
```

- Suspense: 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

> 使用Suspense包裹组件，并配置好default 与 fallback

```
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </Suspense>
  </div>
</template>
```
