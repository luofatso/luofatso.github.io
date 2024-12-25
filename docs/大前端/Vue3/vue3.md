# vue相关

## 1.defineProps

::: code-group

```vue [JavaScript]
<script setup>
const props = defineProps({
  msg: String,
  title: {
    type: String,
    default: '我是标题'
  },
  list: {
    type: Array,
    default: () => []
  }
})

// 在 js 中使用 props 中的属性
console.log(props.msg)
</script>

<template>
  <!-- 在模板中直接使用 props 中声明的变量 -->
  <h1>{{ msg }}</h1>
  <div>{{ title }}</div>
</template>
```

```vue [TypeScript]
<script setup lang="ts">
interface ListItem {
  name: string
  age: number
}
const props = defineProps<{
  msg: string
  title: string
  list: ListItem[]
}>()

// 在 ts 中使用 props 中的属性，具有很好的类型推断能力
console.log(props.list[0].age)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>{{ title }}</div>
</template>
```

:::

## 2.defineEmits

::: code-group

```vue [JavaScript]
const emits = defineEmits(['changeMsg']) const handleChangeMsg = () => { emits('changeMsg', 'Hello
TS') }
```

```vue [TypeScript]
const emits = defineEmits<{ (e: 'changeMsg', value: string): void }>() const handleChangeMsg = () =>
{ emits('changeMsg', 'Hello TS') }
```

:::

## 3.defineExpose

在 Vue3 中，默认不会暴露任何在 `<script setup>` 中声明的绑定，即不能通过模板 ref 获取到组件实例声明的绑定。

Vue3 提供了 defineExpose 编译器宏，可以显式地暴露需要暴露的组件中声明的变量和方法。

```vue
const msg = ref
<string></string>
```

## 4.watch

```vue
watch( () => route, (newVal) => { state.currentPath = newVal.name === 'UserRole' ? '/user-role' :
newVal.path }, { deep: true } )
```

## 5.样式穿透

```
:deep(.el-breadcrumb__item) {
  .el-breadcrumb__inner.is-link {
    color: #909399 !important;
    font-weight: 500 !important;

    &:hover {
      color: #409eff !important;
    }
  }
}
```
