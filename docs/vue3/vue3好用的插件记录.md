# 插件记录

## 用Composition API的思想封装NProgress

npm i nprogress @vueuse/integrations

```
//router.js
import { createRouter, createWebHashHistory } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
// 通过useNProgress，导出一个isLoading
const { isLoading } = useNProgress(null,{
  showSpinner: false
})

const router = createRouter({
  history: createWebHashHistory(),
  routes:[/*省略路由*/]
})
// 在路由进入和离开的时候时候，改变isLoading
router.beforeEach((to, from, next)=>{
  isLoading.value = true
  next()
})
router.afterEach((to, from, next)=>{
  isLoading.value = false
  next()
})
export default router
```