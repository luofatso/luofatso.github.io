import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'keywords', content: '生活,随笔,HTML,CSS,JavaScript' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  [
    'link',
    {
      rel: 'alternate icon',
      href: '/baby.png',
      type: 'image/png',
      sizes: '16x16',
    },
  ],
  ['meta', { name: 'author', content: 'FatsoLuo' }],
  ['link', { rel: 'mask-icon', href: '/baby.png', color: '#ffffff' }],
  ['meta', { name: 'msapplication-TileImage', content: '/baby.png' }],
  ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
  [
    "script",
    { src: 'https://unpkg.com/valine/dist/Valine.min.js'},
  ],
]
