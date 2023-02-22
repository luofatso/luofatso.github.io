import nav from './nav'
import sidebar from './sidebar'

export default {
  title: 'FatsoLuo',
  description: 'FatsoLuo',
  srcDir: '../docs',
  outDir: '../dist',
  base: "/blog/",
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/baby.png',
      },
    ],
    ['meta', { name: 'keywords', content: '生活,随笔,HTML,CSS,JavaScript,' }],
  ],
  themeConfig: {
    author: 'FatsoLuo',
    siteTitle: 'FatsoLuo',
    logo: '/baby.png', //导航栏左侧头像
    docFooter: {
      //上下篇文本
      prev: '上一篇',
      next: '下一篇',
    },
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present FatsoLuo',
    },
  },
}
