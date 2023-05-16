# vue2相关

## 1.MVVM

::: info
- Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据
- View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的
- ViewModel 层：做了两件事达到了数据的双向绑定 一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。
:::

## 2.为什么 data 是一个函数

::: info
组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结果
:::

## 3.Vue 组件通讯有哪几种方式

::: info
- props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的
- $parent,$children 获取当前组件的父组件和当前组件的子组件
- $attrs 和$listeners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题
- 父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)
- $refs 获取组件实例
- eventBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式
- vuex 状态管理
:::

## 4.Vue 的生命周期方法有哪些

::: info
总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后

- beforeCreate 创建前执行（vue实例的挂载元素$el和数据对象data都为undefined，还未初始化）
- created 完成创建 （完成了data数据初始化，el还未初始化）
- beforeMount 载入前（vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。）
- mounted 载入后html已经渲染(vue实例挂载完成，data.message成功渲染。)
- beforeUpdate 更新前状态（view层的数据变化前，不是data中的数据改变前）
- updated 更新状态后
- beforeDestroy 销毁前
- destroyed 销毁后 （在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在）

说一下每一个阶段可以做的事情

- beforeCreate:可以在这里加一个loading事件，在加载实例时触发。
- created:初始化完成时的事件写这里，如果这里结束了loading事件，异步请求也在这里调用。
- mounted:挂在元素，获取到DOM节点
- updated:对数据进行处理的函数写这里。
- beforeDestroy:可以写一个确认停止事件的确认框。
:::

## 5.v-if 和 v-show 的区别

::: info
- v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。
- v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）
:::

## 6.怎样理解 Vue 的单向数据流

::: info
数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。
:::

## 7.computed 和 watch 的区别和运用的场景

::: info
- computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容，它可以设置 getter 和 setter。
- watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
:::

## 8.v-if 与 v-for 为什么不建议一起使用

::: info
v-for 和 v-if 不要在同一个标签中使用,因为解析时先解析 v-for 再解析 v-if。如果遇到需要同时使用时可以考虑写成计算属性的方式。
:::

## 9.vue-router 路由钩子函数是什么

::: info
路由钩子的执行流程, 钩子函数种类有:全局守卫、路由守卫、组件守卫

- 全局导航钩子（跳转前进行判断拦截）
router.beforeEach(to, from, next)、router.beforeResolve(to, from, next)、router.afterEach(to, from ,next)

- 组件内钩子
beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
- 单独路由独享组件
beforeEnter

**完整的导航解析流程**:
1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

:::

## 10.vue-router 路由模式实现原理

::: info

- hash 模式

location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。

可以为 hash 的改变添加监听事件

```
window.addEventListener("hashchange", funcRef, false);
```
每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了

特点：兼容性好但是不美观

- history 模式

利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。

这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。
:::

## 11.vue-router中 $route 与 $router 的区别

::: info

简单来说，`$route` 是当前路由的信息对象，`$router` 是用来管理路由的对象(路由实例对象)。

- `$route` 是一个表示当前路由信息的对象，包含了当前 URL 解析得到的有用信息，如当前路由的名称、路径、参数、查询参数等信息。
> 我们可以在 `Vue` 组件中通过 `$route` 来访问这些信息，如 `$route.path` 获取当前路径，`$route.params` 获取当前路由的参数等。
- `$router` 是一个路由实例对象，它是用来管理所有路由的，包含了路由跳转方法、全局路由钩子函数、当前路由实例对象等。
> 我们可以在 `Vue` 组件中通过 `$router` 来调用这些方法，如 `$router.push` 进行路由跳转，`$router.beforeEach` 注册全局前置路由钩子等。

:::

## 12.写过自定义指令吗 原理是什么

::: info
指令本质上是装饰器，是 vue 对 HTML 元素的扩展，给 HTML 元素增加自定义功能。vue 编译 DOM 时，会找到指令对象，执行指令的相关方法。

自定义指令有五个生命周期（也叫钩子函数），分别是 bind、inserted、update、componentUpdated、unbind

- bind(el, binding, vnode)：指令第一次绑定到元素时调用，可以在这里进行一次性初始化设置，接收三个参数：
  - el：指令绑定的元素。
  - binding：指令对象，包含指令的值、名称、修饰符等。
  - vnode：Vue 编译生成的虚拟节点。
- inserted(el, binding, vnode)：指令被插入到元素时调用，通常用于操作 DOM 元素，接收三个参数，与 bind 相同。
- update(el, binding, vnode, oldVnode)：元素数据更新时调用，但子元素尚未更新，接收四个参数，与 bind 相同。
- componentUpdated(el, binding, vnode, oldVnode)：元素及其子元素数据更新时调用，与 update 类似，但保证子元素已更新，接收四个参数，与 bind 相同。
- unbind(el, binding, vnode)：指令被移除时调用，接收三个参数，与 bind 相同。

:::