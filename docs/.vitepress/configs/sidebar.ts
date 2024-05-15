import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/个人随笔/': [
    {
      text: '梦呓',
      // collapsible: true,
      collapsed: true,
      items: [
        { text: '稻香', link: '/个人随笔/梦呓/稻香' },
        { text: '梦呓', link: '/个人随笔/梦呓/梦呓' },
        { text: '窗外', link: '/个人随笔/梦呓/窗外' },
        { text: '追光者', link: '/个人随笔/梦呓/追光者' },
        { text: '叶子', link: '/个人随笔/梦呓/叶子' }
      ]
    },
    {
      text: '星星',
      // collapsible: true,
      collapsed: true,
      items: [
        {
          text: '修远兮',
          link: '/个人随笔/星星/修远兮'
        },
        { text: '星星', link: '/个人随笔/星星/星星' },
        { text: '驿站', link: '/个人随笔/星星/驿站' },
        { text: '错误', link: '/个人随笔/星星/错误' }
      ]
    },
    {
      text: '点点',
      // collapsible: true,
      collapsed: true,
      items: [
        {
          text: '逆向思维',
          link: '/个人随笔/点点/逆向思维'
        }
      ]
    },
    {
      text: '星光',
      // collapsible: true,
      collapsed: true,
      items: [
        { text: '不小心', link: '/个人随笔/星光/不小心' },
        { text: '离舍', link: '/个人随笔/星光/离舍' },
        { text: '傻孩子', link: '/个人随笔/星光/傻孩子' },
        { text: '为，什么', link: '/个人随笔/星光/为，什么' },
        { text: '无限生活', link: '/个人随笔/星光/无限生活' },
        { text: '支离破碎', link: '/个人随笔/星光/支离破碎' }
      ]
    },
    {
      text: '骚动的心',
      // collapsible: true,
      collapsed: true,
      items: [
        { text: '随心所欲', link: '/个人随笔/骚动的心/随心所欲' },
        { text: '静馨', link: '/个人随笔/骚动的心/静馨' },
        { text: '不吵不闹', link: '/个人随笔/骚动的心/不吵不闹' },
        { text: '陈事', link: '/个人随笔/骚动的心/陈事' },
        { text: '何许', link: '/个人随笔/骚动的心/何许' },
        { text: '回去吧，孩子', link: '/个人随笔/骚动的心/回去吧，孩子' },
        { text: '几何', link: '/个人随笔/骚动的心/几何' },
        { text: '离舍', link: '/个人随笔/骚动的心/离舍' },
        { text: '美丽的', link: '/个人随笔/骚动的心/美丽的' },
        { text: '梦蝶', link: '/个人随笔/骚动的心/梦蝶' },
        { text: '梦幻', link: '/个人随笔/骚动的心/梦幻' },
        { text: '梦醒', link: '/个人随笔/骚动的心/梦醒' },
        { text: '明天，你好', link: '/个人随笔/骚动的心/明天，你好' },
        { text: '那谁', link: '/个人随笔/骚动的心/那谁' },
        { text: '朋友', link: '/个人随笔/骚动的心/朋友' },
        { text: '上当受骗', link: '/个人随笔/骚动的心/上当受骗' },
        { text: '随心所欲', link: '/个人随笔/骚动的心/随心所欲' },
        { text: '疼痛', link: '/个人随笔/骚动的心/疼痛' },
        { text: '童话', link: '/个人随笔/骚动的心/童话' },
        { text: '为了我们', link: '/个人随笔/骚动的心/为了我们' },
        { text: '我就是我', link: '/个人随笔/骚动的心/我就是我' },
        { text: '无题', link: '/个人随笔/骚动的心/无题' },
        { text: '心中有谓', link: '/个人随笔/骚动的心/心中有谓' },
        { text: '这世界，这么坏', link: '/个人随笔/骚动的心/这世界，这么坏' },
        { text: '子夜', link: '/个人随笔/骚动的心/子夜' }
      ]
    }
  ],
  '/css/': [
    { text: '玩转CSS', link: '/css/玩转CSS' },
    { text: 'css按钮带五角星', link: '/css/css按钮带五角星' },
    { text: 'css文字渐变', link: '/css/css文字渐变' },
    { text: 'css画正方形', link: '/css/css画正方形' },
    { text: 'css画三角形', link: '/css/css画三角形' },
    { text: 'css超出省略', link: '/css/css超出省略' },
    { text: 'grid布局', link: '/css/grid布局' },
    { text: 'css立体投影', link: '/css/css立体投影' },
    { text: 'css画一个三只小鸟按钮', link: '/css/css画一个三只小鸟按钮' },
    { text: 'css边框动画合集', link: '/css/css边框动画合集' },
    { text: '旋转卡片', link: '/css/旋转卡片' },
    { text: '立方体旋转', link: '/css/立方体旋转' },
    { text: 'css自动打字器', link: '/css/css自动打字器' },
    { text: 'css loading', link: '/css/css-loading' },
    { text: 'css画心', link: '/css/css画心' }
  ],
  '/JS/': [
    { text: 'ES6小技巧', link: '/JS/ES6小技巧' },
    { text: '原生js拖拽', link: '/JS/原生js拖拽' },
    { text: 'JS返回顶部', link: '/JS/js返回顶部的几种解决方案' },
    { text: 'JS片段', link: '/JS/JS片段' },
    { text: '本地储存', link: '/JS/本地储存' }
  ],
  '/vue2/': [
    {
      text: '图片裁剪、压缩、上传、预览组件',
      link: '/vue2/图片裁剪、压缩、上传、预览组件'
    },
    {
      text: 'element树形结构+穿梭框实例',
      link: '/vue2/element树形结构+穿梭框实例'
    },
    { text: 'socket应用', link: '/vue2/socket应用' },
    { text: 'vue transition', link: '/vue2/vue transition' },
    { text: 'vue-clipboard2使用', link: '/vue2/vue-clipboard2使用' },
    { text: 'vue-lottie使用', link: '/vue2/vue-lottie使用' },
    { text: 'vue2 slot', link: '/vue2/vue2 slot' },
    { text: 'Vue锚点双向定位', link: '/vue2/Vue锚点双向定位' },
    { text: 'vue一些小技巧总结', link: '/vue2/vue一些小技巧总结' },
    { text: 'vue中使用音视频', link: '/vue2/vue中使用音视频' }
  ],
  '/vue3/': [
    { text: 'vue3弹幕', link: '/vue3/vue3弹幕' },
    { text: 'vue3打印', link: '/vue3/vue3打印' },
    { text: 'pinia使用', link: '/vue3/pinia使用' },
    { text: 'vue3好用的插件记录', link: '/vue3/vue3好用的插件记录' },
    { text: 'vue3一些语法的使用', link: '/vue3/vue3一些语法的使用' },
    { text: 'vue3知识点巩固', link: '/vue3/vue3知识点巩固' },
    { text: 'vue3中mitt的使用', link: '/vue3/vue3中mitt的使用' },
    { text: 'element-plus多选框', link: '/vue3/element-plus-table多选框' },
    {
      text: 'element-plus-select自定义指令下拉加载更多',
      link: '/vue3/element-plus-select自定义指令下拉加载更多'
    },
    { text: '首屏动画', link: '/vue3/首屏动画' }
  ],
  '/前端工具/': [
    { text: 'ngrok -- 内网穿透使用', link: '/前端工具/ngrok -- 内网穿透使用' },
    { text: 'Chocolatey -- windows包管理', link: '/前端工具/Chocolatey -- windows包管理' },
    { text: 'nvm -- windows管理node', link: '/前端工具/nvm -- windows管理node' },
    { text: 'n -- mac管理node', link: '/前端工具/n -- mac管理node' },
    { text: 'cloc 计算代码行数', link: '/前端工具/cloc 计算代码行数' },
    { text: 'pnpm -- 相关', link: '/前端工具/pnpm -- 相关' },
    { text: 'yarn相关', link: '/前端工具/yarn相关' },
    { text: 'Git常用命令', link: '/前端工具/Git常用命令' },
    { text: 'webpack项目打包、保存内存泄漏', link: '/前端工具/webpack项目打包、保存内存泄漏' },
    { text: 'vscode常用插件', link: '/前端工具/vscode常用插件' },
    { text: 'dayjs使用', link: '/前端工具/dayjs使用' },
    { text: '油猴脚本', link: '/前端工具/油猴脚本' }
  ],
  '/前端其它/': [
    { text: '附件下载地址实现预览', link: '/前端其它/附件下载地址实现预览' },
    { text: '视频点击放大', link: '/前端其它/视频点击放大' },
    { text: '随机彩票', link: '/前端其它/随机彩票' },
    { text: '前端SEQ方案', link: '/前端其它/前端SEQ方案' },
    {
      text: 'amazon-ivs-videojs-threejs广角修复',
      link: '/前端其它/amazon-ivs-videojs-threejs广角修复'
    },
    { text: 'videojs-flvh265直播', link: '/前端其它/videojs-flvh265直播' },
    {
      text: 'doT.js -- JavaScript 模板引擎使用',
      link: '/前端其它/doT.js -- JavaScript 模板引擎使用'
    }
  ],
  '/关于工作/前端自检/': [
    { text: '前端自检系列 --- HTML&CSS', link: '/关于工作/前端自检/HTML&CSS' },
    { text: '前端自检系列 --- JavaScript', link: '/关于工作/前端自检/JavaScript' },
    { text: '前端自检系列 --- 计算机基础', link: '/关于工作/前端自检/计算机基础' },
    { text: '前端自检系列 --- 数据结构和算法', link: '/关于工作/前端自检/数据结构和算法' },
    { text: '前端自检系列 --- 运行环境', link: '/关于工作/前端自检/运行环境' },
    { text: '前端自检系列 --- 框架和类库', link: '/关于工作/前端自检/框架和类库' },
    { text: '前端自检系列 --- 前端工程', link: '/关于工作/前端自检/前端工程' },
    { text: '前端自检系列 --- 项目和业务', link: '/关于工作/前端自检/项目和业务' }
  ],
  '/关于生活/': [
    {
      text: 'I Love You',
      collapsed: true,
      items: [{ text: '求婚', link: '/关于生活/I love you/求婚' }]
    },
    {
      text: '旅行',
      collapsed: true,
      items: [
        { text: '大邑-季禅沟', link: '/关于生活/旅行/大邑-季禅沟' },
        { text: '彭州-狮子山', link: '/关于生活/旅行/彭州-狮子山' },
        { text: '成都-天府-鹅项岭', link: '/关于生活/旅行/成都-天府-鹅项岭' },
        { text: '彭州-葛仙山', link: '/关于生活/旅行/彭州-葛仙山' },
        { text: '大邑-千佛山', link: '/关于生活/旅行/大邑-千佛山' },
        { text: '成都-官塘新村', link: '/关于生活/旅行/成都-官塘新村' },
        { text: '巴朗山-熊猫王国之巅', link: '/关于生活/旅行/巴朗山-熊猫王国之巅' },
        { text: '四姑娘山-双桥沟', link: '/关于生活/旅行/四姑娘山-双桥沟' },
        { text: '康定-木格措', link: '/关于生活/旅行/康定-木格措' },
        { text: '大邑-龙窝子', link: '/关于生活/旅行/大邑-龙窝子' },
        { text: '乐山', link: '/关于生活/旅行/乐山' },
        { text: '成都-东郊记忆', link: '/关于生活/旅行/成都-东郊记忆' },
        { text: '成都-锦里', link: '/关于生活/旅行/成都-锦里' },
        { text: '大邑-云中屋', link: '/关于生活/旅行/大邑-云中屋' },
        { text: '成都-龙泉-枇杷沟', link: '/关于生活/旅行/成都-龙泉-枇杷沟' },
        { text: '新津-斑竹林', link: '/关于生活/旅行/新津-斑竹林' },
        { text: '成都-龙泉-紫霞山', link: '/关于生活/旅行/成都-龙泉-紫霞山' },
        { text: '成都-兴隆湖 ', link: '/关于生活/旅行/成都-兴隆湖' },
        { text: '彭州-阳平玄观竹海', link: '/关于生活/旅行/彭州-阳平玄观竹海' }
      ]
    },
    {
      text: '生活',
      collapsed: true,
      items: [
        { text: '每日一点', link: '/关于生活/生活/每日一点' },
        { text: '间隙', link: '/关于生活/生活/间隙' },
        { text: '露台阳光', link: '/关于生活/生活/露台阳光' }
      ]
    },
    {
      text: '小工具',
      collapsed: true,
      items: [
        { text: 'BMI计算器', link: '/关于生活/小工具/bmi' },
        { text: '阴阳历查询', link: '/关于生活/小工具/阴阳历查询' },
        { text: '倒计时查询', link: '/关于生活/小工具/date' },
        { text: '吃什么', link: '/关于生活/小工具/eat' }
      ]
    },
    {
      text: '其他',
      collapsed: true,
      items: [
        { text: '人类和人生的意义', link: '/关于生活/other/人类和人生的意义' },
        { text: '网络社区的悲剧', link: '/关于生活/other/网络社区的悲剧' },
        { text: '什么行业适合创业', link: '/关于生活/other/什么行业适合创业' },
        { text: '失业难以避免，重构人生规划', link: '/关于生活/other/失业难以避免，重构人生规划' }
      ]
    }
  ]
  // '/大前端/': [
  //   {
  //     text: 'CSS',
  //     collapsed: true,
  //     items: [
  //       { text: '玩转CSS', link: '/大前端/css/玩转CSS' },
  //       { text: 'css按钮带五角星', link: '/大前端/css/css按钮带五角星' },
  //       { text: 'css文字渐变', link: '/大前端/css/css文字渐变' },
  //       { text: 'css画正方形', link: '/大前端/css/css画正方形' },
  //       { text: 'css画三角形', link: '/大前端/css/css画三角形' },
  //       { text: 'css超出省略', link: '/大前端/css/css超出省略' },
  //       { text: 'grid布局', link: '/大前端/css/grid布局' },
  //       { text: 'css立体投影', link: '/大前端/css/css立体投影' },
  //       { text: 'css画一个三只小鸟按钮', link: '/大前端/css/css画一个三只小鸟按钮' },
  //       { text: 'css边框动画合集', link: '/大前端/css/css边框动画合集' },
  //       { text: '旋转卡片', link: '/大前端/css/旋转卡片' },
  //       { text: '立方体旋转', link: '/大前端/css/立方体旋转' },
  //       { text: 'css自动打字器', link: '/大前端/css/css自动打字器' },
  //       { text: 'css loading', link: '/大前端/css/css-loading' },
  //       { text: 'css画心', link: '/大前端/css/css画心' }
  //     ]
  //   },
  // ]
}
