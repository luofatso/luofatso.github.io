---
outline: [2, 3]
---

# 前端自检系列 --- HTML&CSS

[[TOC]]

## 一、HTML

### 1. 从规范的角度理解HTML，从分类和语义的角度使用标签

::: details 参考
HTML 的全称为超文本标记语言，是一种标记语言。用于描述网页的结构和内容。HTML 规范由 W3C（World Wide Web Consortium）制定，并不断更新和完善。

HTML 规范定义了一系列的标签（也称为元素），用于构建网页的结构和内容。这些标签按照其用途和语义可以分为不同的分类，如以下几种常见的分类：

1. 结构化标签：这类标签用于定义网页的整体结构，包括 `<header>`、`<nav>`、`<main>`、`<aside>`、`<footer>` 等。这些标签有助于明确页面的结构，提供语义信息，使页面更加可读性和可访问性。

2. 文本标签：这类标签用于定义文本内容的呈现方式和语义，如 `<p>`、`<h1>`、`<h2>`、`<em>`、`<strong>`、`<blockquote>` 等。这些标签有助于传达文本的语义信息，使文本内容更具有结构性和语义性。

3. 列表标签：这类标签用于定义列表，包括无序列表 `<ul>`、有序列表 `<ol>` 和列表项 `<li>`。这些标签用于构建有序或无序的列表结构。

4. 链接标签：这类标签用于定义链接和导航，如 `<a>`、`<nav>`、`<link>` 等。这些标签用于定义超链接、导航菜单等，提供页面间的导航功能和语义信息。

5. 媒体标签：这类标签用于展示媒体资源，如图片 `<img>`、视频 `<video>`、音频 `<audio>` 等。这些标签用于嵌入和展示图片、视频、音频等媒体内容。

6. 表单标签：这类标签用于构建用户输入表单，如 `<form>`、`<input>`、`<textarea>`、`<select>`、`<button>` 等。这些标签用于构建表单，实现用户输入和数据传递的功能。

除了上述常见分类，还有一些重要的语义标签：

- `<section>`：表示文档中的一个独立章节，通常有标题。当有语义更具体的标签（如 `<article>`、`<nav>`）时应优先使用它们
- `<article>`：表示独立的、完整的内容块，如一篇博客文章、一条评论、一个帖子。可以独立于页面其余内容分发或复用
- `<figure>` / `<figcaption>`：`<figure>` 包裹插图、图表、代码块等独立内容，`<figcaption>` 为其提供标题说明。语义绑定，便于辅助技术理解图文关系
- `<time>`：标注日期和时间，`datetime` 属性提供机器可读格式（如 `datetime="2024-01-15"`），利于 SEO 和浏览器识别
- `<mark>`：高亮标记文本（如搜索结果中的关键词），自带黄色背景，自带语义含义
- `<details>` / `<summary>`：原生手风琴/折叠组件，无需 JS 即可展开/收起内容。`<summary>` 定义标题，其余内容初始隐藏
- `<abbr>`：缩写标记，`title` 属性提供全称，鼠标悬停显示，辅助技术可朗读全称
- `<data>`：将内容与机器可读的值关联，通过 `value` 属性提供结构化数据
- `<datalist>`：为 `<input>` 提供输入建议/自动补全列表，配合 `list` 属性使用
- `<output>`：表示计算结果或用户操作的结果输出，配合表单使用

#### 语义化 HTML 的核心好处

- **可访问性（Accessibility）**：屏幕阅读器能正确理解页面结构，帮助视障用户导航
- **SEO**：搜索引擎更准确地理解页面内容层次，页面更容易被收录和排位
- **可维护性**：代码结构清晰，其他开发者更容易理解和修改
- **向后兼容**：不支持的浏览器会将语义标签视为普通 `<div>` 处理，不会破坏页面

通过理解 HTML 规范，并根据标签的分类和语义合理使用不同的标签，可以使网页的**结构更加清晰、语义更加明确**，从而**提高网页的可读性、可维护性和可访问性**。同时，合理使用标签还**有助于搜索引擎优化（SEO）**，提高网页的搜索排名。
:::

### 2. 常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式

::: details 参考

#### 常用标签的默认样式

**块级元素：**

- `<div>`：`display: block`，无默认 margin/padding
- `<h1>~<h6>`：`display: block`，有默认上下 margin（约 0.67em 到 2em 不等），`font-weight: bold`，字号递减
- `<p>`：`display: block`，有默认上下 margin（约 1em）
- `<ul>`、`<ol>`：`display: block`，有默认上下 margin，`padding-left: 40px`（Chrome）或 `padding-left: 40px`（不同浏览器有差异）
- `<li>`：`display: list-item`，`list-style-type` 默认 disc（ul）/ decimal（ol）

**行内元素：**

- `<a>`：`display: inline`，`color: blue`（未访问），`text-decoration: underline`，`cursor: pointer`
- `<span>`：`display: inline`，无默认样式
- `<strong>`：`display: inline`，`font-weight: bold`
- `<em>`：`display: inline`，`font-style: italic`

**表单元素：**

- `<input>`：默认 `display: inline-block`，默认有 border、padding，不同 type 表现不同
- `<button>`：默认 `type="submit"`（重要！在表单中点击会触发表单提交）
- `<textarea>`：`display: inline-block`，默认`font-family: monospace`，可拖拽缩放 resize
- `<select>`：`display: inline-block`，外观在不同操作系统上完全不一致

#### 不同浏览器的差异

- **表单元素样式**是浏览器差异最大的区域：`<input>` 的 placeholder 颜色、focus 时的 outline、`<select>` 下拉箭头等在各浏览器中表现各异
- **滚动条样式**：Chrome/Safari 支持 `::-webkit-scrollbar` 自定义，Firefox 使用 `scrollbar-width` 和 `scrollbar-color`
- **默认字体**：Windows 默认微软雅黑/宋体，macOS 默认苹方/SF，Android 和 iOS 各有默认系统字体
- **`<button>` 的默认 type**：IE 下 button 默认 type 是 `button`，其他浏览器是 `submit`（这是经典坑）
- **`<img>` 底部的空隙**：因为 img 是 inline 元素，基线对齐导致底部有 3-5px 空白（需 `display: block` 或 `vertical-align: middle/top` 解决）

#### 处理浏览器兼容问题的方式

1. **normalize.css / reset.css**：统一各浏览器默认样式差异，normalize 保留有用默认值，reset 全部清除
2. **Autoprefixer**：自动添加 CSS 浏览器前缀（`-webkit-`、`-moz-` 等）
3. **CSS hack**：针对特定浏览器写特殊样式
   - IE 条件注释：`<!--[if IE]>`（仅 IE9 以下）
   - 属性选择器 hack：`_property: value`（IE6）、`*property: value`（IE6/7）
   - 媒体查询 hack：`@media \0screen { }` 针对 IE8-10
4. **`@supports` 特性检测**：检测浏览器是否支持某个 CSS 属性，不支持时提供降级方案
5. **Polyfill / PostCSS**：用 JS 或构建工具为不支持的特性提供兼容实现
6. **caniuse.com**：查询 API 在各浏览器的支持情况，决定是否使用
7. **渐进增强（Progressive Enhancement）**：先保证基础功能在所有浏览器可用，再为现代浏览器添加增强体验
   :::

### 3. 元信息类标签(head、title、meta)的使用目的和配置方法

::: details 参考
元信息类标签（head、title、meta）是用于在 HTML 文档中定义页面的元信息的标签，其作用是**为浏览器、搜索引擎等提供关于页面的信息，以控制页面的展示和行为**。

#### 常用 meta 标签配置

```html
<head>
  <!-- 字符编码（必须放第一行，防止乱码） -->
  <meta charset="UTF-8" />

  <!-- 视口（移动端适配必备） -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO 相关 -->
  <meta name="description" content="页面描述，约 150-160 字符，搜索引擎结果摘要" />
  <meta name="keywords" content="关键词1, 关键词2" />
  <meta name="author" content="作者名" />

  <!-- 搜索引擎抓取控制 -->
  <meta name="robots" content="index, follow" />

  <!-- 浏览器主题色（移动端状态栏颜色） -->
  <meta name="theme-color" content="#1890ff" />

  <!-- IE 兼容：使用最新渲染引擎 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <!-- 禁止移动端自动将数字识别为电话号码 -->
  <meta name="format-detection" content="telephone=no" />
</head>
```

#### Open Graph 协议（社交分享优化）

控制在微信、Facebook、Twitter 等平台分享页面时的标题、描述和缩略图：

```html
<meta property="og:title" content="页面标题" />
<meta property="og:description" content="页面描述" />
<meta property="og:image" content="https://example.com/og-image.jpg" />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="站点名称" />
```

#### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="标题" />
<meta name="twitter:description" content="描述" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```

#### 常用 link 标签

```html
<!-- 网站图标 -->
<link rel="icon" href="/favicon.ico" sizes="32x32" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- 性能优化 -->
<link rel="dns-prefetch" href="//api.example.com" />
<!-- DNS 预解析 -->
<link rel="preconnect" href="https://api.example.com" />
<!-- 预连接（DNS+TLS+TCP） -->
<link rel="preload" href="/font.woff2" as="font" crossorigin />
<!-- 预加载关键资源 -->

<!-- SEO -->
<link rel="canonical" href="https://example.com/page" />
<!-- 规范 URL，避免重复内容 -->

<!-- 样式表 -->
<link rel="stylesheet" href="/style.css" />

