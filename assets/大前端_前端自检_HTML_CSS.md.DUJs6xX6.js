import{_ as a,o as s,c as e,a2 as n}from"./chunks/framework.DkMK-_fX.js";const m=JSON.parse('{"title":"前端自检系列 --- HTML&CSS","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"大前端/前端自检/HTML&CSS.md","filePath":"大前端/前端自检/HTML&CSS.md","lastUpdated":1727401527000}'),l={name:"大前端/前端自检/HTML&CSS.md"},t=n(`<h1 id="前端自检系列-html-css" tabindex="-1">前端自检系列 --- HTML&amp;CSS <a class="header-anchor" href="#前端自检系列-html-css" aria-label="Permalink to &quot;前端自检系列 --- HTML&amp;CSS&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#一、html">一、HTML</a><ul><li><a href="#_1-从规范的角度理解html-从分类和语义的角度使用标签">1. 从规范的角度理解HTML，从分类和语义的角度使用标签</a></li><li><a href="#_2-常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式">2. 常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式</a></li><li><a href="#_3-元信息类标签-head、title、meta-的使用目的和配置方法">3. 元信息类标签(head、title、meta)的使用目的和配置方法</a></li><li><a href="#_4-html5离线缓存原理">4. HTML5离线缓存原理</a></li><li><a href="#_5-可以使用canvas-api、svg等绘制高性能的动画">5. 可以使用Canvas API、SVG等绘制高性能的动画</a></li><li><a href="#_6-本地存储">6. 本地存储</a></li></ul></li><li><a href="#二、css">二、CSS</a><ul><li><a href="#_1-css盒模型-在不同浏览器的差异">1. CSS盒模型，在不同浏览器的差异</a></li><li><a href="#_2-css所有选择器及其优先级、使用场景-哪些可以继承-如何运用at规则">2. CSS所有选择器及其优先级、使用场景，哪些可以继承，如何运用at规则</a></li><li><a href="#_3-css伪类和伪元素有哪些-它们的区别和实际应用">3. CSS伪类和伪元素有哪些，它们的区别和实际应用</a></li><li><a href="#_4-html文档流的排版规则-css几种定位的规则、定位参照物、对文档流的影响-如何选择最好的定位方式-雪碧图实现原理">4.HTML文档流的排版规则，CSS几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理</a></li><li><a href="#_5-水平垂直居中的方案、可以实现6种以上并对比它们的优缺点">5.水平垂直居中的方案、可以实现6种以上并对比它们的优缺点</a></li></ul></li></ul></nav><h2 id="一、html" tabindex="-1">一、HTML <a class="header-anchor" href="#一、html" aria-label="Permalink to &quot;一、HTML&quot;">​</a></h2><h3 id="_1-从规范的角度理解html-从分类和语义的角度使用标签" tabindex="-1">1. 从规范的角度理解HTML，从分类和语义的角度使用标签 <a class="header-anchor" href="#_1-从规范的角度理解html-从分类和语义的角度使用标签" aria-label="Permalink to &quot;1. 从规范的角度理解HTML，从分类和语义的角度使用标签&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><p>HTML 的全称为超文本标记语言，是一种标记语言。用于描述网页的结构和内容。HTML 规范由 W3C（World Wide Web Consortium）制定，并不断更新和完善。</p><p>HTML 规范定义了一系列的标签（也称为元素），用于构建网页的结构和内容。这些标签按照其用途和语义可以分为不同的分类，如以下几种常见的分类：</p><ol><li><p>结构化标签：这类标签用于定义网页的整体结构，包括 <code>&lt;header&gt;</code>、<code>&lt;nav&gt;</code>、<code>&lt;main&gt;</code>、<code>&lt;aside&gt;</code>、<code>&lt;footer&gt;</code> 等。这些标签有助于明确页面的结构，提供语义信息，使页面更加可读性和可访问性。</p></li><li><p>文本标签：这类标签用于定义文本内容的呈现方式和语义，如 <code>&lt;p&gt;</code>、<code>&lt;h1&gt;</code>、<code>&lt;h2&gt;</code>、<code>&lt;em&gt;</code>、<code>&lt;strong&gt;</code>、<code>&lt;blockquote&gt;</code> 等。这些标签有助于传达文本的语义信息，使文本内容更具有结构性和语义性。</p></li><li><p>列表标签：这类标签用于定义列表，包括无序列表 <code>&lt;ul&gt;</code>、有序列表 <code>&lt;ol&gt;</code> 和列表项 <code>&lt;li&gt;</code>。这些标签用于构建有序或无序的列表结构。</p></li><li><p>链接标签：这类标签用于定义链接和导航，如 <code>&lt;a&gt;</code>、<code>&lt;nav&gt;</code>、<code>&lt;link&gt;</code> 等。这些标签用于定义超链接、导航菜单等，提供页面间的导航功能和语义信息。</p></li><li><p>媒体标签：这类标签用于展示媒体资源，如图片 <code>&lt;img&gt;</code>、视频 <code>&lt;video&gt;</code>、音频 <code>&lt;audio&gt;</code> 等。这些标签用于嵌入和展示图片、视频、音频等媒体内容。</p></li><li><p>表单标签：这类标签用于构建用户输入表单，如 <code>&lt;form&gt;</code>、<code>&lt;input&gt;</code>、<code>&lt;textarea&gt;</code>、<code>&lt;select&gt;</code>、<code>&lt;button&gt;</code> 等。这些标签用于构建表单，实现用户输入和数据传递的功能。</p></li></ol><p>通过理解 HTML 规范，并根据标签的分类和语义合理使用不同的标签，可以使网页的<strong>结构更加清晰、语义更加明确</strong>，从而<strong>提高网页的可读性、可维护性和可访问性</strong>。同时，合理使用标签还<strong>有助于搜索引擎优化（SEO）</strong>，提高网页的搜索排名。</p></details><h3 id="_2-常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式" tabindex="-1">2. 常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式 <a class="header-anchor" href="#_2-常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式" aria-label="Permalink to &quot;2. 常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式&quot;">​</a></h3><p>略~~~</p><h3 id="_3-元信息类标签-head、title、meta-的使用目的和配置方法" tabindex="-1">3. 元信息类标签(head、title、meta)的使用目的和配置方法 <a class="header-anchor" href="#_3-元信息类标签-head、title、meta-的使用目的和配置方法" aria-label="Permalink to &quot;3. 元信息类标签(head、title、meta)的使用目的和配置方法&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><p>元信息类标签（head、title、meta）是用于在 HTML 文档中定义页面的元信息的标签，其作用是<strong>为浏览器、搜索引擎等提供关于页面的信息，以控制页面的展示和行为</strong>。</p></details><h3 id="_4-html5离线缓存原理" tabindex="-1">4. HTML5离线缓存原理 <a class="header-anchor" href="#_4-html5离线缓存原理" aria-label="Permalink to &quot;4. HTML5离线缓存原理&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><p>HTML5离线缓存（Offline Cache）是一种在Web应用程序中，允许浏览器在离线状态下缓存页面和资源，使用户能够在没有网络连接时继续访问应用的技术。</p><h4 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h4><ul><li><p>离线缓存清单：在应用的主HTML文件中，通过使用特定的HTML5应用缓存清单文件（通常命名为cache.manifest）来定义需要离线缓存的页面和资源。</p></li><li><p>缓存更新检查：浏览器会根据应用缓存清单文件的设置，定期检查缓存的更新。可以通过在HTML标签的manifest属性中指定缓存清单文件的URL来启用离线缓存。</p></li><li><p>缓存资源下载：在首次访问应用时，浏览器会下载缓存清单文件中列出的页面和资源，并存储在本地缓存中。</p></li><li><p>离线访问：当应用处于离线状态时，浏览器会优先从本地缓存中加载页面和资源，从而实现在没有网络连接时继续访问应用的功能。</p></li><li><p>缓存更新：当应用处于在线状态时，浏览器会根据缓存清单文件的设置，检查缓存的更新，并自动下载最新的页面和资源，从而保持缓存的更新。</p></li></ul></details><h3 id="_5-可以使用canvas-api、svg等绘制高性能的动画" tabindex="-1">5. 可以使用Canvas API、SVG等绘制高性能的动画 <a class="header-anchor" href="#_5-可以使用canvas-api、svg等绘制高性能的动画" aria-label="Permalink to &quot;5. 可以使用Canvas API、SVG等绘制高性能的动画&quot;">​</a></h3><p>略~~~</p><h3 id="_6-本地存储" tabindex="-1">6. 本地存储 <a class="header-anchor" href="#_6-本地存储" aria-label="Permalink to &quot;6. 本地存储&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><table tabindex="0"><thead><tr><th>存储机制</th><th>存储容量</th><th>存储期限</th><th>数据类型和限制</th><th>适用场景</th></tr></thead><tbody><tr><td>Cookies</td><td>较小，通常为几KB。</td><td>可设置过期时间，会话或持久。</td><td>只能存储字符串，有大小限制。</td><td>会话信息、用户跟踪、认证令牌等</td></tr><tr><td>LocalStorage</td><td>较大，通常为5MB至10MB。</td><td>永久存储，除非用户清除缓存。</td><td>只能存储字符串，需要序列化。</td><td>缓存数据、偏好设置、历史记录等</td></tr><tr><td>SessionStorage</td><td>较大，通常为5MB至10MB。</td><td>存储在会话期间，关闭会话清除。</td><td>只能存储字符串，需要序列化。</td><td>临时保存用户输入、表单数据等</td></tr><tr><td>IndexedDB</td><td>较大，可以存储大量数据。</td><td>永久存储，关闭浏览器不清除。</td><td>可以存储复杂数据类型。</td><td>大型应用数据存储、离线应用等</td></tr></tbody></table></details><h2 id="二、css" tabindex="-1">二、CSS <a class="header-anchor" href="#二、css" aria-label="Permalink to &quot;二、CSS&quot;">​</a></h2><h3 id="_1-css盒模型-在不同浏览器的差异" tabindex="-1">1. CSS盒模型，在不同浏览器的差异 <a class="header-anchor" href="#_1-css盒模型-在不同浏览器的差异" aria-label="Permalink to &quot;1. CSS盒模型，在不同浏览器的差异&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><p>标准盒子模型：宽度=内容的宽度（content）+ border + padding</p><p>低版本IE盒子模型：宽度=内容宽度（content+border+padding）</p></details><h3 id="_2-css所有选择器及其优先级、使用场景-哪些可以继承-如何运用at规则" tabindex="-1">2. CSS所有选择器及其优先级、使用场景，哪些可以继承，如何运用at规则 <a class="header-anchor" href="#_2-css所有选择器及其优先级、使用场景-哪些可以继承-如何运用at规则" aria-label="Permalink to &quot;2. CSS所有选择器及其优先级、使用场景，哪些可以继承，如何运用at规则&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><p>ID 选择器 &gt;<code> 类选择器、属性选择器、伪类选择器 &gt;</code> 元素选择器、伪元素选择器 &gt;\` 组合选择器。</p><p>常见的可以继承的样式包括字体相关属性（如 font-size、font-family、font-weight 等）、文本相关属性（如 color、text-align、text-decoration 等）、行高（line-height）、以及部分的背景属性（如 background-color）等。</p><p>常见的 at 规则包括 @media、@import、@font-face、@keyframes 等。这些 at 规则允许开发者在样式表中根据特定的条件或需求来设置样式，从而实现更加灵活和动态的样式控制。</p></details><h3 id="_3-css伪类和伪元素有哪些-它们的区别和实际应用" tabindex="-1">3. CSS伪类和伪元素有哪些，它们的区别和实际应用 <a class="header-anchor" href="#_3-css伪类和伪元素有哪些-它们的区别和实际应用" aria-label="Permalink to &quot;3. CSS伪类和伪元素有哪些，它们的区别和实际应用&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><p>伪类用于选择元素的特定状态或行为，例如 :hover 用于选中鼠标悬停状态下的元素，:active 用于选中被激活的元素，:first-child 用于选中父元素的第一个子元素等。伪类的语法为 :pseudo-class。</p><p>伪元素用于在元素的特定部分生成额外的内容或样式，例如 ::before 用于在元素内容前生成额外的内容，::after 用于在元素内容后生成额外的内容，::first-line 用于选中元素的第一行文本等。伪元素的语法为 ::pseudo-element。</p><h5 id="区别" tabindex="-1">区别： <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别：&quot;">​</a></h5><ul><li>伪类选择的是元素的特定状态或行为，而伪元素生成的是元素的额外内容或样式。</li><li>伪类使用单冒号（:）表示，伪元素使用双冒号（::）表示。</li><li>伪类可以用于任何元素，而伪元素只能用于某些特定类型的元素。</li></ul><h4 id="实际应用" tabindex="-1">实际应用： <a class="header-anchor" href="#实际应用" aria-label="Permalink to &quot;实际应用：&quot;">​</a></h4><ul><li>伪类常用于实现鼠标悬停、点击、选中等交互效果，以及根据元素位置、子元素顺序等动态设置样式。</li><li>伪元素常用于生成元素的额外内容，例如在元素前面或后面添加装饰性的图标、文字等，以及实现特定的布局效果。</li></ul></details><h3 id="_4-html文档流的排版规则-css几种定位的规则、定位参照物、对文档流的影响-如何选择最好的定位方式-雪碧图实现原理" tabindex="-1">4.HTML文档流的排版规则，CSS几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理 <a class="header-anchor" href="#_4-html文档流的排版规则-css几种定位的规则、定位参照物、对文档流的影响-如何选择最好的定位方式-雪碧图实现原理" aria-label="Permalink to &quot;4.HTML文档流的排版规则，CSS几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><h4 id="排版规则" tabindex="-1">排版规则 <a class="header-anchor" href="#排版规则" aria-label="Permalink to &quot;排版规则&quot;">​</a></h4><ol><li>行内元素：在一行内从左到右依次排列，其宽度由其内容决定。</li><li>块级元素：块级元素会独占一行，从上到下依次排列，其宽度默认为其父元素的宽度。</li><li>浮动元素：</li><li>定位元素：相对定位、绝对定位、固定定位、粘性定位和静态定位</li><li>盒模型：</li></ol><h4 id="雪碧图实现原理" tabindex="-1">雪碧图实现原理 <a class="header-anchor" href="#雪碧图实现原理" aria-label="Permalink to &quot;雪碧图实现原理&quot;">​</a></h4><p>雪碧图是一种将多个小图标或图片合并成一张大图的技术，通过在 CSS 中使用背景图和相应的定位属性，可以实现在页面中显示不同的小图标或图片。</p></details><h3 id="_5-水平垂直居中的方案、可以实现6种以上并对比它们的优缺点" tabindex="-1">5.水平垂直居中的方案、可以实现6种以上并对比它们的优缺点 <a class="header-anchor" href="#_5-水平垂直居中的方案、可以实现6种以上并对比它们的优缺点" aria-label="Permalink to &quot;5.水平垂直居中的方案、可以实现6种以上并对比它们的优缺点&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><ol><li>Flexbox</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center; /* 水平居中 */</span></span>
<span class="line"><span>  align-items: center; /* 垂直居中 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>Grid</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  display: grid;</span></span>
<span class="line"><span>  place-items: center; /* 水平垂直居中 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>绝对定位 + transform</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.center {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 50%;</span></span>
<span class="line"><span>  left: 50%;</span></span>
<span class="line"><span>  transform: translate(-50%, -50%); /* 水平垂直居中 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4"><li>表格布局</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  display: table;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.center {</span></span>
<span class="line"><span>  display: table-cell;</span></span>
<span class="line"><span>  text-align: center; /* 水平居中 */</span></span>
<span class="line"><span>  vertical-align: middle; /* 垂直居中 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="5"><li>绝对定位 + margin</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.container {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.center {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 50%;</span></span>
<span class="line"><span>  left: 50%;</span></span>
<span class="line"><span>  margin-top: -50%; /* 水平垂直居中 */</span></span>
<span class="line"><span>  margin-left: -50%; /* 水平垂直居中 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="6"><li>text-align + vertical-align :::</li></ol><h3 id="_6-bfc实现原理-可以解决的问题-如何创建bfc" tabindex="-1">6.BFC实现原理，可以解决的问题，如何创建BFC <a class="header-anchor" href="#_6-bfc实现原理-可以解决的问题-如何创建bfc" aria-label="Permalink to &quot;6.BFC实现原理，可以解决的问题，如何创建BFC&quot;">​</a></h3><details class="details custom-block"><summary>参考</summary><ul><li>什么是 BFC <ul><li><strong>BFC（Block Formatting Context）格式化上下文</strong>，是 Web 页面中盒模型布局的 CSS 渲染模式，<strong>指一个独立的渲染区域或者说是一个隔离的独立容器</strong>。</li></ul></li><li>形成 BFC 的条件 <ul><li>根元素</li><li>flex</li><li>grid</li><li>浮动元素，float 除 none 以外的值</li><li>定位元素，position（absolute，fixed）</li><li>display 为以下其中之一的值 inline-block，table-cell，table-caption</li><li>overflow 除了 visible 以外的值（hidden，auto，scroll）</li></ul></li><li>BFC 的特性 <ul><li>内部的 Box 会在垂直方向上一个接一个的放置。</li><li>垂直方向上的距离由 margin 决定</li><li>bfc 的区域不会与 float 的元素区域重叠。</li><li>计算 bfc 的高度时，浮动元素也参与计算</li><li>bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。 :::</li></ul></li></ul><h3 id="_7-可使用css函数复用代码-实现特殊效果" tabindex="-1">7.可使用CSS函数复用代码，实现特殊效果 <a class="header-anchor" href="#_7-可使用css函数复用代码-实现特殊效果" aria-label="Permalink to &quot;7.可使用CSS函数复用代码，实现特殊效果&quot;">​</a></h3><p>略~~~</p><h3 id="_8-postcss、sass、less的异同-以及使用配置-至少掌握一种" tabindex="-1">8.PostCSS、Sass、Less的异同，以及使用配置，至少掌握一种 <a class="header-anchor" href="#_8-postcss、sass、less的异同-以及使用配置-至少掌握一种" aria-label="Permalink to &quot;8.PostCSS、Sass、Less的异同，以及使用配置，至少掌握一种&quot;">​</a></h3><p>略~~~</p><h3 id="_9-css模块化方案、如何配置按需加载、如何防止css阻塞渲染" tabindex="-1">9.CSS模块化方案、如何配置按需加载、如何防止CSS阻塞渲染 <a class="header-anchor" href="#_9-css模块化方案、如何配置按需加载、如何防止css阻塞渲染" aria-label="Permalink to &quot;9.CSS模块化方案、如何配置按需加载、如何防止CSS阻塞渲染&quot;">​</a></h3><p>略~~~</p><h3 id="_10-熟练使用css实现常见动画-如渐变、移动、旋转、缩放等等" tabindex="-1">10.熟练使用CSS实现常见动画，如渐变、移动、旋转、缩放等等 <a class="header-anchor" href="#_10-熟练使用css实现常见动画-如渐变、移动、旋转、缩放等等" aria-label="Permalink to &quot;10.熟练使用CSS实现常见动画，如渐变、移动、旋转、缩放等等&quot;">​</a></h3><p>略~~~</p><h3 id="_11-css浏览器兼容性写法-了解不同api在不同浏览器下的兼容性情况" tabindex="-1">11.CSS浏览器兼容性写法，了解不同API在不同浏览器下的兼容性情况 <a class="header-anchor" href="#_11-css浏览器兼容性写法-了解不同api在不同浏览器下的兼容性情况" aria-label="Permalink to &quot;11.CSS浏览器兼容性写法，了解不同API在不同浏览器下的兼容性情况&quot;">​</a></h3><p>略~~~</p><h3 id="_12-掌握一套完整的响应式布局方案" tabindex="-1">12.掌握一套完整的响应式布局方案 <a class="header-anchor" href="#_12-掌握一套完整的响应式布局方案" aria-label="Permalink to &quot;12.掌握一套完整的响应式布局方案&quot;">​</a></h3><p>略~~~</p></details></details>`,26),i=[t];function p(r,o,c,d,h,b){return s(),e("div",null,i)}const g=a(l,[["render",p]]);export{m as __pageData,g as default};
