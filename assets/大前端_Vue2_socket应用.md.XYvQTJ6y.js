import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"socket 的应用","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/socket应用.md","filePath":"大前端/Vue2/socket应用.md","lastUpdated":1727401527000}'),e={name:"大前端/Vue2/socket应用.md"},l=p(`<h1 id="socket-的应用" tabindex="-1">socket 的应用 <a class="header-anchor" href="#socket-的应用" aria-label="Permalink to &quot;socket 的应用&quot;">​</a></h1><p>socket 这东西我就不做多的介绍了，相信大家都有相应的了解，本人呢也是这个样子的；最近刚好项目中应用了一下，这里记录一下。(本记录为 vue)</p><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add vue-socket.io</span></span>
<span class="line"><span>yarn add socket.io-client</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import VueSocketIO from &#39;vue-socket.io&#39;;</span></span>
<span class="line"><span>import SocketIO from &#39;socket.io-client&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 相关配置</span></span>
<span class="line"><span>const socketOptions = {</span></span>
<span class="line"><span>  transports: [&#39;websocket&#39;, &#39;polling&#39;],</span></span>
<span class="line"><span>  path: &#39;/api/socket.io&#39;,</span></span>
<span class="line"><span>  autoConnect: false,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(</span></span>
<span class="line"><span>  new VueSocketIO({</span></span>
<span class="line"><span>    // debug: process.env.NODE_ENV === &#39;production&#39; ? false : true, // debug调试，生产关闭</span></span>
<span class="line"><span>    connection: SocketIO(baseURL, socketOptions),</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="页面中使用" tabindex="-1">页面中使用 <a class="header-anchor" href="#页面中使用" aria-label="Permalink to &quot;页面中使用&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>created() {</span></span>
<span class="line"><span>  this.$socket.open(); // 开始连接socket</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>beforeDestroy() {</span></span>
<span class="line"><span>  this.sockets.unsubscribe(&quot;message&quot;);</span></span>
<span class="line"><span>  this.$socket.close();</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>// 注意是跟data、methods同级</span></span>
<span class="line"><span>sockets: {</span></span>
<span class="line"><span>  connecting() {</span></span>
<span class="line"><span>    // console.log(&quot;正在连接&quot;);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  disconnect() {</span></span>
<span class="line"><span>    // console.log(&quot;Socket断开&quot;);</span></span>
<span class="line"><span>    // 断开后取消监听事件，防止断开重新连接后多次监听</span></span>
<span class="line"><span>    this.sockets.unsubscribe(&quot;message&quot;);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  connect_failed() {</span></span>
<span class="line"><span>    // console.log(&quot;连接失败&quot;);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  connect() {</span></span>
<span class="line"><span>    // socket连接成功后加入相应的房间</span></span>
<span class="line"><span>    this.joinMessage();</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>methods: {</span></span>
<span class="line"><span>  // 加入响应房间</span></span>
<span class="line"><span>  joinMessage() {</span></span>
<span class="line"><span>    this.$socket.emit(</span></span>
<span class="line"><span>      &quot;join&quot;,</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        ...相关参数</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      (res) =&gt; {</span></span>
<span class="line"><span>          // 开始监听房间的事件</span></span>
<span class="line"><span>          this.sockets.subscribe(&quot;message&quot;, (res) =&gt; {</span></span>
<span class="line"><span>            ... 成功后相应处理</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="拓展使用" tabindex="-1">拓展使用 <a class="header-anchor" href="#拓展使用" aria-label="Permalink to &quot;拓展使用&quot;">​</a></h2><p>只使用 socket.io-client 插件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import SocketIO from &#39;socket.io-client&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 相关配置</span></span>
<span class="line"><span>const socketOptions = {</span></span>
<span class="line"><span>  transports: [&#39;websocket&#39;, &#39;polling&#39;],</span></span>
<span class="line"><span>  path: &#39;/api/socket.io&#39;,</span></span>
<span class="line"><span>  autoConnect: false,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prototype.$io = SocketIO(baseURLIo, {</span></span>
<span class="line"><span>  ...socketOptions,</span></span>
<span class="line"><span>  path: &#39;/cron/socket.io&#39;,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$io.open();</span></span>
<span class="line"><span>// this.$io.removeListener(&#39;message&#39;);// 清除监听</span></span>
<span class="line"><span>// this.$io.disconnect();// 断开连接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 断开之后清除监听事件</span></span>
<span class="line"><span>this.$io.on(&quot;disconnect&quot;, () =&gt; {</span></span>
<span class="line"><span>  this.$io.removeListener(&quot;message&quot;); // 清除监听</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>this.$io.on(&quot;connect&quot;, () =&gt; {</span></span>
<span class="line"><span>  this.$io.emit(</span></span>
<span class="line"><span>    &quot;join&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: this.userInfo.id,</span></span>
<span class="line"><span>      eventId: this.id,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    (res) =&gt; {</span></span>
<span class="line"><span>      if (res.statusCode == 200) {</span></span>
<span class="line"><span>        // 开始监听socket</span></span>
<span class="line"><span>        this.$io.on(&quot;message&quot;, (res) =&gt; {</span></span>
<span class="line"><span>          if (res.statusCode == 200) {</span></span>
<span class="line"><span>            this.handleSocketMsg(res);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,9),i=[l];function c(r,b,t,o,u,m){return n(),a("div",null,i)}const k=s(e,[["render",c]]);export{h as __pageData,k as default};
