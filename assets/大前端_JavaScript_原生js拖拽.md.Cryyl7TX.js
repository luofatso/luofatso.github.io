import{_ as n,o as s,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"JS原生拖拽","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/JavaScript/原生js拖拽.md","filePath":"大前端/JavaScript/原生js拖拽.md","lastUpdated":1727401527000}'),l={name:"大前端/JavaScript/原生js拖拽.md"},e=p(`<h1 id="js原生拖拽" tabindex="-1">JS原生拖拽 <a class="header-anchor" href="#js原生拖拽" aria-label="Permalink to &quot;JS原生拖拽&quot;">​</a></h1><p><a href="https://codepen.io/luofatso/pen/jOZXwga" target="_blank" rel="noreferrer">在线演示</a></p><p>源码：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;拖拽与缩放&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      * {</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>        padding: 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      #box {</span></span>
<span class="line"><span>        width: 100px;</span></span>
<span class="line"><span>        height: 100px;</span></span>
<span class="line"><span>        background: orange;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        left: 100px;</span></span>
<span class="line"><span>        top: 100px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .kuang {</span></span>
<span class="line"><span>        box-sizing: border-box;</span></span>
<span class="line"><span>        border: 1px solid #0f0;</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .kuang .dian {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        width: 10px;</span></span>
<span class="line"><span>        height: 10px;</span></span>
<span class="line"><span>        border-radius: 50%;</span></span>
<span class="line"><span>        background: #0f0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .left_top {</span></span>
<span class="line"><span>        left: -5px;</span></span>
<span class="line"><span>        top: -5px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .right_top {</span></span>
<span class="line"><span>        right: -5px;</span></span>
<span class="line"><span>        top: -5px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .left_bottom {</span></span>
<span class="line"><span>        left: -5px;</span></span>
<span class="line"><span>        bottom: -5px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .right_bottom {</span></span>
<span class="line"><span>        right: -5px;</span></span>
<span class="line"><span>        bottom: -5px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;box&quot; class=&quot;border&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    function MoveClass(</span></span>
<span class="line"><span>      id,</span></span>
<span class="line"><span>      options = {</span></span>
<span class="line"><span>        minWidth: 100,</span></span>
<span class="line"><span>        minHeight: 100,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ) {</span></span>
<span class="line"><span>      // 绑定ele属性</span></span>
<span class="line"><span>      this.ele = document.querySelector(id)</span></span>
<span class="line"><span>      this.options = options</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.move()</span></span>
<span class="line"><span>      this.editEle()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    MoveClass.prototype.move = function () {</span></span>
<span class="line"><span>      // ele的鼠标按下事件调用mousedown</span></span>
<span class="line"><span>      this.ele.onmousedown = (e) =&gt; {</span></span>
<span class="line"><span>        // 获取事件对象</span></span>
<span class="line"><span>        var e = e || window.event</span></span>
<span class="line"><span>        // 鼠标按下时，鼠标相对于元素的x坐标</span></span>
<span class="line"><span>        var x = e.offsetX</span></span>
<span class="line"><span>        // 鼠标按下时，鼠标相对于元素的y坐标</span></span>
<span class="line"><span>        var y = e.offsetY</span></span>
<span class="line"><span>        // 鼠标按下移动时调用mousemove</span></span>
<span class="line"><span>        document.onmousemove = (e) =&gt; {</span></span>
<span class="line"><span>          // 元素ele移动的距离l</span></span>
<span class="line"><span>          var l = e.clientX - x</span></span>
<span class="line"><span>          // 元素ele移动的距离l</span></span>
<span class="line"><span>          var t = e.clientY - y</span></span>
<span class="line"><span>          this.ele.style.left = l + &#39;px&#39;</span></span>
<span class="line"><span>          this.ele.style.top = t + &#39;px&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 当鼠标弹起时，清空onmousemove与onmouseup</span></span>
<span class="line"><span>        document.onmouseup = () =&gt; {</span></span>
<span class="line"><span>          document.onmousemove = null</span></span>
<span class="line"><span>          document.onmouseup = null</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    MoveClass.prototype.editoptions = {</span></span>
<span class="line"><span>      left_top: true,</span></span>
<span class="line"><span>      right_top: true,</span></span>
<span class="line"><span>      left_bottom: true,</span></span>
<span class="line"><span>      right_bottom: true,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    MoveClass.prototype.editEle = function () {</span></span>
<span class="line"><span>      // console.log(this.ele.clientWidth,this.ele.clientHeight);</span></span>
<span class="line"><span>      // console.log(this.ele.offsetLeft,this.ele.offsetTop);</span></span>
<span class="line"><span>      var that = this</span></span>
<span class="line"><span>      // 创建一个div</span></span>
<span class="line"><span>      var div = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>      // 遍历this.editoptions</span></span>
<span class="line"><span>      for (let attr in this.editoptions) {</span></span>
<span class="line"><span>        if (this.editoptions[attr]) {</span></span>
<span class="line"><span>          // 循环创建左上，左下，右上，右下方位的小点</span></span>
<span class="line"><span>          var dian = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>          dian.className = &#39;dian &#39; + attr</span></span>
<span class="line"><span>          // 设置类型为对应的attr</span></span>
<span class="line"><span>          dian.dataset.type = attr</span></span>
<span class="line"><span>          // 当按下对应方位的小点时</span></span>
<span class="line"><span>          dian.onmousedown = (e) =&gt; {</span></span>
<span class="line"><span>            var e = e || window.event</span></span>
<span class="line"><span>            // 先获取鼠标距离屏幕的left与top值</span></span>
<span class="line"><span>            var clientXY = {</span></span>
<span class="line"><span>              x: e.clientX,</span></span>
<span class="line"><span>              y: e.clientY,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 获取鼠标按下时ele的宽高</span></span>
<span class="line"><span>            var eleWH = {</span></span>
<span class="line"><span>              width: this.ele.clientWidth,</span></span>
<span class="line"><span>              height: this.ele.clientHeight,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 阻止事件冒泡（针对父元素的move）</span></span>
<span class="line"><span>            e.stopPropagation()</span></span>
<span class="line"><span>            // 通过e.target获取精准事件源对应的type值</span></span>
<span class="line"><span>            var type = e.target.dataset.type</span></span>
<span class="line"><span>            // 鼠标按下对应方位小点移动时，调用mousemove</span></span>
<span class="line"><span>            document.onmousemove = function (e) {</span></span>
<span class="line"><span>              // 查找type中是否包含”right“</span></span>
<span class="line"><span>              if (type.indexOf(&#39;right&#39;) &gt; -1) {</span></span>
<span class="line"><span>                // console.log(&quot;right&quot;);</span></span>
<span class="line"><span>                // 如果拖拽后的宽度小于最小宽度，就return出去</span></span>
<span class="line"><span>                if (</span></span>
<span class="line"><span>                  that.options.minWidth &gt;</span></span>
<span class="line"><span>                  eleWH.width + e.clientX - clientXY.x</span></span>
<span class="line"><span>                ) {</span></span>
<span class="line"><span>                  return</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // ele拖拽后的宽度为：初始width+拖拽后鼠标距离屏幕的距离 - 第一次按下时鼠标距离屏幕的距离</span></span>
<span class="line"><span>                that.ele.style.width =</span></span>
<span class="line"><span>                  eleWH.width + e.clientX - clientXY.x + &#39;px&#39;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              // 与”right“相同原理</span></span>
<span class="line"><span>              if (type.indexOf(&#39;bottom&#39;) &gt; -1) {</span></span>
<span class="line"><span>                // console.log(&quot;bottom&quot;);</span></span>
<span class="line"><span>                if (</span></span>
<span class="line"><span>                  that.options.minHeight &gt;</span></span>
<span class="line"><span>                  eleWH.height + e.clientY - clientXY.y</span></span>
<span class="line"><span>                ) {</span></span>
<span class="line"><span>                  return</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                that.ele.style.height =</span></span>
<span class="line"><span>                  eleWH.height + e.clientY - clientXY.y + &#39;px&#39;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              if (type.indexOf(&#39;top&#39;) &gt; -1) {</span></span>
<span class="line"><span>                // console.log(&quot;top&quot;);</span></span>
<span class="line"><span>                if (</span></span>
<span class="line"><span>                  that.options.minHeight &gt;</span></span>
<span class="line"><span>                  eleWH.height - e.clientY + clientXY.y</span></span>
<span class="line"><span>                ) {</span></span>
<span class="line"><span>                  return</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // ele拖拽后的高度为：初始height-拖拽后鼠标距离屏幕的距离 + 第一次按下时鼠标距离屏幕的距离</span></span>
<span class="line"><span>                that.ele.style.height =</span></span>
<span class="line"><span>                  eleWH.height - e.clientY + clientXY.y + &#39;px&#39;</span></span>
<span class="line"><span>                // 重新设置ele的top值为此时鼠标距离屏幕的y值</span></span>
<span class="line"><span>                that.ele.style.top = e.clientY + &#39;px&#39;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              // 与”top“相同原理</span></span>
<span class="line"><span>              if (type.indexOf(&#39;left&#39;) &gt; -1) {</span></span>
<span class="line"><span>                // console.log(&quot;left&quot;);</span></span>
<span class="line"><span>                if (</span></span>
<span class="line"><span>                  that.options.minWidth &gt;</span></span>
<span class="line"><span>                  eleWH.width - e.clientX + clientXY.x</span></span>
<span class="line"><span>                ) {</span></span>
<span class="line"><span>                  return</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                that.ele.style.width =</span></span>
<span class="line"><span>                  eleWH.width - e.clientX + clientXY.x + &#39;px&#39;</span></span>
<span class="line"><span>                // 重新设置ele的left值为此时鼠标距离屏幕的x值</span></span>
<span class="line"><span>                that.ele.style.left = e.clientX + &#39;px&#39;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            document.onmouseup = function () {</span></span>
<span class="line"><span>              document.onmousemove = null</span></span>
<span class="line"><span>              document.onmouseup = null</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 将类名为”dian“的div添加到div中</span></span>
<span class="line"><span>        div.appendChild(dian)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 为div设置类名</span></span>
<span class="line"><span>      div.className = &#39;kuang&#39;</span></span>
<span class="line"><span>      // 将类名为”kuang“的div添加到ele中</span></span>
<span class="line"><span>      this.ele.appendChild(div)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // new一个MoveClass对象</span></span>
<span class="line"><span>    var moveClass = new MoveClass(&#39;#box&#39;)</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br></div></div>`,4),i=[e];function r(c,b,t,u,m,o){return s(),a("div",null,i)}const g=n(l,[["render",r]]);export{h as __pageData,g as default};
