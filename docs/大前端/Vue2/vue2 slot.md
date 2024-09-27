# vue2 slot

slot 官网翻译为插槽，通俗一点就是“占坑”，在组件模板中占好了的位置；当使用该组件模板的时候，组件标签里的内容就会自动占填坑（替换组件模板中 slot 位置）。

### 默认内容

test 组件

```
//在slot插槽里设置默认内容 Submit
<button>
  <slot>Submit</slot>
</button>
```

在其它组件中使用

```
<test>按钮</test> // 有值
<test></test> // 无值
```

最后渲染得到

```
// 有值后的
<button>
   Submit
</button>
// 无值后的
<button>
   Submit
</button>
```

### 具名插槽

有时候我们一个组件里需要多个插槽，这时候就该<code>slot</code>的<code>name</code>属性出场了。

```
//Child.vue
<div>
  <main>
  //默认插槽
    <slot>
      //slot内为后备内容
      <h3>没传内容</h3>
    </slot>
  </main>

  //具名插槽
  <header>
    <slot name="header">
      <h3>没传header插槽</h3>
    </slot>
  </header>

  //作用域插槽
  <footer>
    <slot name="footer" testProps="子组件的值">
      <h3>没传footer插槽</h3>
    </slot>
  </footer>
</div>
```

```
// Parent.vue
<child>
  <!-- 默认插槽 -->
  <div>默认插槽</div>
  <!-- 具名插槽 -->
  <div slot="header">具名插槽header</div>
  <!-- 作用域插槽 -->
  <div slot="footer" slot-scope="slotProps">
    {{slotProps.testProps}}
  </div>
</child>
```

如果一个<code>slot</code>不带<code>name</code>属性的话，那么它的<code>name</code>默认为<code>default</code>

```
<div>
   <template v-slot:header>
    <h1>Here might be a page title</h1>
   </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here some contact info</p>
  </template>
</div>
```

2.6.0 新增

```
//Parent
<template>
  <child>
   <!--默认插槽-->
   <template v-slot>
     <div>默认插槽</div>
   </template>
   <!--具名插槽-->
   <template #header>
     <div>具名插槽</div>
   </template>
   <!--作用域插槽-->
   <template #footer="slotProps">
     <div>
      {{slotProps.testProps}}
     </div>
   </template>
  <child>
</template>
```

```
<div>
   <template #header>
    <h1>Here might be a page title</h1>
   </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here some contact info</p>
  </template>
</div>

```

### 拓展用法

1.  同样可以通过解构获取 v-slot={user},还可以重命名 v-slot="{user:newName}"和定义默认值 v-slot="{user = '默认值'}"
2.  插槽名可以是动态变化的 v-slot:[slotName]
3.  在 js 中判断某一个 slot 是否传递
    ```
    this.$slots.default
    this.$slots.header
    ```

### 注意事项

1. 默认插槽名为 default,可以省略 default 直接写 v-slot,缩写为#时不能不写参数，写成#default(这点所有指令都一样，v-bind、v-on)
2. 多个插槽混用时，v-slot 不能省略 default
