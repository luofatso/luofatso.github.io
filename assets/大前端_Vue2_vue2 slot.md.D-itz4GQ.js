import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const g=JSON.parse('{"title":"vue2 slot","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/vue2 slot.md","filePath":"大前端/Vue2/vue2 slot.md","lastUpdated":1728700067000}'),l={name:"大前端/Vue2/vue2 slot.md"},e=p(`<h1 id="vue2-slot" tabindex="-1">vue2 slot <a class="header-anchor" href="#vue2-slot" aria-label="Permalink to &quot;vue2 slot&quot;">​</a></h1><p>slot 官网翻译为插槽，通俗一点就是“占坑”，在组件模板中占好了的位置；当使用该组件模板的时候，组件标签里的内容就会自动占填坑（替换组件模板中 slot 位置）。</p><h3 id="默认内容" tabindex="-1">默认内容 <a class="header-anchor" href="#默认内容" aria-label="Permalink to &quot;默认内容&quot;">​</a></h3><p>test 组件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//在slot插槽里设置默认内容 Submit</span></span>
<span class="line"><span>&lt;button&gt;</span></span>
<span class="line"><span>  &lt;slot&gt;Submit&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在其它组件中使用</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;test&gt;按钮&lt;/test&gt; // 有值</span></span>
<span class="line"><span>&lt;test&gt;&lt;/test&gt; // 无值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>最后渲染得到</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 有值后的</span></span>
<span class="line"><span>&lt;button&gt;</span></span>
<span class="line"><span>   Submit</span></span>
<span class="line"><span>&lt;/button&gt;</span></span>
<span class="line"><span>// 无值后的</span></span>
<span class="line"><span>&lt;button&gt;</span></span>
<span class="line"><span>   Submit</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="具名插槽" tabindex="-1">具名插槽 <a class="header-anchor" href="#具名插槽" aria-label="Permalink to &quot;具名插槽&quot;">​</a></h3><p>有时候我们一个组件里需要多个插槽，这时候就该<code>slot</code>的<code>name</code>属性出场了。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//Child.vue</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;main&gt;</span></span>
<span class="line"><span>  //默认插槽</span></span>
<span class="line"><span>    &lt;slot&gt;</span></span>
<span class="line"><span>      //slot内为后备内容</span></span>
<span class="line"><span>      &lt;h3&gt;没传内容&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/main&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //具名插槽</span></span>
<span class="line"><span>  &lt;header&gt;</span></span>
<span class="line"><span>    &lt;slot name=&quot;header&quot;&gt;</span></span>
<span class="line"><span>      &lt;h3&gt;没传header插槽&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/header&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //作用域插槽</span></span>
<span class="line"><span>  &lt;footer&gt;</span></span>
<span class="line"><span>    &lt;slot name=&quot;footer&quot; testProps=&quot;子组件的值&quot;&gt;</span></span>
<span class="line"><span>      &lt;h3&gt;没传footer插槽&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Parent.vue</span></span>
<span class="line"><span>&lt;child&gt;</span></span>
<span class="line"><span>  &lt;!-- 默认插槽 --&gt;</span></span>
<span class="line"><span>  &lt;div&gt;默认插槽&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;!-- 具名插槽 --&gt;</span></span>
<span class="line"><span>  &lt;div slot=&quot;header&quot;&gt;具名插槽header&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;!-- 作用域插槽 --&gt;</span></span>
<span class="line"><span>  &lt;div slot=&quot;footer&quot; slot-scope=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>    {{slotProps.testProps}}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/child&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果一个<code>slot</code>不带<code>name</code>属性的话，那么它的<code>name</code>默认为<code>default</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>   &lt;template v-slot:header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>   &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template v-slot:footer&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>2.6.0 新增</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//Parent</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;child&gt;</span></span>
<span class="line"><span>   &lt;!--默认插槽--&gt;</span></span>
<span class="line"><span>   &lt;template v-slot&gt;</span></span>
<span class="line"><span>     &lt;div&gt;默认插槽&lt;/div&gt;</span></span>
<span class="line"><span>   &lt;/template&gt;</span></span>
<span class="line"><span>   &lt;!--具名插槽--&gt;</span></span>
<span class="line"><span>   &lt;template #header&gt;</span></span>
<span class="line"><span>     &lt;div&gt;具名插槽&lt;/div&gt;</span></span>
<span class="line"><span>   &lt;/template&gt;</span></span>
<span class="line"><span>   &lt;!--作用域插槽--&gt;</span></span>
<span class="line"><span>   &lt;template #footer=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>     &lt;div&gt;</span></span>
<span class="line"><span>      {{slotProps.testProps}}</span></span>
<span class="line"><span>     &lt;/div&gt;</span></span>
<span class="line"><span>   &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;child&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>   &lt;template #header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>   &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template #footer&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="拓展用法" tabindex="-1">拓展用法 <a class="header-anchor" href="#拓展用法" aria-label="Permalink to &quot;拓展用法&quot;">​</a></h3><ol><li>同样可以通过解构获取 v-slot={user},还可以重命名 v-slot=&quot;{user:newName}&quot;和定义默认值 v-slot=&quot;{user = &#39;默认值&#39;}&quot;</li><li>插槽名可以是动态变化的 v-slot:[slotName]</li><li>在 js 中判断某一个 slot 是否传递<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.$slots.default</span></span>
<span class="line"><span>this.$slots.header</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ol><li>默认插槽名为 default,可以省略 default 直接写 v-slot,缩写为#时不能不写参数，写成#default(这点所有指令都一样，v-bind、v-on)</li><li>多个插槽混用时，v-slot 不能省略 default</li></ol>`,22),t=[e];function i(r,c,b,o,u,d){return n(),a("div",null,t)}const h=s(l,[["render",i]]);export{g as __pageData,h as default};