<!-- RSS -->
<link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
```

#### title 标签

```html
<title>页面标题 - 站点名</title>
```

- 每个页面必须有唯一的 `<title>`
- SEO 最重要的 on-page 因素之一，出现在搜索结果标题和浏览器标签页
- 建议长度 50-60 字符，超长会被截断
- 格式建议：「主要内容 - 次要信息 | 品牌名」
  :::

### 4. HTML5离线缓存原理

::: details 参考
HTML5离线缓存（Offline Cache）是一种在Web应用程序中，允许浏览器在离线状态下缓存页面和资源，使用户能够在没有网络连接时继续访问应用的技术。

#### 原理

- 离线缓存清单：在应用的主HTML文件中，通过使用特定的HTML5应用缓存清单文件（通常命名为cache.manifest）来定义需要离线缓存的页面和资源。

- 缓存更新检查：浏览器会根据应用缓存清单文件的设置，定期检查缓存的更新。可以通过在HTML标签的manifest属性中指定缓存清单文件的URL来启用离线缓存。

- 缓存资源下载：在首次访问应用时，浏览器会下载缓存清单文件中列出的页面和资源，并存储在本地缓存中。

- 离线访问：当应用处于离线状态时，浏览器会优先从本地缓存中加载页面和资源，从而实现在没有网络连接时继续访问应用的功能。

- 缓存更新：当应用处于在线状态时，浏览器会根据缓存清单文件的设置，检查缓存的更新，并自动下载最新的页面和资源，从而保持缓存的更新。

> **注意：AppCache 已被废弃（deprecated）**，不再推荐使用。现代离线缓存方案应使用 **Service Workers + Cache API**。

#### Service Workers 替代方案

Service Workers 是运行在浏览器后台的独立脚本，拦截网络请求并实现缓存策略。

**生命周期：**

1. **install**：SW 首次注册时触发，适合预缓存静态资源
2. **activate**：安装完成后触发，适合清理旧缓存
3. **fetch**：拦截页面发出的所有网络请求，决定从缓存还是网络返回

**基本示例：**

```js
// 注册 Service Worker
navigator.serviceWorker.register('/sw.js')

// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => cache.addAll(['/', '/styles.css', '/script.js']))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
})
```

**常用缓存策略：**

- **Cache First**：先查缓存，缓存无则请求网络（适合静态资源）
- **Network First**：先请求网络，失败则用缓存（适合 API 数据）
- **Stale While Revalidate**：立即返回缓存，同时请求网络更新缓存（适合平衡体验与新鲜度）
  :::

### 5. 可以使用Canvas API、SVG等绘制高性能的动画

::: details 参考

#### Canvas API

Canvas 是 HTML5 提供的位图绘图 API，通过 JavaScript 在 `<canvas>` 元素上绘制图形。

**基本用法：**

```js
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

// 绘制矩形
ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 100, 50)

// 绘制圆
ctx.beginPath()
ctx.arc(150, 75, 50, 0, Math.PI * 2)
ctx.fillStyle = 'blue'
ctx.fill()

// 绘制文字
ctx.font = '20px Arial'
ctx.fillStyle = 'black'
ctx.fillText('Hello Canvas', 200, 50)
```

**动画实现：**

```js
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) // 清空画布
  // 更新图形位置...
  requestAnimationFrame(animate) // 递归调用，约 60fps
}
animate()
```

- `requestAnimationFrame` 相比 `setInterval` 更高效：与屏幕刷新率同步、页面不可见时自动暂停
- Canvas 是**逐帧动画**，每帧都需要清空画布并重新绘制
- Canvas 适合**像素级操作**、粒子效果、游戏渲染

#### SVG 动画

SVG 是矢量图形，基于 XML，图形元素保留在 DOM 中，可通过 CSS 和 JS 操作。

**SVG 基本元素：**

```svg
<svg width="200" height="200">
  <rect x="10" y="10" width="100" height="50" fill="red" />
  <circle cx="100" cy="100" r="50" fill="blue" />
  <line x1="0" y1="0" x2="200" y2="200" stroke="black" />
  <path d="M 10 10 L 50 100 L 90 10 Z" fill="green" />
  <text x="10" y="180" fill="black">Hello SVG</text>
