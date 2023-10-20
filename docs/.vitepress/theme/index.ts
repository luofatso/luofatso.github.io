import { h, App } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './var.scss'

// import vuetify from './vuetify'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default Object.assign(
  {},
  {
    ...DefaultTheme,
    // enhanceApp: async ({ app }: any) => {
    //   app.use(vuetify)
    // },
    enhanceApp: async ({ app }: any) => {
      // app is the Vue 3 app instance from `createApp()`. router is VitePress'
      // custom router. `siteData`` is a `ref`` of current site-level metadata.
      import("element-plus").then((module) => {
        app.use(module);
      });
    },
  },
  {
    Layout: () => {
      const props: Record<string, any> = {}
      // 获取 frontmatter
      const { frontmatter } = useData()

      /* 添加自定义 class */
      if (frontmatter.value?.layoutClass) {
        props.class = frontmatter.value.layoutClass
      }

      return h(MyLayout, props)
    },
  },
)
