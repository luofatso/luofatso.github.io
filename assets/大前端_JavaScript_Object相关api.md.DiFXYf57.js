import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"Object相关api","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/JavaScript/Object相关api.md","filePath":"大前端/JavaScript/Object相关api.md","lastUpdated":1728700067000}'),e={name:"大前端/JavaScript/Object相关api.md"},l=p(`<h1 id="object相关api" tabindex="-1">Object相关api <a class="header-anchor" href="#object相关api" aria-label="Permalink to &quot;Object相关api&quot;">​</a></h1><p>[TOC]</p><h2 id="object-defineproperty-obj-prop-descriptor" tabindex="-1">Object.defineProperty(obj,prop,descriptor) <a class="header-anchor" href="#object-defineproperty-obj-prop-descriptor" aria-label="Permalink to &quot;Object.defineProperty(obj,prop,descriptor)&quot;">​</a></h2><p>方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</p><ul><li>obj要定义属性的对象。</li><li>prop要定义或修改的属性的名称或 Symbol 。</li><li>descriptor要定义或修改的属性描述符。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const object1 = {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(object1, &#39;property1&#39;, {</span></span>
<span class="line"><span>  value: 42,</span></span>
<span class="line"><span>  writable: false</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>object1.property1 = 77;</span></span>
<span class="line"><span>// throws an error in strict mode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(object1.property1);</span></span>
<span class="line"><span>// expected output: 42</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="object-defineproperties" tabindex="-1">Object.defineProperties（） <a class="header-anchor" href="#object-defineproperties" aria-label="Permalink to &quot;Object.defineProperties（）&quot;">​</a></h2><p>方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var obj = {};</span></span>
<span class="line"><span>Object.defineProperties(obj, {</span></span>
<span class="line"><span>  &#39;property1&#39;: {</span></span>
<span class="line"><span>    value: true,</span></span>
<span class="line"><span>    writable: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &#39;property2&#39;: {</span></span>
<span class="line"><span>    value: &#39;Hello&#39;,</span></span>
<span class="line"><span>    writable: false</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // etc. etc.</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="object-getownpropertydescriptor" tabindex="-1">Object.getOwnPropertyDescriptor（） <a class="header-anchor" href="#object-getownpropertydescriptor" aria-label="Permalink to &quot;Object.getOwnPropertyDescriptor（）&quot;">​</a></h2><p>自有属性指的是直接称为该对象的属性，不需要从原型链上进行查找的属性。 返回指定对象所有自身属性（非继承属性）的描述对象。 方法会返回某个对象属性的描述对象（descriptor）。</p><blockquote><p>obj需要查找的目标对象 prop目标对象内属性名称</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const object1 = {</span></span>
<span class="line"><span>  property1: 42</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const descriptor1 = Object.getOwnPropertyDescriptor(object1, &#39;property1&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(descriptor1.configurable);</span></span>
<span class="line"><span>// expected output: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(descriptor1.value);</span></span>
<span class="line"><span>// expected output: 42</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var o, d;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>o = { get foo() { return 17; } };</span></span>
<span class="line"><span>d = Object.getOwnPropertyDescriptor(o, &quot;foo&quot;);</span></span>
<span class="line"><span>// d {</span></span>
<span class="line"><span>//   configurable: true,</span></span>
<span class="line"><span>//   enumerable: true,</span></span>
<span class="line"><span>//   get: /*the getter function*/,</span></span>
<span class="line"><span>//   set: undefined</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>o = { bar: 42 };</span></span>
<span class="line"><span>d = Object.getOwnPropertyDescriptor(o, &quot;bar&quot;);</span></span>
<span class="line"><span>// d {</span></span>
<span class="line"><span>//   configurable: true,</span></span>
<span class="line"><span>//   enumerable: true,</span></span>
<span class="line"><span>//   value: 42,</span></span>
<span class="line"><span>//   writable: true</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>o = {};</span></span>
<span class="line"><span>Object.defineProperty(o, &quot;baz&quot;, {</span></span>
<span class="line"><span>  value: 8675309,</span></span>
<span class="line"><span>  writable: false,</span></span>
<span class="line"><span>  enumerable: false</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>d = Object.getOwnPropertyDescriptor(o, &quot;baz&quot;);</span></span>
<span class="line"><span>// d {</span></span>
<span class="line"><span>//   value: 8675309,</span></span>
<span class="line"><span>//   writable: false,</span></span>
<span class="line"><span>//   enumerable: false,</span></span>
<span class="line"><span>//   configurable: false</span></span>
<span class="line"><span>// }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="object-getownpropertydescriptors" tabindex="-1">Object.getOwnPropertyDescriptors（） <a class="header-anchor" href="#object-getownpropertydescriptors" aria-label="Permalink to &quot;Object.getOwnPropertyDescriptors（）&quot;">​</a></h2><p>方法用作获取一个对象的所有自身属性的替代。 方法，返回指定对象所有自身属性（非继承属性）的描述对象。</p><h2 id="object-getprototypeof" tabindex="-1">Object.getPrototypeOf（） <a class="header-anchor" href="#object-getprototypeof" aria-label="Permalink to &quot;Object.getPrototypeOf（）&quot;">​</a></h2><p>方法用于读取一个对象的原型对象。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const prototype1 = {};</span></span>
<span class="line"><span>const object1 = Object.create(prototype1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Object.getPrototypeOf(object1) === prototype1);</span></span>
<span class="line"><span>// expected output: true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="object-setprototypeof" tabindex="-1">Object.setPrototypeOf（） <a class="header-anchor" href="#object-setprototypeof" aria-label="Permalink to &quot;Object.setPrototypeOf（）&quot;">​</a></h2><p>用来设置一个对象的原型对象（prototype），返回参数对象本身。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let proto = {};</span></span>
<span class="line"><span>let obj = { x: 10 };</span></span>
<span class="line"><span>Object.setPrototypeOf(obj, proto);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>proto.y = 20;</span></span>
<span class="line"><span>proto.z = 40;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>obj.x // 10</span></span>
<span class="line"><span>obj.y // 20</span></span>
<span class="line"><span>obj.z // 40</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="object-prototype-hasownproperty" tabindex="-1">Object.prototype.hasOwnProperty（） <a class="header-anchor" href="#object-prototype-hasownproperty" aria-label="Permalink to &quot;Object.prototype.hasOwnProperty（）&quot;">​</a></h2><p>方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const object1 = {};</span></span>
<span class="line"><span>object1.property1 = 42;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(object1.hasOwnProperty(&#39;property1&#39;));</span></span>
<span class="line"><span>// expected output: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(object1.hasOwnProperty(&#39;toString&#39;));</span></span>
<span class="line"><span>// expected output: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(object1.hasOwnProperty(&#39;hasOwnProperty&#39;));</span></span>
<span class="line"><span>// expected output: false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,24),r=[l];function i(t,c,b,o,u,d){return n(),a("div",null,r)}const j=s(e,[["render",i]]);export{h as __pageData,j as default};