</svg>
```

**SVG 动画方式：**

1. **CSS 动画**（最简单）：

```css
.circle {
  animation: move 2s infinite alternate;
}
@keyframes move {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
```

2. **SMIL 动画**（声明式动画标签）：

```svg
<circle cx="50" cy="50" r="30" fill="blue">
  <animate attributeName="cx" from="50" to="200" dur="2s" repeatCount="indefinite" />
  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
</circle>
```

3. **JavaScript 操作**：直接操作 SVG DOM 节点（如 D3.js、GSAP）

#### Canvas vs SVG 对比

| 特性     | Canvas                             | SVG                                |
| -------- | ---------------------------------- | ---------------------------------- |
| 图形类型 | 位图（像素）                       | 矢量图                             |
| 缩放     | 放大会失真                         | 无损缩放                           |
| DOM 交互 | 无法绑定事件到单个图形             | 可绑定事件到每个元素               |
| 性能     | 大量对象时性能好                   | 对象多时 DOM 节点多，性能下降      |
| 适用场景 | 游戏、粒子效果、图像处理、视频处理 | 图标、图表、数据可视化、交互式图形 |
| 修改方式 | 擦除重绘                           | 直接修改属性/样式                  |
| 无障碍   | 需手动提供 fallback 内容           | 自带 DOM 结构，可读性更好          |

:::

### 6. 本地存储

::: details 参考
| 存储机制 | 存储容量 | 存储期限 | 数据类型和限制 | 适用场景 |
|---------------|------------------------|-----------------------------|------------------------------|-----------------------|
| Cookies | 较小，通常为几KB。 | 可设置过期时间，会话或持久。 | 只能存储字符串，有大小限制。 | 会话信息、用户跟踪、认证令牌等 |
| LocalStorage | 较大，通常为5MB至10MB。| 永久存储，除非用户清除缓存。 | 只能存储字符串，需要序列化。 | 缓存数据、偏好设置、历史记录等 |
| SessionStorage| 较大，通常为5MB至10MB。| 存储在会话期间，关闭会话清除。 | 只能存储字符串，需要序列化。 | 临时保存用户输入、表单数据等 |
| IndexedDB | 较大（通常上百 MB） | 永久存储，除非用户清除 | 可存储对象、文件、二进制数据 | 大型应用数据存储、离线应用、PWA |

#### 各存储机制的关键特性

**Cookie：**

- 每次 HTTP 请求都会自动携带在请求头中，影响请求体积
- 作用域由 `domain` 和 `path` 控制
- 安全属性：
  - `HttpOnly`：禁止 JavaScript 访问（`document.cookie`），仅 HTTP 传输，**防御 XSS 窃取 Cookie**
  - `Secure`：仅 HTTPS 连接传输 Cookie
  - `SameSite`：控制跨站请求时是否携带 Cookie
    - `Strict`：完全禁止跨站携带，安全性最高
    - `Lax`：大部分跨站场景不携带，但导航（GET）时允许，浏览器默认值
    - `None`：跨站也携带，需同时设置 `Secure`
- `domain` 设为父域可实现子域名间共享（如 `.example.com`）

**LocalStorage：**

- 持久化存储，浏览器关闭不清除，除非手动清除或代码移除
- 同步 API（`setItem`、`getItem`、`removeItem`），会阻塞主线程，不宜存储大量数据或高频操作
- 同源策略限制，不同域名/协议/端口不可访问
- 不会随 HTTP 请求自动发送（相比 Cookie 的优势）
- 只能存储字符串，需 `JSON.stringify` / `JSON.parse` 处理复杂数据

**SessionStorage：**

- 与 LocalStorage API 相同，但数据仅存在于当前标签页会话期间
- 关闭标签页即清除，刷新页面数据保留
- 多标签页之间独立隔离（每个标签页有独立的 SessionStorage）

**IndexedDB：**

- 异步 API，不会阻塞主线程
- 支持事务、索引、游标查询
- 适合存储大量结构化数据、离线应用的完整数据层

```js
// 基本使用
const request = indexedDB.open('myDB', 1)
request.onsuccess = (event) => {
  const db = event.target.result
  const tx = db.transaction('store', 'readwrite')
  tx.objectStore('store').put({ id: 1, name: 'test' })
}
```

:::

## 二、CSS

### 1. CSS盒模型，在不同浏览器的差异

::: details 参考

#### 两种盒模型

**标准盒子模型（content-box，W3C 标准）：**

```
实际占用宽度 = width + padding-left + padding-right + border-left + border-right
实际占用高度 = height + padding-top + padding-bottom + border-top + border-bottom
```

- `width` / `height` 仅作用于内容区域（content）
- `padding` 和 `border` 在内容区域之外额外增加

**替代盒子模型（border-box，IE 盒模型）：**

```
实际占用宽度 = width（包含 content + padding + border）
实际占用高度 = height（包含 content + padding + border）
```

- `width` / `height` 包含了 content、padding 和 border
- 设置 `width: 200px` 后，不管 padding 和 border 怎么变，实际占用宽度始终是 200px

#### box-sizing 属性

```css
/* 标准盒模型（默认值） */
box-sizing: content-box;

/* IE / 替代盒模型 */
box-sizing: border-box;
```

#### 现代浏览器差异

- 现代浏览器（Chrome、Firefox、Safari、Edge）均已统一支持两种模式，默认均为 `content-box`
- 旧版 IE（IE6/7）在标准模式下也使用 `content-box`，但 quirks 模式下使用 `border-box`
- 现在不存在真正意义上的"浏览器盒模型差异"，选择哪种模式由 CSS 控制

#### 最佳实践

全局使用 `border-box`，布局计算更直观：

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

这样设置 `width: 50%` 就是实实在在的 50%，不用再心算 padding 和 border。
:::

### 2. CSS所有选择器及其优先级、使用场景，哪些可以继承，如何运用at规则

::: details 参考
ID 选择器 > 类选择器、属性选择器、伪类选择器 > 元素选择器、伪元素选择器 > 组合选择器、通用兄弟选择器。

#### 选择器类型完整列表

**基础选择器：**

- 元素选择器：`div`、`p`、`span`
- ID 选择器：`#header`
- 类选择器：`.container`
- 通配符选择器：`*`

**属性选择器：**

- `[attr]`：有该属性
- `[attr="value"]`：属性等于指定值
- `[attr^="value"]`：属性以指定值开头
- `[attr$="value"]`：属性以指定值结尾
- `[attr*="value"]`：属性包含指定值
- `[attr~="value"]`：属性值包含独立单词（空格分隔）

**组合选择器：**

- 后代选择器：`div p`（空格，选中所有后代）
- 子代选择器：`div > p`（只选直接子元素）
- 相邻兄弟选择器：`h1 + p`（紧接其后的一个兄弟）
- 通用兄弟选择器：`h1 ~ p`（后面所有兄弟）
- 交集选择器：`div.active`（同时满足）
- 并集选择器：`div, p`（满足其一即可）

**伪类选择器：** 见 CSS #3

**伪元素选择器：** 见 CSS #3

#### 优先级计算（Specificity）

优先级是一个四元组 `(a, b, c, d)`，从高位到低位比较：

| 位  | 对应选择器   | 示例                                     |
| --- | ------------ | ---------------------------------------- |
| a   | 内联样式     | `style="color: red"` → (1,0,0,0)         |
| b   | ID 选择器    | `#header` → (0,1,0,0)                    |
| c   | 类/属性/伪类 | `.class`、`[attr]`、`:hover` → (0,0,1,0) |
| d   | 元素/伪元素  | `div`、`::before` → (0,0,0,1)            |

> `*`（通配符）、组合器（`>`、`+`、`~`、` `）不增加优先级。`:where()` 优先级永远为 0。`:is()` 和 `:not()` 取参数中最高优先级。

**计算示例：**

```css
/* (0,0,0,1) */
p {
}

/* (0,0,1,1) — 1个类 + 1个元素 */
div .title {
}

/* (0,1,1,0) — 1个ID + 1个伪类 */
#header a:hover {
}

/* :is() 取参数中最高优先级——这里就是 #c = (0,1,0,0) */
:is(.a, .b, #c) {
}

/* :where() 永远不增加优先级，用来做低优先级默认值 */
:where(.a, #b) {
} /* 优先级 = 0 */
```

**关键规则：**

- (0,1,0,0) > (0,0,9,9) — 哪怕 c 位堆到 9，也比不上 b 位的 1
- 同优先级时后声明者覆盖先声明者
- `!important` 覆盖一切但破坏优先级体系，尽量不用，优先用选择器层级管理
- `@layer` 也能控制优先级（层级越后声明优先级越高）

#### 可继承的 CSS 属性

**可继承：**

- 字体：`font-family`、`font-size`、`font-weight`、`font-style`
- 文本：`color`、`text-align`、`text-indent`、`text-decoration`、`text-transform`、`letter-spacing`、`word-spacing`、`white-space`、`direction`
- 列表：`list-style` 相关
- 其他：`line-height`、`visibility`、`cursor`

**不可继承（常见误区）：** `border`、`padding`、`margin`、`width`、`height`、`background`（含 `background-color`）、`position`、`display`

**强制继承：** 任何属性都可以用 `inherit` 关键字强制继承，用 `initial` 恢复默认值，用 `unset` 将可继承属性设为 inherit、不可继承属性设为 initial。

#### at 规则

| 规则         | 用途                                      |
| ------------ | ----------------------------------------- |
| `@media`     | 根据设备/视口条件应用样式（响应式核心）   |
| `@import`    | 导入外部 CSS 文件（有性能开销，不推荐）   |
| `@font-face` | 定义自定义字体                            |
| `@keyframes` | 定义动画关键帧                            |
| `@supports`  | 检测浏览器是否支持某 CSS 属性（特性检测） |
| `@layer`     | 通过命名的层级管理 CSS 优先级（级联层）   |
| `@container` | 基于父容器尺寸应用样式（组件级响应式）    |
| `@scope`     | 限定样式作用范围，避免选择器污染全局      |

**@layer 示例：**

```css
/* 声明越后的 layer 优先级越高 */
@layer reset, base, components, utilities;

@layer utilities {
  .mt-0 {
    margin-top: 0;
  }
}
```

**@container 示例：**

```css
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

:::

### 3. CSS伪类和伪元素有哪些，它们的区别和实际应用

::: details 参考
伪类用于选择元素的特定状态或行为，伪元素的语法为单冒号 `:pseudo-class`（CSS3 后伪元素推荐用双冒号，但单冒号也兼容）。

伪元素用于在特定位置生成虚拟元素/内容，语法为双冒号 `::pseudo-element`（CSS2 的 `::before`/`::after`/`::first-line`/`::first-letter` 也兼容单冒号写法）。

#### 常用伪类分类

**状态伪类（用户交互）：**

- `:hover` — 鼠标悬停
- `:active` — 元素被激活（鼠标按下）
- `:focus` — 元素获得焦点
- `:focus-visible` — 仅键盘导航时显示焦点样式（不会在鼠标点击时出现难看的 focus ring）
- `:focus-within` — 自身或任意后代获得焦点时匹配
- `:visited` / `:link` — 链接访问状态

**表单状态伪类：**

- `:checked` — 选中的 checkbox/radio/option
- `:disabled` / `:enabled` — 禁用/启用状态
- `:required` / `:optional` — 必填/可选
- `:valid` / `:invalid` — 表单验证状态
- `:placeholder-shown` — placeholder 可见时
- `:default` — 默认选项
- `:in-range` / `:out-of-range` — 数值范围

**结构伪类（位置/顺序）：**

- `:first-child` / `:last-child` — 第一个/最后一个子元素
- `:first-of-type` / `:last-of-type` — 同类型中第一个/最后一个
- `:nth-child(n)` — 第 n 个子元素（支持 odd/even/公式 an+b）
- `:nth-of-type(n)` — 同类型中第 n 个
- `:only-child` / `:only-of-type` — 唯一子元素 / 同类型唯一
- `:empty` — 没有子元素（含文本节点）的元素
- `:root` — 文档根元素（html）

**逻辑/关系伪类：**

- `:not(selector)` — 排除匹配的元素（不支持嵌套 `:not`）
- `:is(selector, selector)` — 匹配任一选择器，优先级取最高
- `:where(selector, selector)` — 匹配任一选择器，优先级为 0
- `:has(selector)` — **父选择器**：匹配包含指定后代的元素（CSS4，现代浏览器已支持）

```css
/* 选择包含 img 子元素的 .card */
.card:has(img) {
  padding: 0;
}

/* 选择有展开 .dropdown 的导航项 */
.nav-item:has(.dropdown.open) {
  background: #f0f0f0;
}
```

**其他伪类：**

- `:target` — 匹配 URL hash 指向的元素（锚点目标）
- `:lang(xx)` — 按语言选择
- `:nth-col()` / `:nth-last-col()` — 表格列选择（实验性）

#### 常用伪元素

- `::before` / `::after` — 在元素内容前后插入虚拟内容（必须有 `content` 属性，哪怕是空串）
- `::first-line` — 文本第一行
- `::first-letter` — 文本第一个字符
- `::placeholder` — 表单 placeholder 文本样式
- `::selection` — 用户选中的文本高亮样式（`background`/`color`/`text-shadow`）
- `::marker` — 列表项标记（`<li>` 前面的小圆点或数字）
- `::backdrop` — 全屏元素（`<dialog>`）或 `backdrop-filter` 后面的背景

#### 伪类 vs 伪元素区别

|          | 伪类                       | 伪元素                                       |
| -------- | -------------------------- | -------------------------------------------- |
| 本质     | 选择已有元素的**特定状态** | 创建**虚拟元素**                             |
| 数量     | 同一元素可同时匹配多个     | 同一元素最多一个 `::before` + 一个 `::after` |
| 语法     | 单冒号 `:`                 | 双冒号 `::`（CSS2 的兼容单冒号）             |
| DOM 中   | 不改变 DOM                 | 不改变 DOM（虚拟的）                         |
| 典型用途 | 交互态、结构位置           | 装饰内容、文本特效、清除浮动                 |

#### 实际应用

- `:hover` / `:focus-visible`：交互反馈、按钮/链接悬停态
- `:nth-child`：斑马纹表格、列表交替样式
- `:checked`：纯 CSS 切换开关、tab 切换
- `:has()`：基于子元素状态调整父级样式
- `::before` / `::after`：图标装饰、tooltip、clearfix、额外视觉元素
- `::placeholder`：输入框占位文字样式定制
- `::selection`：自定义选中文字的颜色和背景
- `::backdrop`：对话框/模态框背景遮罩样式
  :::

### 4.HTML文档流的排版规则，CSS几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理

::: details 参考

#### 排版规则

1. **行内元素**：在一行内从左到右依次排列，宽度由内容决定。无法设置 `width`/`height`，`margin`/`padding` 仅水平方向有效。
2. **块级元素**：独占一行，从上到下依次排列，宽度默认为父元素的宽度。可设置 `width`/`height`/`margin`/`padding`。
3. **浮动元素（float）**：脱离正常文档流，向左或向右浮动，直到碰到容器边缘或其他浮动元素。后续内容会环绕浮动元素（文字环绕效果）。
4. **定位元素**：通过 `position` 属性脱离或偏移文档流，具体行为取决于定位类型。
5. **盒模型**：每个元素都是一个矩形盒子，由 content、padding、border、margin 四层组成。

#### 浮动（float）详解

```css
.element {
  float: left | right | none;
}
```

- 浮动元素脱离正常文档流，父容器高度不自动包含浮动子元素（**高度塌陷**）
- 后续的非浮动块级元素会占据浮动元素原本的位置，但文字会环绕浮动元素

**清除浮动的方法：**

```css
/* 方法 1：clearfix（最常用） */
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

/* 方法 2：父容器触发 BFC */
.parent {
  overflow: hidden; /* 或 auto */
}

/* 方法 3：空元素清除 */
<div style="clear: both;"></div>

/* 方法 4：display: flow-root（现代方案，原生创建 BFC） */
.parent {
  display: flow-root;
}
```

#### 五种定位方式详解

| 定位       | 参照物               | 脱离文档流       | 特点                                                           |
| ---------- | -------------------- | ---------------- | -------------------------------------------------------------- |
| `static`   | 无（默认值）         | 否               | 按文档流排列，`top/left/z-index` 无效                          |
| `relative` | 元素自身原位置       | 否（保留原空间） | 偏移后原空间保留，不影响其他元素                               |
| `absolute` | 最近的非 static 祖先 | 是               | 若无定位祖先则参照 `<html>`；宽度收缩为内容宽度                |
| `fixed`    | 浏览器视口           | 是               | 不随滚动移动；宽度收缩为内容宽度                               |
| `sticky`   | 最近的滚动祖先       | 否（但切换）     | 滚动到阈值前 static 行为，超过后 fixed 行为；需设置 `top` 等值 |

```css
/* sticky 典型：吸顶导航 */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* absolute 典型：相对父容器定位 */
.parent {
  position: relative; /* 作为 absolute 子元素的参照 */
}
.child {
  position: absolute;
  top: 100%;
  left: 0;
}
```

**定位选择原则：**

- 仅需偏移元素且保留原空间 → `relative`
- 相对于最近定位祖先定位 → `absolute`
- 始终固定在视口（返回顶部按钮、弹窗遮罩） → `fixed`
- 滚动到某位置后固定（吸顶导航） → `sticky`

#### z-index 与层叠上下文

`z-index` 控制定位元素在 z 轴上的堆叠顺序，数值越大越靠上（靠近用户）。

**z-index 生效的条件：** 仅对 `position` 非 `static` 的元素或 `flex`/`grid` 子项生效。

**层叠上下文（Stacking Context）：**

- 每个层叠上下文是一个独立的空间，内部的 `z-index` 只在当前上下文内比较
- 父上下文等级低的元素的子元素，即便 `z-index` 再大，也无法覆盖父上下文等级更高的元素
- 常见创建层叠上下文的方式：
  - `position` 非 `static` + `z-index` 非 `auto`
  - `opacity` < 1
  - `transform`、`filter`、`perspective` 非 `none`
  - `isolation: isolate`（专门用于创建独立层叠上下文）
  - `will-change: transform` 等

**同级层叠上下文中元素的堆叠顺序（从低到高）：**

1. 根元素的 background 和 border
2. 负 `z-index` 的定位元素
3. 文档流中的非定位块级元素
4. 文档流中的非定位浮动元素
5. 文档流中的非定位行内元素
6. `z-index: 0` 的定位元素
7. 正 `z-index` 的定位元素

#### 雪碧图实现原理

雪碧图（CSS Sprite）将多个小图标合并成一张大图，通过 `background-image` + `background-position` 控制显示区域，配合固定宽高做"窗口裁剪"，只展示目标图标部分。减少 HTTP 请求数，提升页面加载速度。

```css
.icon {
  width: 24px;
  height: 24px;
  background-image: url('sprite.png');
  background-repeat: no-repeat;
}
.icon-home {
  background-position: 0 0;
}
.icon-search {
  background-position: -24px 0;
}
.icon-user {
  background-position: -48px 0;
}
```

> 现代前端中，雪碧图逐渐被 SVG sprite、icon font 或 HTTP/2 多路复用替代，但在特定场景（如表情包、大量小图）仍有价值。

:::

### 5.水平垂直居中的方案、可以实现6种以上并对比它们的优缺点

::: details 参考

1. Flexbox

```
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
```

2.  Grid

```
.container {
  display: grid;
  place-items: center; /* 水平垂直居中 */
}
```

3. 绝对定位 + transform

```
.container {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 水平垂直居中 */
}
```

4. 表格布局

```
.container {
  display: table;
}

.center {
  display: table-cell;
  text-align: center; /* 水平居中 */
  vertical-align: middle; /* 垂直居中 */
}
```

5. 绝对定位 + margin（需知道子元素宽高）

```
.container {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 100px;
  margin-top: -50px;  /* 负值 = 高度的一半 */
  margin-left: -100px; /* 负值 = 宽度的一半 */
}
```

6. text-align + vertical-align

```
.container {
  text-align: center; /* 水平居中 */
}

.center {
  display: inline-block;
  vertical-align: middle;
}

/* 辅助元素撑开高度以实现垂直居中 */
.container::after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
```

#### 方案对比

| 方案                        | 优点                               | 缺点                                           | 适用场景             |
| --------------------------- | ---------------------------------- | ---------------------------------------------- | -------------------- |
| Flexbox                     | 简洁、语义清晰、无需知道子元素尺寸 | 低版本 IE 不支持                               | 现代浏览器首选       |
| Grid                        | 最简洁（一行代码）、适合二维布局   | IE 不支持                                      | 现代浏览器页面级布局 |
| 绝对定位 + transform        | 无需知道子元素尺寸、兼容性好       | transform 可能影响子元素的 fixed、可能引起模糊 | 弹窗、浮层居中       |
| 表格布局                    | 兼容性好（IE8+）                   | 多一层嵌套、非语义化                           | 老旧浏览器兼容场景   |
| 绝对定位 + margin           | 纯定位方案，不影响 transform       | 必须知道子元素精确宽高                         | 固定尺寸元素的居中   |
| text-align + vertical-align | 兼容性好                           | 需要辅助元素、代码冗余                         | 行内元素/文本居中    |

    :::

### 6.BFC实现原理，可以解决的问题，如何创建BFC

::: details 参考

- 什么是 BFC
  - **BFC（Block Formatting Context）格式化上下文**，是 Web 页面中盒模型布局的 CSS 渲染模式，**指一个独立的渲染区域或者说是一个隔离的独立容器**。
- 形成 BFC 的条件
  - 根元素
  - flex
  - grid
  - 浮动元素，float 除 none 以外的值
  - 定位元素，position（absolute，fixed）
  - display 为以下其中之一的值 inline-block，table-cell，table-caption
  - overflow 除了 visible 以外的值（hidden，auto，scroll）
- BFC 的特性
  - 内部的 Box 会在垂直方向上一个接一个的放置。
  - 垂直方向上的距离由 margin 决定
  - bfc 的区域不会与 float 的元素区域重叠。
  - 计算 bfc 的高度时，浮动元素也参与计算
  - bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。
    :::

### 7.可使用CSS函数复用代码，实现特殊效果

::: details 参考

#### 常用 CSS 函数

**`var()` — CSS 自定义属性（变量）：**

```css
:root {
  --primary-color: #1890ff;
  --border-radius: 8px;
  --gap: 16px;
}

.button {
  background: var(--primary-color);
  border-radius: var(--border-radius);
  /* 带 fallback 值 */
  color: var(--text-color, #333);
}
```

使用场景：主题切换、全局设计令牌（Design Tokens）、减少重复值

**`calc()` — 动态计算：**

```css
.sidebar {
  width: calc(100% - 240px); /* 支持四则运算 */
}
.fluid-text {
  font-size: calc(16px + 1vw); /* 不同单位混合计算 */
}
```

**`min()` / `max()` / `clamp()` — 响应式数值约束：**

```css
/* 宽度最大不超过 1200px，最小不少于 300px */
.container {
  width: clamp(300px, 80%, 1200px);
}

/* 图片最大 100%，不会超出容器 */
img {
  width: min(100%, 600px);
}

/* 字体不低于 16px */
body {
  font-size: max(16px, 1rem);
}
```

**`clamp()` 实现流体排版：**

```css
/* 字体在 16px ~ 5vw ~ 32px 之间动态变化 */
h1 {
  font-size: clamp(16px, 5vw, 32px);
}
```

一条规则取代了传统的 `@media` 断点方案，在移动端和桌面端之间平滑过渡。

**颜色函数：**

```css
/* 传统 */
color: rgb(24, 144, 255);
color: rgba(24, 144, 255, 0.7);
color: hsl(210, 100%, 55%);
color: hsla(210, 100%, 55%, 0.7);

/* 现代写法（逗号变空格，透明度用 / 分隔） */
color: rgb(24 144 255);
color: rgb(24 144 255 / 70%);
color: hsl(210 100% 55%);
color: hsl(210 100% 55% / 70%);
```

**`attr()` — 读取 HTML 属性：**

```css
/* 在伪元素中显示 data-* 属性的值 */
.tooltip::after {
  content: attr(data-tooltip);
}

/* 注意：目前 attr() 在 content 之外的使用支持有限 */
```

**渐变函数：**

```css
background: linear-gradient(to right, red, blue);
background: radial-gradient(circle, red, blue);
background: conic-gradient(from 45deg, red, yellow, green, blue, red);
```

**`filter()` / `blur()` / `brightness()` — 滤镜：**

```css
.blur {
  filter: blur(5px);
}
.grayscale {
  filter: grayscale(100%);
}
.shadow {
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}
```

#### 自定义属性实战：主题切换

```css
:root {
  --bg: #fff;
  --text: #333;
}

[data-theme='dark'] {
  --bg: #1a1a1a;
  --text: #eee;
}

body {
  background: var(--bg);
  color: var(--text);
  transition:
    background 0.3s,
    color 0.3s;
}
```

无需任何 CSS 预处理器即可实现运行时主题切换，配合 JS 只需一行：

```js
document.documentElement.setAttribute('data-theme', 'dark')
```

:::

### 8.PostCSS、Sass、Less的异同，以及使用配置，至少掌握一种

::: details 参考

#### 三者对比

| 特性      | Sass/SCSS                        | Less                      | PostCSS                          |
| --------- | -------------------------------- | ------------------------- | -------------------------------- |
| 定位      | CSS 预处理器                     | CSS 预处理器              | CSS 后处理工具/插件平台          |
| 编译方式  | Dart Sass / LibSass（C++）       | JavaScript                | JavaScript 插件体系              |
| 变量      | `$var: value;`                   | `@var: value;`            | 通过插件支持                     |
| 嵌套      | 支持                             | 支持                      | 通过 `postcss-nested` 支持       |
| Mixin     | `@mixin` / `@include`            | `.mixin()`                | 无原生支持                       |
| 继承      | `@extend`                        | `:extend()`               | 无原生支持                       |
| 函数      | `@function`，内置丰富            | 少量内置函数              | 通过插件支持                     |
| 条件/循环 | `@if`、`@for`、`@each`、`@while` | `when()`、`each()`（v3+） | 无原生支持                       |
| 生态      | 最强大、社区最大                 | 较简单、上手快            | 插件生态最灵活                   |
| 代表插件  | —                                | —                         | autoprefixer、preset-env、nested |

#### Sass/SCSS 核心特性

```scss
// 变量
$primary: #1890ff;
$gap: 16px;

// 嵌套
.card {
  background: #fff;
  &__title {
    font-size: 18px;
  }
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px; // 嵌套中的媒体查询
  }
}

// Mixin（带参数）
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}
.container {
  @include flex-center(column);
}

