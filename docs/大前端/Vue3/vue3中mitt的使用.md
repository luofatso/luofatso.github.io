# vue3中mitt的使用

## 方式一

```
// bus.js
import mitt from 'mitt'
export default mitt()

// 使用
import bus from '@/utils/bus'
bus.emit('reloadErrorPage', {})

bus.on('reloadErrorPage', () => {
  selectPageReq()
})


```

## 方式二

```
// main.js

import mitt from 'mitt';
const emitter = mitt();
app.config.globalProperties.$bus = emitter;

// 使用
import { getCurrentInstance } from 'vue';
const internalInstance = getCurrentInstance();
const bus = internalInstance.appContext.config.globalProperties.$bus;
// 发送事件
bus.emit('index', i);

// 监听事件
bus.on('index', (data:unknown)=>{
	console.log('选择的下标=', data);
})

onBeforeUnmount(() => {
  // 显式卸载
  bus.off('index')
})
```

## 封装使用

```
import { onUnmounted } from 'vue';
import mitt from 'mitt';

const emitter: mitt.Emitter = mitt();

// 自定义触发器
const busEmit = (eventName) => {
  emitter.emit(eventName);
};

// 自定义接收器
const busOn = (eventName, callback) => {
  emitter.on(eventName, () => callback());
};

// 通知刷新表格数据
const toRefreshTable = () => {
  emitter.emit('reload');
};

// 刷新表格数据
const reloadTable = (callback) => {
  emitter.on('reload', () => callback());
};

// 通知刷新树结构数据
const toRefreshTree = () => {
  emitter.emit('refreshTree');
};

// 刷新树数据
const refreshTree = (callback) => {
  emitter.on('refreshTree', () => callback());
};

export const useEventbus = () => {
  onUnmounted(() => {
    emitter.all.clear();
  });
  return {
    busEmit,
    busOn,
    toRefreshTable,
    reloadTable,
    toRefreshTree,
    refreshTree,
  };
};

```
