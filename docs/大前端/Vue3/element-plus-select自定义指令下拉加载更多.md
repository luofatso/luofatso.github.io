# element-plus-select自定义指令下拉加载更多

本文只做简单记录，全局注册指令同理修改容器为类名就行，同时修逻辑为循环

::: code-group

```template[template]
<template>
<div id="moreJob">
  <el-select
    v-model="value"
    filterable
    placeholder="请选择或输入关键字"
    v-loadmore="loadmoreData"
  >
    <div id="moreJobBox">
      <el-option v-for="it in options" :key="it.id" :label="it.name" :value="it.id" />
    </div>
  </el-select>
</div>
</template>
```

```script-setup[script-setup]
import { Directive } from 'vue'

const vLoadmore: Directive = {
  beforeMount(el, binding) {
    const box = document.getElementById('moreJobBox')
    const element = box?.closest(
      '.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default'
    )

    element?.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = element
      const scrollDistance = scrollHeight - scrollTop - clientHeight

      if (scrollDistance <= 0) {
        binding.value()
      }
    })
  }
}

const loadmoreData = () => {
  console.log('触底的时候触发loadmore')
}
```

:::