// 继承
.btn {
  padding: 8px 16px;
  border-radius: 4px;
}
.btn-primary {
  @extend .btn;
  background: $primary;
  color: #fff;
}

// 函数
@function px-to-rem($px) {
  @return calc($px / 16) * 1rem;
}
body {
  font-size: px-to-rem(14);
}

// 循环
@for $i from 1 through 4 {
  .col-#{$i} {
    width: 25% * $i;
  }
}

@each $theme in light, dark {
  .theme-#{$theme} {
    background: if($theme == light, #fff, #333);
  }
}
```

#### Less 核心特性

```less
// 变量
@primary: #1890ff;

// 嵌套（和 Sass 类似）
.card {
  &__title {
    font-size: 18px;
  }
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

// Mixin
.flex-center(@direction: row) {
  display: flex;
  flex-direction: @direction;
  justify-content: center;
  align-items: center;
}
.container {
  .flex-center(column);
}

// 运算
@width: 100px;
.sidebar {
  width: @width * 2;
}
```

#### PostCSS

PostCSS 不是预处理器，是**CSS 后处理工具**。它通过插件对 CSS 进行 AST 分析和转换。

**常用插件：**

| 插件                 | 功能                                    |
| -------------------- | --------------------------------------- |
| `autoprefixer`       | 根据 browserslist 自动添加浏览器前缀    |
| `postcss-preset-env` | 将现代 CSS 转换为兼容语法（类似 Babel） |
| `postcss-nested`     | 支持 Sass/Less 风格的嵌套写法           |
| `postcss-import`     | 合并 `@import` 引入的 CSS 文件          |
| `cssnano`            | CSS 压缩                                |
| `postcss-pxtorem`    | px 自动转为 rem                         |

**Vite 配置示例：**

```js
// vite.config.js
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  css: {
    postcss: {
      plugins: [autoprefixer(), postcssPresetEnv({ stage: 3 })]
    }
  }
}
```

#### 实际项目选型建议

- **Sass/SCSS**：功能最完整，适合大型项目或团队有复杂样式需求
- **Less**：简单轻量，Bootstrap v3/v4 使用的就是 Less
- **PostCSS**：通常与 Sass 配合使用（Sass 编译 + PostCSS 后处理），也可独立作为轻量方案（只用 preset-env + nested）

现代项目中常见搭配：**Sass + PostCSS(autoprefixer + cssnano)**，各取所长。
:::

### 9.CSS模块化方案、如何配置按需加载、如何防止CSS阻塞渲染

::: details 参考

#### CSS 模块化方案

**1. BEM 命名规范（Block Element Modifier）：**

```css
/* Block */
.card {
}

