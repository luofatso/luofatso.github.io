import{_ as e,o,c as l,a2 as i}from"./chunks/framework.DkMK-_fX.js";const b=JSON.parse('{"title":"vue2相关","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/vue2.md","filePath":"大前端/Vue2/vue2.md","lastUpdated":1728700067000}'),a={name:"大前端/Vue2/vue2.md"},t=i('<h1 id="vue2相关" tabindex="-1">vue2相关 <a class="header-anchor" href="#vue2相关" aria-label="Permalink to &quot;vue2相关&quot;">​</a></h1><h2 id="_1-mvvm" tabindex="-1">1.MVVM <a class="header-anchor" href="#_1-mvvm" aria-label="Permalink to &quot;1.MVVM&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据</li><li>View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的</li><li>ViewModel 层：做了两件事达到了数据的双向绑定 一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。</li></ul></div><h2 id="_2-为什么-data-是一个函数" tabindex="-1">2.为什么 data 是一个函数 <a class="header-anchor" href="#_2-为什么-data-是一个函数" aria-label="Permalink to &quot;2.为什么 data 是一个函数&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结果</p></div><h2 id="_3-vue-组件通讯有哪几种方式" tabindex="-1">3.Vue 组件通讯有哪几种方式 <a class="header-anchor" href="#_3-vue-组件通讯有哪几种方式" aria-label="Permalink to &quot;3.Vue 组件通讯有哪几种方式&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的</li><li>$parent,$children 获取当前组件的父组件和当前组件的子组件</li><li>$attrs 和$listeners A-&gt;B-&gt;C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题</li><li>父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)</li><li>$refs 获取组件实例</li><li>eventBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式</li><li>vuex 状态管理</li></ul></div><h2 id="_4-vue-的生命周期方法有哪些" tabindex="-1">4.Vue 的生命周期方法有哪些 <a class="header-anchor" href="#_4-vue-的生命周期方法有哪些" aria-label="Permalink to &quot;4.Vue 的生命周期方法有哪些&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后</p><ul><li>beforeCreate 创建前执行（vue实例的挂载元素$el和数据对象data都为undefined，还未初始化）</li><li>created 完成创建 （完成了data数据初始化，el还未初始化）</li><li>beforeMount 载入前（vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。）</li><li>mounted 载入后html已经渲染(vue实例挂载完成，data.message成功渲染。)</li><li>beforeUpdate 更新前状态（view层的数据变化前，不是data中的数据改变前）</li><li>updated 更新状态后</li><li>beforeDestroy 销毁前</li><li>destroyed 销毁后 （在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在）</li></ul><p>说一下每一个阶段可以做的事情</p><ul><li>beforeCreate:可以在这里加一个loading事件，在加载实例时触发。</li><li>created:初始化完成时的事件写这里，如果这里结束了loading事件，异步请求也在这里调用。</li><li>mounted:挂在元素，获取到DOM节点</li><li>updated:对数据进行处理的函数写这里。</li><li>beforeDestroy:可以写一个确认停止事件的确认框。</li></ul></div><h2 id="_5-v-if-和-v-show-的区别" tabindex="-1">5.v-if 和 v-show 的区别 <a class="header-anchor" href="#_5-v-if-和-v-show-的区别" aria-label="Permalink to &quot;5.v-if 和 v-show 的区别&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。</li><li>v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）</li></ul></div><h2 id="_6-怎样理解-vue-的单向数据流" tabindex="-1">6.怎样理解 Vue 的单向数据流 <a class="header-anchor" href="#_6-怎样理解-vue-的单向数据流" aria-label="Permalink to &quot;6.怎样理解 Vue 的单向数据流&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。</p></div><h2 id="_7-computed-和-watch-的区别和运用的场景" tabindex="-1">7.computed 和 watch 的区别和运用的场景 <a class="header-anchor" href="#_7-computed-和-watch-的区别和运用的场景" aria-label="Permalink to &quot;7.computed 和 watch 的区别和运用的场景&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容，它可以设置 getter 和 setter。</li><li>watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。</li></ul></div><h2 id="_8-v-if-与-v-for-为什么不建议一起使用" tabindex="-1">8.v-if 与 v-for 为什么不建议一起使用 <a class="header-anchor" href="#_8-v-if-与-v-for-为什么不建议一起使用" aria-label="Permalink to &quot;8.v-if 与 v-for 为什么不建议一起使用&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>v-for 和 v-if 不要在同一个标签中使用,因为解析时先解析 v-for 再解析 v-if。如果遇到需要同时使用时可以考虑写成计算属性的方式。</p></div><h2 id="_9-vue-router-路由钩子函数是什么" tabindex="-1">9.vue-router 路由钩子函数是什么 <a class="header-anchor" href="#_9-vue-router-路由钩子函数是什么" aria-label="Permalink to &quot;9.vue-router 路由钩子函数是什么&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>路由钩子的执行流程, 钩子函数种类有:全局守卫、路由守卫、组件守卫</p><ul><li><p>全局导航钩子（跳转前进行判断拦截） router.beforeEach(to, from, next)、router.beforeResolve(to, from, next)、router.afterEach(to, from ,next)</p></li><li><p>组件内钩子 beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave</p></li><li><p>单独路由独享组件 beforeEnter</p></li></ul><p><strong>完整的导航解析流程</strong>:</p><ol><li>导航被触发。</li><li>在失活的组件里调用 beforeRouteLeave 守卫。</li><li>调用全局的 beforeEach 守卫。</li><li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li><li>在路由配置里调用 beforeEnter。</li><li>解析异步路由组件。</li><li>在被激活的组件里调用 beforeRouteEnter。</li><li>调用全局的 beforeResolve 守卫 (2.5+)。</li><li>导航被确认。</li><li>调用全局的 afterEach 钩子。</li><li>触发 DOM 更新。</li><li>调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。</li></ol></div><h2 id="_10-vue-router-路由模式实现原理" tabindex="-1">10.vue-router 路由模式实现原理 <a class="header-anchor" href="#_10-vue-router-路由模式实现原理" aria-label="Permalink to &quot;10.vue-router 路由模式实现原理&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>hash 模式</li></ul><p>location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。</p><p>可以为 hash 的改变添加监听事件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.addEventListener(&quot;hashchange&quot;, funcRef, false);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了</p><p>特点：兼容性好但是不美观</p><ul><li>history 模式</li></ul><p>利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。</p><p>这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。</p></div><h2 id="_11-vue-router中-route-与-router-的区别" tabindex="-1">11.vue-router中 $route 与 $router 的区别 <a class="header-anchor" href="#_11-vue-router中-route-与-router-的区别" aria-label="Permalink to &quot;11.vue-router中 $route 与 $router 的区别&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>简单来说，<code>$route</code> 是当前路由的信息对象，<code>$router</code> 是用来管理路由的对象(路由实例对象)。</p><ul><li><code>$route</code> 是一个表示当前路由信息的对象，包含了当前 URL 解析得到的有用信息，如当前路由的名称、路径、参数、查询参数等信息。 <blockquote><p>我们可以在 <code>Vue</code> 组件中通过 <code>$route</code> 来访问这些信息，如 <code>$route.path</code> 获取当前路径，<code>$route.params</code> 获取当前路由的参数等。</p></blockquote></li><li><code>$router</code> 是一个路由实例对象，它是用来管理所有路由的，包含了路由跳转方法、全局路由钩子函数、当前路由实例对象等。 <blockquote><p>我们可以在 <code>Vue</code> 组件中通过 <code>$router</code> 来调用这些方法，如 <code>$router.push</code> 进行路由跳转，<code>$router.beforeEach</code> 注册全局前置路由钩子等。</p></blockquote></li></ul></div><h2 id="_12-写过自定义指令吗-原理是什么" tabindex="-1">12.写过自定义指令吗 原理是什么 <a class="header-anchor" href="#_12-写过自定义指令吗-原理是什么" aria-label="Permalink to &quot;12.写过自定义指令吗 原理是什么&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>指令本质上是装饰器，是 vue 对 HTML 元素的扩展，给 HTML 元素增加自定义功能。vue 编译 DOM 时，会找到指令对象，执行指令的相关方法。</p><p>自定义指令有五个生命周期（也叫钩子函数），分别是 bind、inserted、update、componentUpdated、unbind</p><ul><li>bind(el, binding, vnode)：指令第一次绑定到元素时调用，可以在这里进行一次性初始化设置，接收三个参数： <ul><li>el：指令绑定的元素。</li><li>binding：指令对象，包含指令的值、名称、修饰符等。</li><li>vnode：Vue 编译生成的虚拟节点。</li></ul></li><li>inserted(el, binding, vnode)：指令被插入到元素时调用，通常用于操作 DOM 元素，接收三个参数，与 bind 相同。</li><li>update(el, binding, vnode, oldVnode)：元素数据更新时调用，但子元素尚未更新，接收四个参数，与 bind 相同。</li><li>componentUpdated(el, binding, vnode, oldVnode)：元素及其子元素数据更新时调用，与 update 类似，但保证子元素已更新，接收四个参数，与 bind 相同。</li><li>unbind(el, binding, vnode)：指令被移除时调用，接收三个参数，与 bind 相同。</li></ul></div>',25),r=[t];function u(d,s,c,n,p,h){return o(),l("div",null,r)}const f=e(a,[["render",u]]);export{b as __pageData,f as default};
