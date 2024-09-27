# vue3知识点巩固

- [链接地址](https://cn-vuejs-challenges.netlify.app/challenges.html#category=Built-ins)

## 1.全局CSS/动态CSS

- 全局

```
<style scoped>
:global(body) {
  // ...
}
</style>

```

- 动态

```
<template>
  <p>hello</p>
</template>

<script setup>
import { ref } from "vue"

const theme = ref("red")

const colors = ["blue", "yellow", "red", "green"]

setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000)

</script>

<style>
p {
  color: v-bind(theme);
}
</style>
```

## 2.DOM传送门

```
<template>
  <!-- 将以下元素渲染成`body`的子元素 -->
  <teleport to="body">
    <span>{{ msg }}</span>
  </teleport>
</template>


<script setup>
import { ref } from "vue"

const msg = ref('Hello World')

</script>
```

## 3.Prop验证

- JS版本

```
<template>
  <button :type="type">Button</button>
</template>

<script setup>

defineProps({
  type: {
    type: String,
    default: 'default',
    validator: value => ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(value)
  }
})
</script>
```

- TS版本

```
<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
}>(), {
  type: 'default'
})
</script>

<template>
  <button>Button</button>
</template>
```

## 4.函数式组件

```
<script setup lang="ts">
import { ref, h } from "vue";

/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */
const ListComponent = (props, { emit }) => {
  const { list } = props;
  const children = list.map((item, idx) => {
    return h(
      "li",
      { "data-id": idx, class: props["active-index"] === idx ? "red" : "" },
      item.name
    );
  });

  return h(
    "ul",
    {
      onClick(e) {
        let id = e.target.dataset.id;
        emit("toggle", +id);
      }
    },
    children
  );
};

const list = [
  {
    name: "John"
  },
  {
    name: "Doe"
  },
  {
    name: "Smith"
  }
];

const activeIndex = ref(0);

function toggle(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>

<style>
ul li.red {
  color: red;
}
</style>

```

## 5.渲染函数-h()

```
<template>
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue"

const onClick = () => {
  console.log('onClick')
}

const MyButton = defineComponent({
  name: 'MyButton',
  props: ['disabled'],
  render() {
    const that = this
    return h('button', {
      disabled: that.disabled,
      onClick() {
        that.$attrs.onCustomClick()
      }
    }, that.$slots.default())
  }
})
</script>
```

## 6.首字母大写

```
<template>
  <input type="text" v-model.trim.capitalize="v" />
</template>

<script setup lang="ts">
// vue3 vue-model 自定义修饰符
import { ref, vModelText } from 'vue'

vModelText.updated = (el, { value, modifiers: { capitalize } }) => {
  if (capitalize && value) {
    // console.log(value, typeof value)
    el.value = value[0].toUpperCase() + value.slice(1)
  }
}

const v = ref('')
</script>
```