/* Element */
.card__title {
}
.card__body {
}

/* Modifier */
.card--featured {
}
.card__title--large {
}
```

优点：不依赖工具、纯命名约定；缺点：靠人工遵守，命名可能冗长

**2. CSS Modules（Vite/Webpack 内置支持）：**

```css
/* Button.module.css */
.primary {
  background: blue;
}
```

```js
import styles from './Button.module.css'
// styles.primary → 编译为 'Button_primary_abc123'
```

自动生成唯一类名，从根源上避免冲突，适合组件化开发。

**3. CSS-in-JS（React 生态常用）：**

```js
// styled-components / Emotion
const Button = styled.button`
  background: ${(props) => (props.primary ? 'blue' : 'gray')};
  padding: 8px 16px;
`
```

样式和组件同文件，支持动态样式、自动去重、按需注入。缺点：运行时开销、SSR 复杂度。

**4. Scoped Styles（Vue 单文件组件）：**

```vue
<style scoped>
.title {
  color: red;
}
</style>
```

Vue 编译时给元素添加 `data-v-xxx` 属性，实现样式隔离。

**5. Shadow DOM（Web Components）：**

```js
const shadow = el.attachShadow({ mode: 'open' })
shadow.innerHTML = `<style>p { color: red; }</style><p>Hello</p>`
```

浏览器原生隔离，样式完全不透出也不透入。

#### 按需加载 CSS

**1. 利用 `media` 属性延迟加载：**

```html
<!-- 只在打印时加载 -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- 只在屏幕宽度 >= 768px 时加载 -->
<link rel="stylesheet" href="desktop.css" media="(min-width: 768px)" />
```

**2. 代码分割（构建工具自动处理）**：路由懒加载时，对应组件的 CSS 也会自动按需加载：

```js
// React lazy + CSS Modules / CSS-in-JS 自动分 chunk
const AboutPage = React.lazy(() => import('./AboutPage'))
```

**3. `@import` 条件加载：**

```css
@import url('mobile.css') screen and (max-width: 768px);
```

#### 防止 CSS 阻塞渲染

CSS 是**渲染阻塞资源（render-blocking resource）** — 浏览器在 CSSOM 构建完成前不会渲染页面。

**1. Critical CSS 内联：**将首屏关键样式内联到 `<head>` 的 `<style>` 标签中，其余 CSS 异步加载

```html
<head>
  <style>
    /* 首屏关键样式 */
  </style>
  <link rel="preload" href="/full.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="/full.css" /></noscript>
