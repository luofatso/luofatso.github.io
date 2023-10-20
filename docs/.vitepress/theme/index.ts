import { h, App } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './var.scss'

// import vuetify from './vuetify'

export default Object.assign(
  {},
  {
    ...DefaultTheme,
    // enhanceApp: async ({ app }: any) => {
    //   app.use(vuetify)
    // },
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
