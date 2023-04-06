import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '关于我', link: '/about' },
  { text: '网站导航', link: '/nav' },
  {
    text: '个人随笔',
    items: [
      {
        text: '骚动的心',
        link: '/个人随笔/骚动的心/',
        items: [
          { text: '叶子', link: '/个人随笔/骚动的心/叶子' },
          { text: '随心所欲', link: '/个人随笔/骚动的心/随心所欲' },
          { text: '静馨', link: '/个人随笔/骚动的心/静馨' },
        ],
      },
      {
        text: '星星',
        link: '/个人随笔/星星/',
        items: [
          { text: '修远兮', link: '/个人随笔/星星/修远兮' },
          { text: '星星', link: '/个人随笔/星星/星星' },
          { text: '驿站', link: '/个人随笔/星星/驿站' },
        ],
      },
      {
        text: '星光',
        link: '/个人随笔/星光/'
      }
    ],
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
        text: '小工具',
        link: '/关于生活/小工具/'
      }
    ],
  },
  {
    text: '大前端',
    items: [
      {
        text: 'CSS',
        link: '/css/'
      },
      {
        text: 'JavaScript',
        link: '/JS/'
      },
      {
        text: 'Vue2',
        link: '/vue2/'
      },
      {
        text: 'Vue3',
        link: '/vue3/'
      },
      {
        text: '工具',
        link: '/前端工具/'
      },
      {
        text: '其它',
        link: '/前端其它/'
      },
      {
        text: '总结',
        link: '/项目总结/'
      },
    ],
  },
]
