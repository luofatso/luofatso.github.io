import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  title: 'LuoFatso',
  description: 'LuoFatso的个人博客，记录随笔与学习笔记，大前端相关的知识等',
  srcDir: '../docs',
  outDir: '../dist',
  base: '/',
  cleanUrls: true,
  head,
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最近更新时间',
    i18nRouting: false,
    // author: 'LuoFatso',
    siteTitle: 'LuoFatso',
    logo: '/baby.png', //导航栏左侧头像
    docFooter: {
      //上下篇文本
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present LuoFatso'
    }
  },
  vite: {
    server: {
      port: 8000,
      host: '0.0.0.0'
    }
  }
})
