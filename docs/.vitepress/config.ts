import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  title: 'FatsoLuo',
  description: 'FatsoLuo的个人博客，记录随笔与学习笔记，大前端相关的知识等',
  srcDir: '../docs',
  outDir: '../dist',
  base: "/blog/",
  cleanUrls: true,
  head: [
    ['meta', { name: 'keywords', content: '生活,随笔,HTML,CSS,JavaScript' }],
    ['link', { rel: 'icon', href: '/baby.png', type: 'image/png' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/baby.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    ['meta', { name: 'author', content: 'FatsoLuo' }],
    ['link', { rel: 'mask-icon', href: '/baby.png', color: '#ffffff' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/baby.png', sizes: '180x180' }
    ],
  ],
  themeConfig: {
    // author: 'FatsoLuo',
    siteTitle: 'FatsoLuo',
    logo: '/baby.png', //导航栏左侧头像
    docFooter: {
      //上下篇文本
      prev: '上一篇',
      next: '下一篇',
    },
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present FatsoLuo',
    },
  },
  vite: {
    server: {
      port: 8080,
      host: '0.0.0.0'
    }
  },
})
