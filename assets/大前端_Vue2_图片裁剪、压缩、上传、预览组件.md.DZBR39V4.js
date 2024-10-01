import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const g=JSON.parse('{"title":"利用vue-cropper做一个关于图片裁剪、压缩、上传、预览等的公共组件","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/图片裁剪、压缩、上传、预览组件.md","filePath":"大前端/Vue2/图片裁剪、压缩、上传、预览组件.md","lastUpdated":1727401527000}'),l={name:"大前端/Vue2/图片裁剪、压缩、上传、预览组件.md"},e=p(`<h1 id="利用vue-cropper做一个关于图片裁剪、压缩、上传、预览等的公共组件" tabindex="-1">利用vue-cropper做一个关于图片裁剪、压缩、上传、预览等的公共组件 <a class="header-anchor" href="#利用vue-cropper做一个关于图片裁剪、压缩、上传、预览等的公共组件" aria-label="Permalink to &quot;利用vue-cropper做一个关于图片裁剪、压缩、上传、预览等的公共组件&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-form-item label=&quot;头像&quot; prop=&quot;icon&quot; :rules=&quot;rules.required&quot;&gt;</span></span>
<span class="line"><span>　　&lt;Avatar v-on:cropped=&quot;doCrop&quot;</span></span>
<span class="line"><span>　　:cropperOption=&quot;cropperOption&quot;</span></span>
<span class="line"><span>　　:imageUrl=&quot;guestInfo.icon&quot;&gt;&lt;/Avatar&gt;</span></span>
<span class="line"><span>&lt;/el-form-item&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="封装组件" tabindex="-1">封装组件 <a class="header-anchor" href="#封装组件" aria-label="Permalink to &quot;封装组件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;upload-box&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;image-box&quot;</span></span>
<span class="line"><span>           v-if=&quot;imageUrl&quot;</span></span>
<span class="line"><span>           :style=&quot;{&#39;background-image&#39;: &#39;url(&#39;+ imageUrl +&#39;)&#39;, &#39;height&#39;: imageHeight}&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;upload&quot;&gt;</span></span>
<span class="line"><span>        &lt;h6 class=&quot;upload-des&quot;&gt;支持 jpg、png 格式大小 5M 以内的图片&lt;/h6&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;file&quot; @change=&quot;getFile&quot; ref=&quot;file&quot; id=&quot;file&quot;&gt;</span></span>
<span class="line"><span>        &lt;label for=&quot;file&quot;&gt;点击上传&lt;/label&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;!-- vueCropper 剪裁图片实现--&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;vue-cropper-box&quot; v-if=&quot;isShowCropper&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;vue-cropper-content&quot;&gt;</span></span>
<span class="line"><span>        &lt;vueCropper ref=&quot;cropper&quot;</span></span>
<span class="line"><span>          :img=&quot;option.img&quot;</span></span>
<span class="line"><span>          :outputSize=&quot;option.outputSize&quot;</span></span>
<span class="line"><span>          :outputType=&quot;option.outputType&quot;</span></span>
<span class="line"><span>          :info=&quot;option.info&quot;</span></span>
<span class="line"><span>          :canScale=&quot;option.canScale&quot;</span></span>
<span class="line"><span>          :autoCrop=&quot;option.autoCrop&quot;</span></span>
<span class="line"><span>          :autoCropWidth=&quot;option.autoCropWidth&quot;</span></span>
<span class="line"><span>          :autoCropHeight=&quot;option.autoCropHeight&quot;</span></span>
<span class="line"><span>          :fixed=&quot;option.fixed&quot;</span></span>
<span class="line"><span>          :fixedNumber=&quot;option.fixedNumber&quot;&gt;</span></span>
<span class="line"><span>        &lt;/vueCropper&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;el-button v-if=&quot;isShowCropper&quot; type=&quot;danger&quot; @click=&quot;onCubeImg&quot;&gt;确定裁剪图片&lt;/el-button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  import VueCropper from &quot;vue-cropper&quot;</span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>    name: &#39;Avatar&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    data () {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        //裁剪组件的基础配置option</span></span>
<span class="line"><span>        option: {</span></span>
<span class="line"><span>          img: &#39;&#39;, //裁剪图片的地址</span></span>
<span class="line"><span>          info: true, //裁剪框的大小信息</span></span>
<span class="line"><span>          outputSize: 1, // 裁剪生成图片的质量</span></span>
<span class="line"><span>          outputType: &#39;png&#39;, //裁剪生成图片的格式</span></span>
<span class="line"><span>          canScale: false, // 图片是否允许滚轮缩放</span></span>
<span class="line"><span>          autoCrop: true, // 是否默认生成截图框</span></span>
<span class="line"><span>          autoCropWidth: 195, // 默认生成截图框宽度</span></span>
<span class="line"><span>          autoCropHeight: 10, // 默认生成截图框高度</span></span>
<span class="line"><span>          fixed: false, //是否开启截图框宽高固定比例</span></span>
<span class="line"><span>          fixedNumber: [1, 1] //截图框的宽高比例</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        isShowCropper: false //是否显示截图框</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>      // 特殊配置</span></span>
<span class="line"><span>      cropperOption: {</span></span>
<span class="line"><span>        type: Object,</span></span>
<span class="line"><span>        default: () =&gt; {</span></span>
<span class="line"><span>          return null</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 默认图片</span></span>
<span class="line"><span>      imageUrl: {</span></span>
<span class="line"><span>        type: String,</span></span>
<span class="line"><span>        default: &#39;&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 图片展示高度</span></span>
<span class="line"><span>      imageHeight: {</span></span>
<span class="line"><span>        type: String,</span></span>
<span class="line"><span>        default: &#39;100px&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>      VueCropper</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>      getFile (e) {</span></span>
<span class="line"><span>        let _this = this</span></span>
<span class="line"><span>        var files = e.target.files[0]</span></span>
<span class="line"><span>        if (!e || !window.FileReader) return // 看支持不支持FileReader</span></span>
<span class="line"><span>        let reader = new FileReader()</span></span>
<span class="line"><span>        reader.readAsDataURL(files)</span></span>
<span class="line"><span>        reader.onloadend = function () {</span></span>
<span class="line"><span>          _this.isShowCropper = true</span></span>
<span class="line"><span>          _this.option.img = this.result</span></span>
<span class="line"><span>          _this.$refs.file.value = &#39;&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 确定裁剪图片</span></span>
<span class="line"><span>      onCubeImg () {</span></span>
<span class="line"><span>        this.$refs.cropper.getCropData((data) =&gt; {</span></span>
<span class="line"><span>          this.isShowCropper = false</span></span>
<span class="line"><span>          //console.log(&quot;压缩前的图片大小：&quot; + data.length)</span></span>
<span class="line"><span>          let img = new Image(),</span></span>
<span class="line"><span>            _this = this</span></span>
<span class="line"><span>          img.src = data</span></span>
<span class="line"><span>          img.onload = function() {</span></span>
<span class="line"><span>            //let _data = _this.compress(img)</span></span>
<span class="line"><span>            let blob = _this.dataURItoBlob(data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            let formData = new FormData()</span></span>
<span class="line"><span>            formData.append(&quot;icon&quot;, blob)</span></span>
<span class="line"><span>            //console.log(&quot;将blob对象转成formData对象：&quot; + formData.get(&quot;icon&quot;))</span></span>
<span class="line"><span>            _this.$emit(&#39;cropped&#39;, data, formData)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 压缩图片</span></span>
<span class="line"><span>      compress(img) {</span></span>
<span class="line"><span>        let canvas = document.createElement(&quot;canvas&quot;),</span></span>
<span class="line"><span>          ctx = canvas.getContext(&quot;2d&quot;),</span></span>
<span class="line"><span>          initSize = img.src.length,</span></span>
<span class="line"><span>          width = img.width,</span></span>
<span class="line"><span>          height = img.height;</span></span>
<span class="line"><span>        canvas.width = width</span></span>
<span class="line"><span>        canvas.height = height</span></span>
<span class="line"><span>        // 铺底色</span></span>
<span class="line"><span>        ctx.fillStyle = &quot;#fff&quot;</span></span>
<span class="line"><span>        ctx.fillRect(0, 0, canvas.width, canvas.height)</span></span>
<span class="line"><span>        ctx.drawImage(img, 0, 0, width, height)</span></span>
<span class="line"><span>        //进行压缩</span></span>
<span class="line"><span>        let ndata = canvas.toDataURL(&quot;image/jpeg&quot;, 0.8)</span></span>
<span class="line"><span>        //console.log(&quot;压缩后的图片大小：&quot; + ndata.length)</span></span>
<span class="line"><span>        return ndata</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // base64转成bolb对象</span></span>
<span class="line"><span>      dataURItoBlob(base64Data) {</span></span>
<span class="line"><span>        let byteString</span></span>
<span class="line"><span>        if (base64Data.split(&quot;,&quot;)[0].indexOf(&quot;base64&quot;) &gt;= 0)</span></span>
<span class="line"><span>          byteString = atob(base64Data.split(&quot;,&quot;)[1])</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>          byteString = unescape(base64Data.split(&quot;,&quot;)[1])</span></span>
<span class="line"><span>        let mimeString = base64Data .split(&quot;,&quot;)[0] .split(&quot;:&quot;)[1] .split(&quot;;&quot;)[0];</span></span>
<span class="line"><span>        let ia = new Uint8Array(byteString.length);</span></span>
<span class="line"><span>        for (let i = 0; i &lt; byteString.length; i++) {</span></span>
<span class="line"><span>            ia[i] = byteString.charCodeAt(i);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return new Blob([ia], { type: mimeString })</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 初始化配置文件</span></span>
<span class="line"><span>      initOptions () {</span></span>
<span class="line"><span>        this.isShowCropper = false</span></span>
<span class="line"><span>        if (this.cropperOption) {</span></span>
<span class="line"><span>          for (let key in this.option) {</span></span>
<span class="line"><span>            this.option[key] = this.cropperOption[key] || this.option[key]</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    created () {</span></span>
<span class="line"><span>      this.initOptions()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped lang=&quot;stylus&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span>  .upload-box {</span></span>
<span class="line"><span>    &amp; &gt; div {</span></span>
<span class="line"><span>      display inline-block</span></span>
<span class="line"><span>      vertical-align middle</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    &amp; .upload-des {</span></span>
<span class="line"><span>      margin 0</span></span>
<span class="line"><span>      font-weight 400</span></span>
<span class="line"><span>      color #909399</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .image-box {</span></span>
<span class="line"><span>    width 100px</span></span>
<span class="line"><span>    height 100px</span></span>
<span class="line"><span>    margin-right 20px</span></span>
<span class="line"><span>    background-size 100px auto</span></span>
<span class="line"><span>    background-position left center</span></span>
<span class="line"><span>    background-repeat no-repeat</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .upload {</span></span>
<span class="line"><span>    &amp; label {</span></span>
<span class="line"><span>      width: 80px;</span></span>
<span class="line"><span>      height: 24px;</span></span>
<span class="line"><span>      font-size: 12px;</span></span>
<span class="line"><span>      line-height: 24px;</span></span>
<span class="line"><span>      display: inline-block;</span></span>
<span class="line"><span>      border-radius: 4px;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      border: 1px solid #ddd;</span></span>
<span class="line"><span>      cursor pointer</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  input[type=&#39;file&#39;] {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .vue-cropper-box {</span></span>
<span class="line"><span>    width: 60%;</span></span>
<span class="line"><span>    height: 200px;</span></span>
<span class="line"><span>    margin: 15px 0px;</span></span>
<span class="line"><span>    .vue-cropper-content {</span></span>
<span class="line"><span>      height 200px</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br></div></div><h2 id="注意下面这个二进制文件接收和上传的问题" tabindex="-1">注意下面这个二进制文件接收和上传的问题: <a class="header-anchor" href="#注意下面这个二进制文件接收和上传的问题" aria-label="Permalink to &quot;注意下面这个二进制文件接收和上传的问题:&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>resetForm(){</span></span>
<span class="line"><span>　　this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>　　　　this.$refs.guest.clearValidate()</span></span>
<span class="line"><span>　　　　this.guestUpInfo = new FormData()</span></span>
<span class="line"><span>　　})</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 完成裁剪</span></span>
<span class="line"><span>doCrop(icon, file){</span></span>
<span class="line"><span>  this.guestInfo.icon = icon</span></span>
<span class="line"><span>  this.guestUpInfo = file</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//新增、编辑提交</span></span>
<span class="line"><span>submitGuest(){</span></span>
<span class="line"><span>  validCallback(this, &#39;guest&#39;, () =&gt; {</span></span>
<span class="line"><span>    this.guestUpInfo.append(&#39;name&#39;,this.guestInfo.name)</span></span>
<span class="line"><span>    this.guestUpInfo.append(&#39;position&#39;,this.guestInfo.position)</span></span>
<span class="line"><span>    this.guestUpInfo.append(&#39;description&#39;,this.guestInfo.description)</span></span>
<span class="line"><span>    if(this.guestInfo.seq){</span></span>
<span class="line"><span>      this.guestUpInfo.append(&#39;seq&#39;,this.guestInfo.seq)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(this.editGuest){</span></span>
<span class="line"><span>      this.guestUpInfo.append(&#39;id&#39;,this.guestInfo.id)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    publicSubmitApi(&#39;saveSpeaker&#39;, this.guestUpInfo, true).then(res =&gt; {</span></span>
<span class="line"><span>      if (res.status === 200) {</span></span>
<span class="line"><span>        this.guestShow = false</span></span>
<span class="line"><span>        this.fetchData()</span></span>
<span class="line"><span>        this.$message({</span></span>
<span class="line"><span>          message: this.editGuest ? &#39;编辑成功&#39; : &#39;新增成功&#39;,</span></span>
<span class="line"><span>          type: &#39;success&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,7),i=[e];function r(c,b,t,u,o,m){return n(),a("div",null,i)}const h=s(l,[["render",r]]);export{g as __pageData,h as default};
