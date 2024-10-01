import{_ as a,o as e,c as o,a2 as r}from"./chunks/framework.DkMK-_fX.js";const m=JSON.parse('{"title":"前端自检系列 --- 运行环境","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"关于工作/前端自检/运行环境.md","filePath":"关于工作/前端自检/运行环境.md","lastUpdated":1681959689000}'),i={name:"关于工作/前端自检/运行环境.md"},t=r('<h1 id="前端自检系列-运行环境" tabindex="-1">前端自检系列 --- 运行环境 <a class="header-anchor" href="#前端自检系列-运行环境" aria-label="Permalink to &quot;前端自检系列 --- 运行环境&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_1-浏览器api">1 浏览器API</a><ul><li><a href="#_1-1-浏览器提供的符合w3c标准的dom操作api、浏览器差异、兼容性">1.1 浏览器提供的符合W3C标准的DOM操作API、浏览器差异、兼容性</a></li><li><a href="#_1-2-浏览器提供的浏览器对象模型-bom-提供的所有全局api、浏览器差异、兼容性">1.2 浏览器提供的浏览器对象模型 (BOM)提供的所有全局API、浏览器差异、兼容性</a></li><li><a href="#_1-3-大量dom操作、海量数据的性能优化-合并操作、diff、requestanimationframe等">1.3 大量DOM操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等)</a></li><li><a href="#_1-4-浏览器海量数据存储、操作性能优化">1.4 浏览器海量数据存储、操作性能优化</a></li><li><a href="#_1-5-dom事件流的具体实现机制、不同浏览器的差异、事件代理">1.5 DOM事件流的具体实现机制、不同浏览器的差异、事件代理</a></li><li><a href="#_1-6-前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库">1.6 前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库</a></li><li><a href="#_1-7-浏览器的同源策略-如何避免同源策略-几种方式的异同点以及如何选型">1.7 浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型</a></li><li><a href="#_1-8-浏览器提供的几种存储机制、优缺点、开发中正确的选择">1.8 浏览器提供的几种存储机制、优缺点、开发中正确的选择</a></li><li><a href="#_1-9-浏览器跨标签通信">1.9 浏览器跨标签通信</a></li></ul></li><li><a href="#_2-浏览器原理">2 浏览器原理</a><ul><li><a href="#_2-1-各浏览器使用的javascript引擎以及它们的异同点、如何在代码中进行区分">2.1 各浏览器使用的JavaScript引擎以及它们的异同点、如何在代码中进行区分</a></li><li><a href="#_2-2-请求数据到请求结束与服务器进行了几次交互">2.2 请求数据到请求结束与服务器进行了几次交互</a></li><li><a href="#_2-3-可详细描述浏览器从输入url到页面展现的详细过程">2.3 可详细描述浏览器从输入URL到页面展现的详细过程</a></li><li><a href="#_2-4-浏览器解析html代码的原理-以及构建dom树的流程">2.4 浏览器解析HTML代码的原理，以及构建DOM树的流程</a></li><li><a href="#_2-5-浏览器如何解析css规则-并将其应用到dom树上">2.5 浏览器如何解析CSS规则，并将其应用到DOM树上</a></li><li><a href="#_2-6-浏览器如何将解析好的带有样式的dom树进行绘制">2.6 浏览器如何将解析好的带有样式的DOM树进行绘制</a></li><li><a href="#_2-7-浏览器的运行机制-如何配置资源异步同步加载">2.7 浏览器的运行机制，如何配置资源异步同步加载</a></li><li><a href="#_2-8-浏览器回流与重绘的底层原理-引发原因-如何有效避免">2.8 浏览器回流与重绘的底层原理，引发原因，如何有效避免</a></li><li><a href="#_2-9-浏览器的垃圾回收机制-如何避免内存泄漏">2.9 浏览器的垃圾回收机制，如何避免内存泄漏</a></li><li><a href="#_2-10-浏览器采用的缓存方案-如何选择和控制合适的缓存方案">2.10 浏览器采用的缓存方案，如何选择和控制合适的缓存方案</a></li><li><a href="#_3-node">3 Node</a></li><li><a href="#_3-1-理解node在应用程序中的作用-可以使用node搭建前端运行环境、使用node操作文件、操作数据库等等">3.1 理解Node在应用程序中的作用，可以使用Node搭建前端运行环境、使用Node操作文件、操作数据库等等</a></li><li><a href="#_3-2-掌握一种node开发框架-如express-express和koa的区别">3.2 掌握一种Node开发框架，如Express，Express和Koa的区别</a></li><li><a href="#_3-3-熟练使用node提供的api如path、http、child-process等并理解其实现原理">3.3 熟练使用Node提供的API如Path、Http、Child Process等并理解其实现原理</a></li><li><a href="#_3-4-node的底层运行原理、和浏览器的异同">3.4 Node的底层运行原理、和浏览器的异同</a></li><li><a href="#_3-5-node事件驱动、非阻塞机制的实现原理">3.5 Node事件驱动、非阻塞机制的实现原理</a></li></ul></li></ul></nav><p>我们需要理清语言和环境的关系：</p><blockquote><p>ECMAScript描述了JavaScript语言的语法和基本对象规范</p></blockquote><blockquote><p>浏览器作为JavaScript的一种运行环境，为它提供了：文档对象模型（DOM），描述处理网页内容的方法和接口、浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口</p></blockquote><blockquote><p>Node也是JavaScript的一种运行环境，为它提供了操作I/O、网络等API</p></blockquote><h2 id="_1-浏览器api" tabindex="-1">1 浏览器API <a class="header-anchor" href="#_1-浏览器api" aria-label="Permalink to &quot;1 浏览器API&quot;">​</a></h2><h3 id="_1-1-浏览器提供的符合w3c标准的dom操作api、浏览器差异、兼容性" tabindex="-1">1.1 浏览器提供的符合W3C标准的DOM操作API、浏览器差异、兼容性 <a class="header-anchor" href="#_1-1-浏览器提供的符合w3c标准的dom操作api、浏览器差异、兼容性" aria-label="Permalink to &quot;1.1 浏览器提供的符合W3C标准的DOM操作API、浏览器差异、兼容性&quot;">​</a></h3><h3 id="_1-2-浏览器提供的浏览器对象模型-bom-提供的所有全局api、浏览器差异、兼容性" tabindex="-1">1.2 浏览器提供的浏览器对象模型 (BOM)提供的所有全局API、浏览器差异、兼容性 <a class="header-anchor" href="#_1-2-浏览器提供的浏览器对象模型-bom-提供的所有全局api、浏览器差异、兼容性" aria-label="Permalink to &quot;1.2 浏览器提供的浏览器对象模型 (BOM)提供的所有全局API、浏览器差异、兼容性&quot;">​</a></h3><h3 id="_1-3-大量dom操作、海量数据的性能优化-合并操作、diff、requestanimationframe等" tabindex="-1">1.3 大量DOM操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等) <a class="header-anchor" href="#_1-3-大量dom操作、海量数据的性能优化-合并操作、diff、requestanimationframe等" aria-label="Permalink to &quot;1.3 大量DOM操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等)&quot;">​</a></h3><h3 id="_1-4-浏览器海量数据存储、操作性能优化" tabindex="-1">1.4 浏览器海量数据存储、操作性能优化 <a class="header-anchor" href="#_1-4-浏览器海量数据存储、操作性能优化" aria-label="Permalink to &quot;1.4 浏览器海量数据存储、操作性能优化&quot;">​</a></h3><h3 id="_1-5-dom事件流的具体实现机制、不同浏览器的差异、事件代理" tabindex="-1">1.5 DOM事件流的具体实现机制、不同浏览器的差异、事件代理 <a class="header-anchor" href="#_1-5-dom事件流的具体实现机制、不同浏览器的差异、事件代理" aria-label="Permalink to &quot;1.5 DOM事件流的具体实现机制、不同浏览器的差异、事件代理&quot;">​</a></h3><h3 id="_1-6-前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库" tabindex="-1">1.6 前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库 <a class="header-anchor" href="#_1-6-前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库" aria-label="Permalink to &quot;1.6 前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库&quot;">​</a></h3><h3 id="_1-7-浏览器的同源策略-如何避免同源策略-几种方式的异同点以及如何选型" tabindex="-1">1.7 浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型 <a class="header-anchor" href="#_1-7-浏览器的同源策略-如何避免同源策略-几种方式的异同点以及如何选型" aria-label="Permalink to &quot;1.7 浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型&quot;">​</a></h3><h3 id="_1-8-浏览器提供的几种存储机制、优缺点、开发中正确的选择" tabindex="-1">1.8 浏览器提供的几种存储机制、优缺点、开发中正确的选择 <a class="header-anchor" href="#_1-8-浏览器提供的几种存储机制、优缺点、开发中正确的选择" aria-label="Permalink to &quot;1.8 浏览器提供的几种存储机制、优缺点、开发中正确的选择&quot;">​</a></h3><h3 id="_1-9-浏览器跨标签通信" tabindex="-1">1.9 浏览器跨标签通信 <a class="header-anchor" href="#_1-9-浏览器跨标签通信" aria-label="Permalink to &quot;1.9 浏览器跨标签通信&quot;">​</a></h3><h2 id="_2-浏览器原理" tabindex="-1">2 浏览器原理 <a class="header-anchor" href="#_2-浏览器原理" aria-label="Permalink to &quot;2 浏览器原理&quot;">​</a></h2><h3 id="_2-1-各浏览器使用的javascript引擎以及它们的异同点、如何在代码中进行区分" tabindex="-1">2.1 各浏览器使用的JavaScript引擎以及它们的异同点、如何在代码中进行区分 <a class="header-anchor" href="#_2-1-各浏览器使用的javascript引擎以及它们的异同点、如何在代码中进行区分" aria-label="Permalink to &quot;2.1 各浏览器使用的JavaScript引擎以及它们的异同点、如何在代码中进行区分&quot;">​</a></h3><h3 id="_2-2-请求数据到请求结束与服务器进行了几次交互" tabindex="-1">2.2 请求数据到请求结束与服务器进行了几次交互 <a class="header-anchor" href="#_2-2-请求数据到请求结束与服务器进行了几次交互" aria-label="Permalink to &quot;2.2 请求数据到请求结束与服务器进行了几次交互&quot;">​</a></h3><h3 id="_2-3-可详细描述浏览器从输入url到页面展现的详细过程" tabindex="-1">2.3 可详细描述浏览器从输入URL到页面展现的详细过程 <a class="header-anchor" href="#_2-3-可详细描述浏览器从输入url到页面展现的详细过程" aria-label="Permalink to &quot;2.3 可详细描述浏览器从输入URL到页面展现的详细过程&quot;">​</a></h3><h3 id="_2-4-浏览器解析html代码的原理-以及构建dom树的流程" tabindex="-1">2.4 浏览器解析HTML代码的原理，以及构建DOM树的流程 <a class="header-anchor" href="#_2-4-浏览器解析html代码的原理-以及构建dom树的流程" aria-label="Permalink to &quot;2.4 浏览器解析HTML代码的原理，以及构建DOM树的流程&quot;">​</a></h3><h3 id="_2-5-浏览器如何解析css规则-并将其应用到dom树上" tabindex="-1">2.5 浏览器如何解析CSS规则，并将其应用到DOM树上 <a class="header-anchor" href="#_2-5-浏览器如何解析css规则-并将其应用到dom树上" aria-label="Permalink to &quot;2.5 浏览器如何解析CSS规则，并将其应用到DOM树上&quot;">​</a></h3><h3 id="_2-6-浏览器如何将解析好的带有样式的dom树进行绘制" tabindex="-1">2.6 浏览器如何将解析好的带有样式的DOM树进行绘制 <a class="header-anchor" href="#_2-6-浏览器如何将解析好的带有样式的dom树进行绘制" aria-label="Permalink to &quot;2.6 浏览器如何将解析好的带有样式的DOM树进行绘制&quot;">​</a></h3><h3 id="_2-7-浏览器的运行机制-如何配置资源异步同步加载" tabindex="-1">2.7 浏览器的运行机制，如何配置资源异步同步加载 <a class="header-anchor" href="#_2-7-浏览器的运行机制-如何配置资源异步同步加载" aria-label="Permalink to &quot;2.7 浏览器的运行机制，如何配置资源异步同步加载&quot;">​</a></h3><h3 id="_2-8-浏览器回流与重绘的底层原理-引发原因-如何有效避免" tabindex="-1">2.8 浏览器回流与重绘的底层原理，引发原因，如何有效避免 <a class="header-anchor" href="#_2-8-浏览器回流与重绘的底层原理-引发原因-如何有效避免" aria-label="Permalink to &quot;2.8 浏览器回流与重绘的底层原理，引发原因，如何有效避免&quot;">​</a></h3><h3 id="_2-9-浏览器的垃圾回收机制-如何避免内存泄漏" tabindex="-1">2.9 浏览器的垃圾回收机制，如何避免内存泄漏 <a class="header-anchor" href="#_2-9-浏览器的垃圾回收机制-如何避免内存泄漏" aria-label="Permalink to &quot;2.9 浏览器的垃圾回收机制，如何避免内存泄漏&quot;">​</a></h3><h3 id="_2-10-浏览器采用的缓存方案-如何选择和控制合适的缓存方案" tabindex="-1">2.10 浏览器采用的缓存方案，如何选择和控制合适的缓存方案 <a class="header-anchor" href="#_2-10-浏览器采用的缓存方案-如何选择和控制合适的缓存方案" aria-label="Permalink to &quot;2.10 浏览器采用的缓存方案，如何选择和控制合适的缓存方案&quot;">​</a></h3><h3 id="_3-node" tabindex="-1">3 Node <a class="header-anchor" href="#_3-node" aria-label="Permalink to &quot;3 Node&quot;">​</a></h3><h3 id="_3-1-理解node在应用程序中的作用-可以使用node搭建前端运行环境、使用node操作文件、操作数据库等等" tabindex="-1">3.1 理解Node在应用程序中的作用，可以使用Node搭建前端运行环境、使用Node操作文件、操作数据库等等 <a class="header-anchor" href="#_3-1-理解node在应用程序中的作用-可以使用node搭建前端运行环境、使用node操作文件、操作数据库等等" aria-label="Permalink to &quot;3.1 理解Node在应用程序中的作用，可以使用Node搭建前端运行环境、使用Node操作文件、操作数据库等等&quot;">​</a></h3><h3 id="_3-2-掌握一种node开发框架-如express-express和koa的区别" tabindex="-1">3.2 掌握一种Node开发框架，如Express，Express和Koa的区别 <a class="header-anchor" href="#_3-2-掌握一种node开发框架-如express-express和koa的区别" aria-label="Permalink to &quot;3.2 掌握一种Node开发框架，如Express，Express和Koa的区别&quot;">​</a></h3><h3 id="_3-3-熟练使用node提供的api如path、http、child-process等并理解其实现原理" tabindex="-1">3.3 熟练使用Node提供的API如Path、Http、Child Process等并理解其实现原理 <a class="header-anchor" href="#_3-3-熟练使用node提供的api如path、http、child-process等并理解其实现原理" aria-label="Permalink to &quot;3.3 熟练使用Node提供的API如Path、Http、Child Process等并理解其实现原理&quot;">​</a></h3><h3 id="_3-4-node的底层运行原理、和浏览器的异同" tabindex="-1">3.4 Node的底层运行原理、和浏览器的异同 <a class="header-anchor" href="#_3-4-node的底层运行原理、和浏览器的异同" aria-label="Permalink to &quot;3.4 Node的底层运行原理、和浏览器的异同&quot;">​</a></h3><h3 id="_3-5-node事件驱动、非阻塞机制的实现原理" tabindex="-1">3.5 Node事件驱动、非阻塞机制的实现原理 <a class="header-anchor" href="#_3-5-node事件驱动、非阻塞机制的实现原理" aria-label="Permalink to &quot;3.5 Node事件驱动、非阻塞机制的实现原理&quot;">​</a></h3>',33),l=[t];function h(d,n,s,c,_,f){return e(),o("div",null,l)}const q=a(i,[["render",h]]);export{m as __pageData,q as default};
