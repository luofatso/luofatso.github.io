import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const q=JSON.parse('{"title":"Vue锚点双向定位Demo","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/Vue锚点双向定位.md","filePath":"大前端/Vue2/Vue锚点双向定位.md","lastUpdated":1728700067000}'),l={name:"大前端/Vue2/Vue锚点双向定位.md"},e=p(`<h1 id="vue锚点双向定位demo" tabindex="-1">Vue锚点双向定位Demo <a class="header-anchor" href="#vue锚点双向定位demo" aria-label="Permalink to &quot;Vue锚点双向定位Demo&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span>    &lt;nav :class=&quot;{fix: fix}&quot;&gt;</span></span>
<span class="line"><span>      &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li</span></span>
<span class="line"><span>          v-for=&quot;(it, i) in nav&quot;</span></span>
<span class="line"><span>          :key=&quot;i&quot;</span></span>
<span class="line"><span>          :class=&quot;{active: it.is}&quot;</span></span>
<span class="line"><span>          @click=&quot;navTo(&#39;.nav&#39;+(i-0+1),i)&quot;</span></span>
<span class="line"><span>        &gt;{{ it.name }}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/nav&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;nav1 box&quot; ref=&quot;nav0&quot;&gt;111111&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;nav2 box&quot; ref=&quot;nav1&quot;&gt;222222&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;nav3 box&quot; ref=&quot;nav2&quot;&gt;333333&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;nav4 box&quot; ref=&quot;nav3&quot;&gt;444444&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;nav5 box&quot; ref=&quot;nav4&quot;&gt;555555&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      fix: false,</span></span>
<span class="line"><span>      nav: [</span></span>
<span class="line"><span>        { is: true, name: &quot;导航一&quot; },</span></span>
<span class="line"><span>        { is: false, name: &quot;导航二&quot; },</span></span>
<span class="line"><span>        { is: false, name: &quot;导航三&quot; },</span></span>
<span class="line"><span>        { is: false, name: &quot;导航四&quot; },</span></span>
<span class="line"><span>        { is: false, name: &quot;导航五&quot; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    window.addEventListener(&quot;scroll&quot;, this.handleScroll);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    handleScroll() {</span></span>
<span class="line"><span>      var scrollTop =</span></span>
<span class="line"><span>        document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span>      // this.fix = scrollTop &gt; 290 ? true : false;</span></span>
<span class="line"><span>      if (scrollTop &lt; 290) {</span></span>
<span class="line"><span>        this.nav[0].is = true;</span></span>
<span class="line"><span>        this.fix = false;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        this.fix = true;</span></span>
<span class="line"><span>        this.nav.map((it, i) =&gt; {</span></span>
<span class="line"><span>          return (it.is = false);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        for (let i = this.nav.length - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span>          if (scrollTop &gt;= this.$refs[&quot;nav&quot; + i].offsetTop) {</span></span>
<span class="line"><span>            this.nav[i].is = true;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    navTo(querry, i) {</span></span>
<span class="line"><span>      this.$el.querySelector(querry).scrollIntoView({</span></span>
<span class="line"><span>        behavior: &quot;smooth&quot;, // 平滑过渡</span></span>
<span class="line"><span>        block: &quot;start&quot; // 上边框与视窗顶部平齐。默认值</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- Add &quot;scoped&quot; attribute to limit CSS to this component only --&gt;</span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>* {</span></span>
<span class="line"><span>  padding: 0;</span></span>
<span class="line"><span>  margin: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>nav {</span></span>
<span class="line"><span>  &amp;.fix {</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    z-index: 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ul {</span></span>
<span class="line"><span>    list-style: none;</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    flex-direction: row;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    li {</span></span>
<span class="line"><span>      height: 50px;</span></span>
<span class="line"><span>      width: 120px;</span></span>
<span class="line"><span>      border: 1px solid #000;</span></span>
<span class="line"><span>      &amp;.active {</span></span>
<span class="line"><span>        color: red;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.box {</span></span>
<span class="line"><span>  height: 500px;</span></span>
<span class="line"><span>  border: 1px solid #000;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div>`,2),i=[e];function r(c,t,b,u,o,m){return n(),a("div",null,i)}const v=s(l,[["render",r]]);export{q as __pageData,v as default};
