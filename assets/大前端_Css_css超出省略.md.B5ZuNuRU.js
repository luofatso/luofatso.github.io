import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const l="/assets/css-hide.Hv94TarV.png",e="/assets/css-hide1.N7dy5i9-.png",x=JSON.parse('{"title":"css超出省略","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Css/css超出省略.md","filePath":"大前端/Css/css超出省略.md","lastUpdated":1727401527000}'),i={name:"大前端/Css/css超出省略.md"},r=p('<h1 id="css超出省略" tabindex="-1">css超出省略 <a class="header-anchor" href="#css超出省略" aria-label="Permalink to &quot;css超出省略&quot;">​</a></h1><p>收起状态 <img src="'+l+'" alt="收起状态"> 展开状态 <img src="'+e+`" alt="展开状态"></p><h2 id="_1-新版" tabindex="-1">1 新版 <a class="header-anchor" href="#_1-新版" aria-label="Permalink to &quot;1 新版&quot;">​</a></h2><p><a href="https://codepen.io/luofatso/pen/MWQZoQE" target="_blank" rel="noreferrer">在线演示</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      .wrapper {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        margin: 50px auto;</span></span>
<span class="line"><span>        width: 800px;</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>        border-radius: 8px;</span></span>
<span class="line"><span>        padding: 15px;</span></span>
<span class="line"><span>        box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .text {</span></span>
<span class="line"><span>        font-size: 20px;</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>        text-overflow: ellipsis;</span></span>
<span class="line"><span>        text-align: justify;</span></span>
<span class="line"><span>        /* display: flex; */</span></span>
<span class="line"><span>        display: -webkit-box;</span></span>
<span class="line"><span>        -webkit-line-clamp: 3;</span></span>
<span class="line"><span>        -webkit-box-orient: vertical;</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .text::before {</span></span>
<span class="line"><span>        content: &#39;&#39;;</span></span>
<span class="line"><span>        height: calc(100% - 24px);</span></span>
<span class="line"><span>        float: right;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .text::after {</span></span>
<span class="line"><span>        content: &#39;&#39;;</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        background: #fff;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .btn {</span></span>
<span class="line"><span>        float: right;</span></span>
<span class="line"><span>        clear: both;</span></span>
<span class="line"><span>        margin-left: 10px;</span></span>
<span class="line"><span>        font-size: 16px;</span></span>
<span class="line"><span>        padding: 0 8px;</span></span>
<span class="line"><span>        background: #3f51b5;</span></span>
<span class="line"><span>        line-height: 24px;</span></span>
<span class="line"><span>        border-radius: 4px;</span></span>
<span class="line"><span>        color: #fff;</span></span>
<span class="line"><span>        cursor: pointer;</span></span>
<span class="line"><span>        /* margin-top: -30px; */</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .btn::before {</span></span>
<span class="line"><span>        content: &#39;展开&#39;;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp {</span></span>
<span class="line"><span>        display: none;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp:checked + .text {</span></span>
<span class="line"><span>        -webkit-line-clamp: 999;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp:checked + .text::after {</span></span>
<span class="line"><span>        visibility: hidden;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp:checked + .text .btn::before {</span></span>
<span class="line"><span>        content: &#39;收起&#39;;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>      &lt;input id=&quot;exp1&quot; class=&quot;exp&quot; type=&quot;checkbox&quot; /&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;text&quot;&gt;</span></span>
<span class="line"><span>        &lt;label class=&quot;btn&quot; for=&quot;exp1&quot;&gt;&lt;/label&gt;</span></span>
<span class="line"><span>        浮动元素是如何定位的</span></span>
<span class="line"><span>        正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。</span></span>
<span class="line"><span>        在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>      &lt;input id=&quot;exp2&quot; class=&quot;exp&quot; type=&quot;checkbox&quot; /&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;text&quot;&gt;</span></span>
<span class="line"><span>        &lt;label class=&quot;btn&quot; for=&quot;exp2&quot;&gt;&lt;/label&gt;</span></span>
<span class="line"><span>        浮动元素是如何定位的</span></span>
<span class="line"><span>        正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="_2-兼容版" tabindex="-1">2 兼容版 <a class="header-anchor" href="#_2-兼容版" aria-label="Permalink to &quot;2 兼容版&quot;">​</a></h2><p><a href="https://codepen.io/luofatso/pen/LYQMLdq" target="_blank" rel="noreferrer">在线演示</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      .wrapper {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        margin: 50px auto;</span></span>
<span class="line"><span>        width: 800px;</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>        border-radius: 8px;</span></span>
<span class="line"><span>        padding: 15px;</span></span>
<span class="line"><span>        box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .text {</span></span>
<span class="line"><span>        font-size: 20px;</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>        text-overflow: ellipsis;</span></span>
<span class="line"><span>        text-align: justify;</span></span>
<span class="line"><span>        /* display: flex; */</span></span>
<span class="line"><span>        /*   display: -webkit-box;</span></span>
<span class="line"><span>  -webkit-line-clamp: 3;</span></span>
<span class="line"><span>  -webkit-box-orient: vertical; */</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        line-height: 1.5;</span></span>
<span class="line"><span>        max-height: 4.5em;</span></span>
<span class="line"><span>        transition: 0.3s max-height;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .text::before {</span></span>
<span class="line"><span>        content: &#39;&#39;;</span></span>
<span class="line"><span>        height: calc(100% - 26px);</span></span>
<span class="line"><span>        float: right;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .text::after {</span></span>
<span class="line"><span>        content: &#39;&#39;;</span></span>
<span class="line"><span>        width: 999vw;</span></span>
<span class="line"><span>        height: 999vw;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;</span></span>
<span class="line"><span>        margin-left: -100px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .btn {</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        float: right;</span></span>
<span class="line"><span>        clear: both;</span></span>
<span class="line"><span>        margin-left: 20px;</span></span>
<span class="line"><span>        font-size: 16px;</span></span>
<span class="line"><span>        padding: 0 8px;</span></span>
<span class="line"><span>        background: #3f51b5;</span></span>
<span class="line"><span>        line-height: 24px;</span></span>
<span class="line"><span>        border-radius: 4px;</span></span>
<span class="line"><span>        color: #fff;</span></span>
<span class="line"><span>        cursor: pointer;</span></span>
<span class="line"><span>        /* margin-top: -30px; */</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .btn::after {</span></span>
<span class="line"><span>        content: &#39;展开&#39;;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp {</span></span>
<span class="line"><span>        display: none;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp:checked + .text {</span></span>
<span class="line"><span>        max-height: 200px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp:checked + .text::after {</span></span>
<span class="line"><span>        visibility: hidden;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp:checked + .text .btn::before {</span></span>
<span class="line"><span>        visibility: hidden;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .exp:checked + .text .btn::after {</span></span>
<span class="line"><span>        content: &#39;收起&#39;;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .btn::before {</span></span>
<span class="line"><span>        content: &#39;...&#39;;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        left: -5px;</span></span>
<span class="line"><span>        color: #333;</span></span>
<span class="line"><span>        transform: translateX(-100%);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>      &lt;input id=&quot;exp1&quot; class=&quot;exp&quot; type=&quot;checkbox&quot; /&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;text&quot;&gt;</span></span>
<span class="line"><span>        &lt;label class=&quot;btn&quot; for=&quot;exp1&quot;&gt;&lt;/label&gt;</span></span>
<span class="line"><span>        浮动元素是如何定位的</span></span>
<span class="line"><span>        正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。</span></span>
<span class="line"><span>        在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>      &lt;input id=&quot;exp2&quot; class=&quot;exp&quot; type=&quot;checkbox&quot; /&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;text&quot;&gt;</span></span>
<span class="line"><span>        &lt;label class=&quot;btn&quot; for=&quot;exp2&quot;&gt;&lt;/label&gt;</span></span>
<span class="line"><span>        浮动元素是如何定位的</span></span>
<span class="line"><span>        正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div>`,8),c=[r];function t(b,u,o,m,d,h){return n(),a("div",null,c)}const q=s(i,[["render",t]]);export{x as __pageData,q as default};
