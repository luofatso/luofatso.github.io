import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '关于我', link: '/about' },
  { text: '网站导航', link: '/nav' },
  {
    text: '个人随笔',
    items: [
      {
        text: '梦呓',
        link: '/个人随笔/梦呓/'
      },
      {
        text: '骚动的心',
        link: '/个人随笔/骚动的心/'
      },
      {
        text: '星星',
        link: '/个人随笔/星星/'
      },
      {
        text: '星光',
        link: '/个人随笔/星光/'
      }
    ]
  },
  {
    text: '关于生活',
    items: [
      {
        text: 'I love you',
        link: '/关于生活/I love you/'
      },
      {
        text: '旅行',
        link: '/关于生活/旅行/'
      },
      {
        text: '生活',
        link: '/关于生活/生活/'
      },
      {
        text: '小工具',
        link: '/关于生活/小工具/'
      },
      {
        text: '其他',
        link: '/关于生活/other/'
      }
    ]
  },
  {
    text: '大前端',
    items: [
      {
        text: 'Css',
        link: '/大前端/Css/'
      },
      {
        text: 'JavaScript',
        link: '/大前端/JavaScript/'
      },
      {
        text: 'Vue2',
        link: '/大前端/Vue2/'
      },
      {
        text: 'Vue3',
        link: '/大前端/Vue3/'
      },
      {
        text: '前端自检',
        link: '/大前端/前端自检/'
      },
      {
        text: '前端工具',
        link: '/大前端/前端工具/'
      },
      {
        text: '前端项目',
        link: '/大前端/前端项目/'
      },
      {
        text: '前端其它',
        link: '/大前端/前端其它/'
      }
    ]
  }
]