</head>
```

**2. `media="print"` 技巧：**

```html
<!-- 浏览器以较低优先级下载，不阻塞渲染，onload 后切换 media 为 all -->
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'" />
```

**3. 资源预加载/预连接：**

```html
<link rel="preload" href="font.woff2" as="font" crossorigin />
<link rel="preconnect" href="https://api.example.com" />
<link rel="dns-prefetch" href="https://cdn.example.com" />
```

**4. `loading="lazy"` 控制非关键资源：**

```html
<iframe src="..." loading="lazy"></iframe> <img src="..." loading="lazy" alt="..." />
```

**5. 构建层面优化：**压缩（cssnano）、去除未使用 CSS（PurgeCSS）、合并文件减少请求数
:::

### 10.熟练使用CSS实现常见动画，如渐变、移动、旋转、缩放等等

::: details 参考

#### transition（过渡）

从一种状态平滑过渡到另一种状态，通常由状态变化触发（hover、class 变化等）。

```css
/* 简写：property duration timing-function delay */
.box {
  transition: all 0.3s ease;

  /* 分别指定 */
  transition-property: transform, opacity;
  transition-duration: 0.3s, 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.box:hover {
  transform: scale(1.1);
  opacity: 0.8;
}
```

**timing-function 贝塞尔曲线：**

| 关键字        | 贝塞尔值                    | 效果           |
| ------------- | --------------------------- | -------------- |
| `ease`        | (0.25, 0.1, 0.25, 1.0)      | 默认，缓入缓出 |
| `linear`      | (0, 0, 1, 1)                | 匀速           |
| `ease-in`     | (0.42, 0, 1, 1)             | 慢→快          |
| `ease-out`    | (0, 0, 0.58, 1)             | 快→慢          |
| `ease-in-out` | (0.42, 0, 0.58, 1)          | 慢→快→慢       |
| 自定义        | `cubic-bezier(x1,y1,x2,y2)` | 完全控制       |

#### transform（变换）

```css
/* 平移 */
transform: translate(100px, 50px);
transform: translateX(100px);
transform: translateY(50px);

/* 旋转（顺时针角度） */
transform: rotate(45deg);
transform: rotate(0.5turn);

/* 缩放 */
transform: scale(1.5); /* 整体缩放 1.5 倍 */
transform: scale(1.5, 0.8); /* 水平 1.5，垂直 0.8 */

/* 倾斜 */
transform: skew(10deg, 5deg);

/* 组合（顺序有影响！） */
transform: translate(100px, 0) rotate(45deg) scale(1.2);

/* 3D 变换 */
transform: translateZ(100px);
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: perspective(500px) rotateY(30deg);
```

**`transform-origin`**：设置变换中心点，默认是元素中心 (50% 50%)

```css
.box {
  transform-origin: top left; /* 以左上角为中心旋转/缩放 */
  transform-origin: 0 0; /* 等效 */
  transform: rotate(45deg);
}
```

#### @keyframes + animation（关键帧动画）

```css
/* 定义关键帧 */
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 简写：name duration timing-function delay iteration-count direction fill-mode */
.box {
  animation: slide-in 0.5s ease-out 0s 1 normal forwards;
}

/* 分开写 */
.box {
  animation-name: slide-in;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: infinite; /* 无限循环 | 数字 */
  animation-direction: alternate; /* normal | reverse | alternate | alternate-reverse */
  animation-fill-mode: forwards; /* none | forwards | backwards | both */
  animation-play-state: running; /* running | paused */
}
```

**animation-fill-mode：**

- `none`：动画结束后恢复到初始状态
- `forwards`：保留最后一帧的样式
- `backwards`：在 delay 期间应用第一帧样式
- `both`：同时应用 forwards 和 backwards

#### 渐变（gradient）

```css
/* 线性渐变 */
.bg1 {
  background: linear-gradient(to right, red, yellow);
  background: linear-gradient(45deg, red 0%, yellow 50%, green 100%);
}

/* 径向渐变 */
.bg2 {
  background: radial-gradient(circle at center, red, blue);
  background: radial-gradient(ellipse at top left, white, #333);
}

/* 锥形渐变 */
.bg3 {
  background: conic-gradient(from 0deg, red, yellow, green, blue, red);
  background: conic-gradient(
    from 45deg at 50% 50%,
    #fff 0% 25%,
    #000 25% 50%,
    #fff 50% 75%,
    #000 75%
  );
}
```

#### 性能优化

浏览器渲染管线：**Layout → Paint → Composite**

| 操作类型                   | 触发的阶段                 | 性能 |
| -------------------------- | -------------------------- | ---- |
| `top/left/width/height` 等 | Layout + Paint + Composite | 差   |
| `color/background` 等      | Paint + Composite          | 中   |
| `transform` / `opacity`    | Composite only             | 好   |

**最佳实践：** 动画只使用 `transform` 和 `opacity`，不在每一帧触发 layout 或 paint。

```css
/* 推荐用 translate 而不是 left/top 做位移 */
@keyframes move {
  to {
    transform: translateX(100px);
  } /* 好 */
  /* to { left: 100px; } */ /* 差，触发 layout */
}

/* will-change 提前告知浏览器将要变化的属性 */
.animated-element {
  will-change: transform, opacity;
}
```

> 注意：`will-change` 不要滥用，只在即将开始动画的元素上使用，动画结束后移除。

#### 常见动画实战示例

```css
/* 淡入 + 上移 */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 旋转加载动画 */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #eee;
  border-top-color: #1890ff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* 骨架屏闪烁 */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

/* 弹性出现 */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
```

:::

### 11.CSS浏览器兼容性写法，了解不同API在不同浏览器下的兼容性情况

::: details 参考

#### 浏览器前缀（Vendor Prefixes）

实验性或未标准化的 CSS 属性需要通过前缀使用：

| 前缀       | 浏览器                              |
| ---------- | ----------------------------------- |
| `-webkit-` | Chrome、Safari、Edge（新版）、Opera |
| `-moz-`    | Firefox                             |
| `-ms-`     | Internet Explorer、旧版 Edge        |
| `-o-`      | 旧版 Opera（<=12）                  |

```css
/* 示例：不同时期的写法 */
.box {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px; /* 标准写法放最后 */
}
```

> 注意：`border-radius` 等已标准化的属性现在不需要前缀。是否需要前缀取决于 `browserslist` 配置。

#### Autoprefixer（自动化前缀）

手动写前缀不可靠，实际项目中使用 `autoprefixer` 根据 `browserslist` 自动处理：

```json
// package.json
{
  "browserslist": ["> 1%", "last 2 versions", "not dead"]
}
```

配置后，只需写标准 CSS：

```css
/* 编写 */
.box {
  user-select: none;
}

/* 编译输出（根据 browserslist 自动决定是否需要前缀） */
.box {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

#### CSS Hack

用于针对特定浏览器或版本编写特殊样式（尽量不用，优先用 `@supports` 或 Autoprefixer）。

```css
/* IE10-11 专属 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .selector {
    /* IE10/11 only */
  }
}

/* IE9 以下 */
.selector {
  color: #000\9;
}

/* Safari 7.1+ 检测（_::-webkit-full-page-media 前缀） */
_::-webkit-full-page-media,
_:future,
:root .selector {
  /* Safari only */
}
```

#### @supports 特性检测（推荐）

```css
/* 支持 grid 时使用 */
@supports (display: grid) {
  .container {
    display: grid;
  }
}

/* 不支持时走降级方案 */
@supports not (display: grid) {
  .container {
    display: flex;
  }
}

/* 组合条件 */
@supports (display: grid) and (not (display: flex)) {
  /* ... */
}
```

#### 渐进增强 vs 优雅降级

**渐进增强（Progressive Enhancement）**：先保证基础功能在所有浏览器可用，再为现代浏览器添加增强体验。推荐策略。

```css
/* 第一步：所有浏览器都能用的基础布局 */
.grid {
  display: flex;
  flex-wrap: wrap;
}

/* 第二步：支持 grid 的浏览器用更好的布局 */
@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
```

**优雅降级（Graceful Degradation）**：先按现代标准开发，再为旧浏览器补降级方案。

**向后兼容（Backward Compatibility）**：确保新功能在旧浏览器上不会导致页面崩溃或样式错乱。

#### caniuse.com

查询 CSS/HTML/JS 特性在各浏览器版本中支持情况的标准工具：

- 绿色：完全支持
- 黄绿色：部分支持（可能需要前缀）
- 红色：不支持
- 同时显示全球使用率百分比

日常开发中遇到兼容性疑问，先查 caniuse 确认覆盖率。
:::

### 12.掌握一套完整的响应式布局方案

::: details 参考

#### 1. 视口设置（Viewport）

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

`width=device-width` 让视口宽度等于设备宽度（而不是模拟桌面宽度），这是移动端适配的第一步。

#### 2. 媒体查询 @media — 断点策略

**Mobile-first（推荐）**：先写移动端样式，再用 `min-width` 逐步向上覆盖。

```css
/* 移动端基础样式（默认） */
.card {
  padding: 12px;
  font-size: 14px;
}

/* 平板（>= 768px） */
@media (min-width: 768px) {
  .card {
    padding: 16px;
    font-size: 16px;
  }
}

/* 桌面（>= 1024px） */
@media (min-width: 1024px) {
  .card {
    padding: 24px;
    font-size: 18px;
  }
}
```

**Desktop-first**：先写桌面端样式，用 `max-width` 向下适配（旧项目更常见）。

**常用断点参考：**

| 断点    | 目标设备              |
| ------- | --------------------- |
| 480px   | 大屏手机              |
| 768px   | 平板                  |
| 1024px  | 小屏笔记本 / 横屏平板 |
| 1280px  | 桌面显示器            |
| 1440px+ | 大屏显示器            |

#### 3. Flexbox 弹性布局

```css
.container {
  display: flex;
  flex-wrap: wrap; /* 允许换行，适配窄屏 */
  gap: 16px;
}

.item {
  flex: 1 1 300px; /* grow shrink basis：最小 300px，自动伸缩 */
}
```

- `flex: 1 1 300px` 让每个 item 至少占 300px 宽度，空间不足时自动换行
- 适合一维排列（单行/单列）

#### 4. Grid 网格布局

```css
/* auto-fit 方案：自动填充列，无需媒体查询即可实现响应式 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
```

- `auto-fit`：根据可用空间自动放置尽可能多的列
- `minmax(280px, 1fr)`：每列最小 280px，剩余空间均分
- 一条规则实现从 1 列到多列的无断点自适应

**Grid 模板区域实现响应式布局：**

```css
.layout {
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'sidebar'
    'footer';
}

@media (min-width: 768px) {
  .layout {
    grid-template-areas:
      'header  header'
      'sidebar main'
      'footer  footer';
    grid-template-columns: 250px 1fr;
  }
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

#### 5. 相对单位

```css
/* rem：相对于根元素 font-size（默认 16px） */
h1 {
  font-size: 2rem;
} /* 32px */

/* em：相对于父元素 font-size */
.parent {
  font-size: 16px;
}
.child {
  font-size: 1.5em;
  padding: 2em;
} /* 24px, 48px */

/* vw/vh：相对于视口 */
.hero {
  height: 100vh;
} /* 全屏高度 */
.full-width {
  width: 100vw;
} /* 全屏宽度 */
.responsive-text {
  font-size: clamp(16px, 4vw, 48px);
}

/* vmin / vmax */
.square {
  width: 50vmin;
  height: 50vmin;
} /* 取视口宽高中较小值的 50% */

/* 百分比：相对于包含块 */
.container {
  width: 90%;
  max-width: 1200px;
}
```

#### 6. 响应式图片

```html
<!-- srcset + sizes：根据屏幕宽度选择不同尺寸的图片 -->
<img
  src="small.jpg"
  srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="描述文本"
/>

<!-- picture：根据条件选择不同来源（艺术方向） -->
<picture>
  <source srcset="mobile.webp" media="(max-width: 768px)" type="image/webp" />
  <source srcset="desktop.webp" media="(min-width: 769px)" type="image/webp" />
  <img src="fallback.jpg" alt="描述文本" />
</picture>
```

#### 7. 容器查询 @container（最新方案）

传统 `@media` 查询视口宽度，而 `@container` 查询**父容器宽度**，实现真正的组件级响应式。

```css
/* 定义容器 */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* 根据容器宽度调整内部样式 */
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}
```

同一个组件放在不同宽度的容器中会自动适配，比媒体查询更灵活。

#### 8. 完整实战案例

```html
<div class="page">
  <header class="page__header">Header</header>
  <main class="page__main">
    <div class="card-grid">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
    </div>
  </main>
  <aside class="page__sidebar">Sidebar</aside>
  <footer class="page__footer">Footer</footer>
</div>
```

```css
/* === Mobile-first 基础 === */
.page {
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'sidebar'
    'footer';
  gap: 16px;
  padding: 16px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.card {
  padding: clamp(12px, 3vw, 24px);
  border-radius: 8px;
  background: #fff;
}

/* === 平板 (>= 768px) === */
@media (min-width: 768px) {
  .page {
    grid-template-areas:
      'header header'
      'main   sidebar'
      'footer footer';
    grid-template-columns: 1fr 280px;
  }
}

/* === 桌面 (>= 1024px) === */
@media (min-width: 1024px) {
  .page {
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: 1fr 320px;
  }
}
```

#### 总结：响应式布局技术选型

| 需求            | 推荐方案                            |
| --------------- | ----------------------------------- |
| 排版/字体自适应 | `clamp()` + rem                     |
| 卡片列表自适应  | Grid `auto-fit` + `minmax()`        |
| 页面布局切换    | Grid `template-areas` + `@media`    |
| 组件级响应式    | `@container` 容器查询（现代浏览器） |
| 图片适配        | `srcset` + `sizes` + WebP           |
| 微调间距/尺寸   | Flex `flex-wrap` + `gap`            |

:::

### 13. Flexbox 弹性布局完整详解

::: details 参考

#### 核心概念

Flexbox 是一维布局模型：主轴（main axis）和交叉轴（cross axis），子项沿主轴排列。

#### 容器属性（父元素设置）

| 属性                             | 值                                                                                        | 说明                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------ |
| `display: flex`                  | `flex` / `inline-flex`                                                                    | 创建 flex 容器                             |
| `flex-direction`                 | `row`(默认) / `column` / `row-reverse` / `column-reverse`                                 | 主轴方向                                   |
| `flex-wrap`                      | `nowrap`(默认) / `wrap` / `wrap-reverse`                                                  | 是否换行                                   |
| `justify-content`                | `flex-start` / `flex-end` / `center` / `space-between` / `space-around` / `space-evenly`  | 主轴对齐                                   |
| `align-items`                    | `stretch`(默认) / `flex-start` / `flex-end` / `center` / `baseline`                       | 交叉轴对齐（单行）                         |
| `align-content`                  | `stretch`(默认) / `flex-start` / `flex-end` / `center` / `space-between` / `space-around` | 多行时的交叉轴对齐（需 `flex-wrap: wrap`） |
| `gap` / `row-gap` / `column-gap` | 长度值                                                                                    | 子项间距                                   |

**`justify-content` 各值效果：**

```css
/* 默认左对齐 */
justify-content: flex-start; /* [A][B][C]            */
justify-content: flex-end; /*             [A][B][C] */
justify-content: center; /*       [A][B][C]       */
justify-content: space-between; /* [A]       [B]       [C] */
justify-content: space-around; /*   [A]    [B]    [C]   */
justify-content: space-evenly; /*  [A]  [B]  [C]  (间距完全相等) */
```

#### 子项属性（子元素设置）

| 属性          | 说明                                           |
| ------------- | ---------------------------------------------- |
| `flex`        | `flex-grow` `flex-shrink` `flex-basis` 的简写  |
| `flex-grow`   | 放大比例，默认 0（不放大），分配剩余空间       |
| `flex-shrink` | 缩小比例，默认 1（空间不足时缩小）             |
| `flex-basis`  | 初始大小，默认 `auto`（取元素自身 width）      |
| `align-self`  | 单独控制该子项的交叉轴对齐，覆盖 `align-items` |
| `order`       | 排列顺序，默认 0，数值越小越靠前，可为负       |

**`flex` 简写实践：**

```css
/* flex: grow shrink basis */
.item {
  flex: 1;
} /* flex: 1 1 0%  — 均分所有空间 */
.item {
  flex: auto;
} /* flex: 1 1 auto — 基于自身大小均分剩余空间 */
.item {
  flex: none;
} /* flex: 0 0 auto — 固定尺寸不伸缩 */
.item {
  flex: 0 1 300px;
} /* 初始 300px，空间不足时可缩小，不放大 */
```

**`flex-grow` 计算：**

```css
/* 容器宽 600px，A 100px，B 200px，剩余 300px */
.a {
  flex-grow: 1;
} /* A 分得 300 * 1/(1+2) = 100px → 最终 200px */
.b {
  flex-grow: 2;
} /* B 分得 300 * 2/(1+2) = 200px → 最终 400px */
```

#### 常见布局模式

**等分列：**

```css
.grid {
  display: flex;
  gap: 16px;
}
.grid > * {
  flex: 1;
} /* 所有子元素均分 */
```

**两栏布局（侧边栏固定 + 主内容自适应）：**

```html
<div class="layout">
  <aside class="sidebar">侧边栏 250px</aside>
  <main class="content">自适应内容区</main>
</div>
```

```css
.layout {
  display: flex;
}
.sidebar {
  flex: 0 0 250px;
} /* 固定 250px，不伸缩 */
.content {
  flex: 1;
} /* 占据剩余空间 */
```

**Sticky Footer（页脚固定在底部）：**

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
} /* 内容区撑开，把 footer 推到底部 */
```

**水平垂直居中（一条 flex 搞定）：**

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**导航栏 + 左右对齐：**

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

```css
/* 最后一个元素推到最右边 */
.nav {
  display: flex;
}
.nav .item:last-child {
  margin-left: auto;
}
```

#### Flexbox 注意事项

- 子项默认 `align-items: stretch`，会撑满交叉轴高度（子元素不设高度时的常见困惑）
- 子项设为 `position: absolute` 会脱离 flex 布局但仍在 flex 容器定位上下文中
- `flex-basis` 优先级高于 `width`（在主轴上），但当值为 `auto` 时取 `width` 的值
- 子项的 `margin: auto` 在 flex 中会吃掉所有剩余空间（比 `justify-content` 更灵活）
  :::

### 14. CSS Grid 网格布局详解

::: details 参考

#### 核心概念

Grid 是二维布局模型，同时控制行和列，适合整体页面级布局。与 Flexbox 互补：Flex 适合一维排列，Grid 适合二维网格。

#### 容器属性（父元素设置）

**定义网格结构：**

```css
.container {
  display: grid;

  /* 定义列宽 */
  grid-template-columns: 200px 1fr 2fr; /* 3 列：固定 + 比例 + 比例 */
  grid-template-columns: repeat(3, 1fr); /* 3 列等分 */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 自适应填充 */
  grid-template-columns: 100px repeat(2, 1fr); /* 第1列100px，后2列等分 */

  /* 定义行高 */
  grid-template-rows: auto 1fr auto; /* header - content - footer */
  grid-template-rows: repeat(3, 100px);

  /* 间距 */
  gap: 16px; /* 行间距和列间距统一 */
  row-gap: 16px;
  column-gap: 24px;
}
```

**`fr` 单位**：按比例分配剩余可用空间，是 Grid 最核心的单位。

**网格区域命名：**

```css
.layout {
  display: grid;
  grid-template-areas:
    'header  header  header'
    'sidebar content content'
    'footer  footer  footer';
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
```

**对齐属性：**

| 属性              | 作用                       | 常用值                                       |
| ----------------- | -------------------------- | -------------------------------------------- |
| `justify-items`   | 单元格内的水平对齐         | `stretch`(默认) / `center` / `start` / `end` |
| `align-items`     | 单元格内的垂直对齐         | `stretch`(默认) / `center` / `start` / `end` |
| `place-items`     | 以上两者简写               | `place-items: center`（水平垂直居中）        |
| `justify-content` | 整个网格在容器内的水平位置 | 同 flex 的 justify-content                   |
| `align-content`   | 整个网格在容器内的垂直位置 | 同 flex 的 align-content                     |

**隐式网格：**

```css
/* 当子项超出定义的网格时，自动创建的行/列 */
grid-auto-rows: minmax(100px, auto); /* 自动行最小高度 100px */
grid-auto-columns: 200px;
grid-auto-flow: row; /* row(默认，先行后列) | column | dense(紧密填充) */
```

#### 子项属性（子元素设置）

```css
.item {
  /* 基于网格线的定位（从 1 开始） */
  grid-column-start: 1;
  grid-column-end: 3; /* 占 1 到 2 列 */
  grid-row-start: 1;
  grid-row-end: 3; /* 占 1 到 2 行 */

  /* 简写 */
  grid-column: 1 / 3; /* start / end */
  grid-column: 1 / span 2; /* 从第1线开始，跨 2 列 */
  grid-row: 1 / 3;

  /* 网格区域（和 template-areas 配合） */
  grid-area: header;

  /* 单个子项的对齐 */
  justify-self: center;
  align-self: center;
  place-self: center;

  /* 排列顺序 */
  order: 1;
}
```

#### 常用布局模式

**圣杯布局（header + 侧边栏 + 内容 + footer）：**

```css
.page {
  display: grid;
  grid-template-areas:
    'header  header'
    'sidebar main'
    'footer  footer';
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

**自适应卡片列表（无断点响应式）：**

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
```

- `auto-fill`：根据空间尽可能多地放置列，就算没卡片也会预留空间
- `auto-fit`：和 `auto-fill` 类似但会把空列折叠掉

**`auto-fill` vs `auto-fit` 的区别：**

- `auto-fill`：有多少空间就创建多少列轨道（空轨道保留空间）
- `auto-fit`：有多少元素就使用多少列轨道（空轨道折叠，元素居中或扩张）

**居中单个元素：**

```css
.parent {
  display: grid;
  place-items: center; /* 一行搞定水平垂直居中 */
}
```

#### Grid vs Flexbox 选型

| 场景                             | 推荐             |
| -------------------------------- | ---------------- |
| 一维排列（单行/单列内部排序）    | Flexbox          |
| 二维布局（同时控制行列）         | Grid             |
| 页面整体布局骨架                 | Grid             |
| 组件内部排列（按钮组、tag 列表） | Flexbox          |
| 未知数量元素的响应式网格         | Grid `auto-fill` |
| 需要对齐到网格线的复杂设计       | Grid             |

两者不互斥，常见做法是：**Grid 做页面布局，Flexbox 做组件内部排列**。
:::

### 15. CSS 文字排版与溢出处理

::: details 参考

#### 单行文本溢出省略

```css
.single-line {
  white-space: nowrap; /* 强制不换行 */
  overflow: hidden; /* 溢出隐藏 */
  text-overflow: ellipsis; /* 超出显示省略号 */
}
```

三个属性缺一不可，是最经典的三件套方案。

#### 多行文本溢出省略

```css
.multi-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 第 3 行后截断 */
  overflow: hidden;
}
```

> `-webkit-line-clamp` 虽带 webkit 前缀，但现代浏览器（含 Firefox）均已支持。标准属性 `line-clamp` 也已进入规范。

```css
/* 标准写法（现代浏览器可直接用） */
.multi-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}
```

#### white-space 详解

| 值             | 换行 | 空格/缩进 | 自动换行                     |
| -------------- | ---- | --------- | ---------------------------- |
| `normal`       | 忽略 | 合并      | 自动换行                     |
| `nowrap`       | 忽略 | 合并      | 不换行                       |
| `pre`          | 保留 | 保留      | 不换行                       |
| `pre-wrap`     | 保留 | 保留      | 自动换行                     |
| `pre-line`     | 忽略 | 合并      | 自动换行                     |
| `break-spaces` | 保留 | 保留      | 自动换行（任意位置均可断行） |

**使用场景：**

- `normal`：常规文本
- `nowrap`：配合 `text-overflow: ellipsis` 实现省略号，或确保按钮文字一行显示
- `pre-wrap`：展示代码块、保留格式的用户输入文本
- `pre-line`：保留换行但折叠多余空格（适合渲染用户评论）

#### word-break vs overflow-wrap

```css
/* word-break：控制单词内部断行规则 */
word-break: normal; /* 默认，CJK 可在任意字符间断，英文按单词 */
word-break: break-all; /* 任何字符之间都可以断行（英文单词也会断开） */
word-break: keep-all; /* CJK 也不断开，只在空格/连字符处断 */

/* overflow-wrap（原名 word-wrap）：控制长单词溢出时的行为 */
overflow-wrap: normal; /* 默认，长单词不换行，可能溢出 */
overflow-wrap: break-word; /* 如果单词太长装不下，就断开换行 */
```

**实践区分：**

- 英文内容长 URL/长单词导致溢出 → `overflow-wrap: break-word`（仅溢出时断开）
- 中文 + 英文混合排版，对英文断行要求不严格 → `word-break: break-all`（始终可在任意处断开）
- 需要保持英文单词完整性 → `overflow-wrap: break-word` + `hyphens: auto`

#### 其他常用文字属性

```css
/* 文字选择 */
user-select: none; /* 禁止选中文字 */
user-select: auto; /* 默认，允许选中 */

/* 连字符 */
hyphens: auto; /* 浏览器自动在断行处加连字符 */
hyphens: manual; /* 仅 &shy; 处断开 */

/* 首行缩进 */
text-indent: 2em; /* 段落首行缩进两个字符 */

/* 文字阴影 */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

/* 文字换行（中文） */
word-wrap: break-word; /* 旧写法，同 overflow-wrap */
overflow-wrap: anywhere; /* 比 break-word 更激进，任何位置都可断 */

/* 书写模式 */
writing-mode: horizontal-tb; /* 默认，从左到右 */
writing-mode: vertical-rl; /* 竖排，从右到左 */
writing-mode: vertical-lr; /* 竖排，从左到右 */

/* 文本转换 */
text-transform: uppercase; /* 全大写 */
text-transform: lowercase; /* 全小写 */
text-transform: capitalize; /* 首字母大写 */
```

:::

### 16. CSS 性能优化与渲染优化

::: details 参考

#### 浏览器渲染管线

```
JavaScript → Style（计算样式） → Layout（布局） → Paint（绘制） → Composite（合成）
```

- **Layout（重排/回流）**：重新计算元素位置和大小，最昂贵
- **Paint（重绘）**：重新绘制像素（颜色、阴影等），中等开销
- **Composite（合成）**：GPU 层面合成图层，最便宜

#### contain 属性

告诉浏览器该元素的渲染范围，限制重排/重绘的传播范围。

```css
.element {
  contain: strict; /* 严格隔离：布局+样式+绘制+尺寸全隔离 */
  contain: content; /* 内容隔离：布局+样式+绘制（推荐） */
  contain: layout; /* 布局隔离：内部重排不影响外部 */
  contain: paint; /* 绘制隔离：内部重绘不溢出 */
  contain: size; /* 尺寸隔离：元素尺寸不依赖子元素（需显式设宽高） */
}
```

**使用场景：**

- 列表中的每个 item 加 `contain: content`，单个 item 变化不会导致整个列表重排
- 侧边栏加 `contain: layout style`，侧边栏内部变化不影响主内容区
- 动画元素加 `contain: layout style paint`，限制动画的影响范围

#### content-visibility

跳过屏幕外（off-screen）元素的渲染，大幅提升长列表/长页面的初始渲染性能。

```css
/* 自动跳过屏幕外元素的渲染 */
.section {
  content-visibility: auto;
  contain-intrinsic-size: 500px; /* 占位高度，防止滚动条跳动 */
}
```

- `content-visibility: auto`：元素不在视口中时，跳过其渲染（layout + paint 都不做）
- `contain-intrinsic-size`：提供一个估计尺寸，避免滚动条在加载过程中频繁跳动
- 适合：长列表、大量卡片的页面、图文混排的长文章

#### 动画性能

只动画 `transform` 和 `opacity`，它们只触发 Composite，不触发 Layout 和 Paint。

```css
/* 好：只触发 composite */
@keyframes good {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-10px);
    opacity: 0;
  }
}

/* 差：触发 layout */
@keyframes bad {
  from {
    top: 0;
  }
  to {
    top: -10px;
  } /* 触发重排 */
}
```

**`will-change`**：提前告知浏览器元素将要变化的属性，让浏览器预先创建独立图层。

```css
.animated {
  will-change: transform, opacity;
}
```

**注意：**

- 不要给大量元素同时加 `will-change`，会消耗大量 GPU 内存
- 动画开始前添加，动画结束后移除
- 优先用 `transform: translateZ(0)` 或 `backface-visibility: hidden` 来创建图层（Hack），而不是滥用 `will-change`

#### 避免 Layout Thrashing（强制同步布局）

在 JS 中**先读后写**，避免读写交替触发强制同步布局：

```js
// 差：在循环中边读边写，每轮都强制同步布局
elements.forEach((el) => {
  const h = el.offsetHeight // 读（触发 layout）
  el.style.height = h + 1 // 写（使样式失效）
}) // 下一轮循环的读会在上一轮写之后触发强制重排

// 好：先批量读，再批量写
const heights = elements.map((el) => el.offsetHeight) // 批量读
elements.forEach((el, i) => {
  el.style.height = heights[i] + 1 // 批量写
})
```

使用 `requestAnimationFrame` 或 `FastDom` 库来管理读写分离。

#### 其他优化手段

**1. CSS Selector 性能（现代浏览器影响很小，但仍值得了解）：**

```css
/* 浏览器从右往左解析选择器 */
/* 较慢：遍历所有 a，再往上找 .nav */
.nav div ul li a {
}

/* 较快：直接用类定位 */
.nav-link {
}
```

在大型页面中，避免过深的后代选择器和过度的通配符。

**2. `@import` 的性能陷阱：**

```html
<!-- 差：串行加载，阻塞 -->
<link rel="stylesheet" href="a.css" />
<!-- a.css 内 @import url(b.css) -->

<!-- 好：并行加载 -->
<link rel="stylesheet" href="a.css" />
<link rel="stylesheet" href="b.css" />
```

**3. 减少 Paint 面积：**

浏览器只重绘变化的区域，但大的模糊阴影、半透明背景可能触发大面积重绘。避免不必要的 `box-shadow` 大范围应用。

**4. 使用 `font-display` 控制字体加载策略：**

```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* 立即用系统字体，加载完后切换 */
}
```

| 值         | 行为                                                       |
| ---------- | ---------------------------------------------------------- |
| `auto`     | 浏览器默认（通常 block）                                   |
| `block`    | 隐藏文字，等字体加载（最长 3s，超时用系统字体）            |
| `swap`     | 立即用系统字体显示，加载完成后替换（**推荐**）             |
| `fallback` | 等 100ms，未加载就用系统字体（加载完成后不替换）           |
| `optional` | 等 100ms，未加载就用系统字体（加载完成后可能用也可能不用） |

**5. 图片/背景优化：**

```css
/* 大背景图的懒加载提示 */
background-image: url('placeholder-small.jpg'); /* 先显示小图 */
/* 后续通过 JS 或 media query 替换为高清大图 */

/* 使用硬件加速的滤镜 */
backdrop-filter: blur(10px); /* GPU 加速，不影响内容区域布局 */
```

:::
