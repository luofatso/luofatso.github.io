import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const q=JSON.parse('{"title":"element树形结构+穿梭框实例","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/element树形结构+穿梭框实例.md","filePath":"大前端/Vue2/element树形结构+穿梭框实例.md","lastUpdated":1728700067000}'),l={name:"大前端/Vue2/element树形结构+穿梭框实例.md"},e=p(`<h1 id="element树形结构-穿梭框实例" tabindex="-1">element树形结构+穿梭框实例 <a class="header-anchor" href="#element树形结构-穿梭框实例" aria-label="Permalink to &quot;element树形结构+穿梭框实例&quot;">​</a></h1><p>[TOC]</p><ul><li>下载依赖</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i el-tree-transfer -S</span></span>
<span class="line"><span>or</span></span>
<span class="line"><span>yarn add el-tree-transfer</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>使用</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    // 其他代码</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    // 使用树形穿梭框组件</span></span>
<span class="line"><span>    &lt;tree-transfer</span></span>
<span class="line"><span>        :title=&quot;title&quot;                 //标题 类型：Array 必填：false 默认：[&quot;源列表&quot;, &quot;目标列表&quot;]</span></span>
<span class="line"><span>        :from_data=&#39;fromData&#39;         //源数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid</span></span>
<span class="line"><span>        :to_data=&#39;toData&#39;             //目标数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid</span></span>
<span class="line"><span>        :defaultProps=&quot;{label:&#39;label&#39;}&quot; //配置项-同el-tree中props 必填： false 补充：用法和el-tree的props一样</span></span>
<span class="line"><span>        @addBtn=&#39;add&#39;                 //点击添加按钮时触发的事件 回调参数：function(fromData,toData,obj),树形穿梭框transfer模式分别为1.移动后左侧数据，2.移动后右侧数据，3.移动的节点keys、nodes、halfKeys、halfNodes对象；通讯录addressList模式时返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表</span></span>
<span class="line"><span>        @removeBtn=&#39;remove&#39;            //点击移除按钮时触发的事件 回调参数：function(fromData,toData,obj),树形穿梭框transfer模式分别为1.移动后左侧数据，2.移动后右侧数据，3.移动的节点keys、nodes、halfKeys、halfNodes对象；通讯录addressList模式时返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表</span></span>
<span class="line"><span>        :mode=&#39;mode&#39;                 //设置模式，字段可选值为transfer|addressList 类型：String 必填：false 补充：mode默认为transfer模式，即树形穿梭框模式，可配置字段为addressList改为通讯录模式，通讯录模式时按钮不可自定义名字，如要自定义标题名在title数组传入四个值即可，addressList模式时标题默认为通讯录、收件人、抄送人、密送人</span></span>
<span class="line"><span>        height=&#39;400px&#39;             //高度 类型：String 必填：false 默认：320px</span></span>
<span class="line"><span>        filter                     //是否开启筛选功能 类型：Boolean 必填：false</span></span>
<span class="line"><span>        openAll&gt;                  //是否默认展开全部 类型：Boolean 必填：false</span></span>
<span class="line"><span>    &lt;/tree-transfer&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  import treeTransfer from &#39;el-tree-transfer&#39;    // 引入</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  export defult {</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>      return:{</span></span>
<span class="line"><span>        title: [&quot;待选&quot;,&quot;已选&quot;],    //标题 类型：Array 必填：false 默认：[&quot;源列表&quot;, &quot;目标列表&quot;]</span></span>
<span class="line"><span>        mode: &quot;transfer&quot;, //设置模式，字段可选值为transfer|addressList 类型：String 必填：false 补充：mode默认为transfer模式，即树形穿梭框模式，可配置字段为addressList改为通讯录模式，通讯录模式时按钮不可自定义名字，如要自定义标题名在title数组传入四个值即可，addressList模式时标题默认为通讯录、收件人、抄送人、密送人</span></span>
<span class="line"><span>        fromData:[    //源数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            id: &quot;1&quot;,</span></span>
<span class="line"><span>            pid: 0,    //自定义pid的参数名，默认为&quot;pid&quot; 必填：false</span></span>
<span class="line"><span>            label: &quot;一级 1&quot;,</span></span>
<span class="line"><span>            children: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                id: &quot;1-1&quot;,</span></span>
<span class="line"><span>                pid: &quot;1&quot;,</span></span>
<span class="line"><span>                label: &quot;二级 1-1&quot;,</span></span>
<span class="line"><span>                disabled: true,</span></span>
<span class="line"><span>                children: []</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                id: &quot;1-2&quot;,</span></span>
<span class="line"><span>                pid: &quot;1&quot;,</span></span>
<span class="line"><span>                label: &quot;二级 1-2&quot;,</span></span>
<span class="line"><span>                children: [</span></span>
<span class="line"><span>                  {</span></span>
<span class="line"><span>                    id: &quot;1-2-1&quot;,</span></span>
<span class="line"><span>                    pid: &quot;1-2&quot;,</span></span>
<span class="line"><span>                    children: [],</span></span>
<span class="line"><span>                    label: &quot;二级 1-2-1&quot;</span></span>
<span class="line"><span>                  },</span></span>
<span class="line"><span>                  {</span></span>
<span class="line"><span>                    id: &quot;1-2-2&quot;,</span></span>
<span class="line"><span>                    pid: &quot;1-2&quot;,</span></span>
<span class="line"><span>                    children: [],</span></span>
<span class="line"><span>                    label: &quot;二级 1-2-2&quot;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        toData:[]    //目标数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods:{</span></span>
<span class="line"><span>      // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList</span></span>
<span class="line"><span>      changeMode() {</span></span>
<span class="line"><span>        if (this.mode == &quot;transfer&quot;) {</span></span>
<span class="line"><span>          this.mode = &quot;addressList&quot;;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          this.mode = &quot;transfer&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 监听穿梭框组件添加</span></span>
<span class="line"><span>      add(fromData,toData,obj){</span></span>
<span class="line"><span>        // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象</span></span>
<span class="line"><span>        // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表</span></span>
<span class="line"><span>        console.log(&quot;fromData:&quot;, fromData);</span></span>
<span class="line"><span>        console.log(&quot;toData:&quot;, toData);</span></span>
<span class="line"><span>        console.log(&quot;obj:&quot;, obj);</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 监听穿梭框组件移除</span></span>
<span class="line"><span>      remove(fromData,toData,obj){</span></span>
<span class="line"><span>        // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象</span></span>
<span class="line"><span>        // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表</span></span>
<span class="line"><span>        console.log(&quot;fromData:&quot;, fromData);</span></span>
<span class="line"><span>        console.log(&quot;toData:&quot;, toData);</span></span>
<span class="line"><span>        console.log(&quot;obj:&quot;, obj);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    components:{ treeTransfer } // 注册</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div><h2 id="实战代码" tabindex="-1">实战代码 <a class="header-anchor" href="#实战代码" aria-label="Permalink to &quot;实战代码&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;!-- 商品/服务新增 --&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;tree-transfer</span></span>
<span class="line"><span>      :title=&quot;title&quot;</span></span>
<span class="line"><span>      :from_data=&quot;fromData&quot;</span></span>
<span class="line"><span>      :to_data=&quot;toData&quot;</span></span>
<span class="line"><span>      :defaultProps=&quot;defaultProps&quot;</span></span>
<span class="line"><span>      :defaultCheckedKeys=&quot;defaultCheckedKeys&quot;</span></span>
<span class="line"><span>      :defaultTransfer=&quot;true&quot;</span></span>
<span class="line"><span>      @addBtn=&quot;add&quot;</span></span>
<span class="line"><span>      @removeBtn=&quot;remove&quot;</span></span>
<span class="line"><span>      :mode=&quot;mode&quot;</span></span>
<span class="line"><span>      height=&quot;400px&quot;</span></span>
<span class="line"><span>      openAll</span></span>
<span class="line"><span>    &gt;&lt;/tree-transfer&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;foot&quot;&gt;</span></span>
<span class="line"><span>      &lt;el-button @click=&quot;cancel&quot; size=&quot;big&quot;&gt;取消&lt;/el-button&gt;</span></span>
<span class="line"><span>      &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot; size=&quot;big&quot;&gt;确定&lt;/el-button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import Vue from &quot;vue&quot;;</span></span>
<span class="line"><span>import treeTransfer from &quot;el-tree-transfer&quot;; // 引入</span></span>
<span class="line"><span>import { SERVICE_URLS } from &quot;../../../../libs/service.url&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: { treeTransfer }, // 注册</span></span>
<span class="line"><span>  props:[&#39;id&#39;],</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      title: [&quot;权限总列表&quot;, &quot;当前角色权限&quot;], //标题 类型：Array 必填：false 默认：[&quot;源列表&quot;, &quot;目标列表&quot;]</span></span>
<span class="line"><span>      mode: &quot;transfer&quot;, //设置模式，字段可选值为transfer|addressList 类型：String 必填：false 补充：mode默认为transfer模式，即树形穿梭框模式，可配置字段为addressList改为通讯录模式，通讯录模式时按钮不可自定义名字，如要自定义标题名在title数组传入四个值即可，addressList模式时标题默认为通讯录、收件人、抄送人、密送人</span></span>
<span class="line"><span>      defaultProps:{</span></span>
<span class="line"><span>        children: &quot;childMenu&quot;,</span></span>
<span class="line"><span>        label: &quot;menuName&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      defaultCheckedKeys:[],</span></span>
<span class="line"><span>      fromData: [</span></span>
<span class="line"><span>        //源数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          id: &quot;1&quot;,</span></span>
<span class="line"><span>          pid: 0, //自定义pid的参数名，默认为&quot;pid&quot; 必填：false</span></span>
<span class="line"><span>          label: &quot;一级 1&quot;,</span></span>
<span class="line"><span>          children: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              id: &quot;1-1&quot;,</span></span>
<span class="line"><span>              pid: &quot;1&quot;,</span></span>
<span class="line"><span>              label: &quot;二级 1-1&quot;,</span></span>
<span class="line"><span>              disabled: true,</span></span>
<span class="line"><span>              children: []</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              id: &quot;1-2&quot;,</span></span>
<span class="line"><span>              pid: &quot;1&quot;,</span></span>
<span class="line"><span>              label: &quot;二级 1-2&quot;,</span></span>
<span class="line"><span>              children: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  id: &quot;1-2-1&quot;,</span></span>
<span class="line"><span>                  pid: &quot;1-2&quot;,</span></span>
<span class="line"><span>                  children: [],</span></span>
<span class="line"><span>                  label: &quot;二级 1-2-1&quot;</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  id: &quot;1-2-2&quot;,</span></span>
<span class="line"><span>                  pid: &quot;1-2&quot;,</span></span>
<span class="line"><span>                  children: [],</span></span>
<span class="line"><span>                  label: &quot;二级 1-2-2&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>              ]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      toData: [], //目标数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid</span></span>
<span class="line"><span>      sendArr:[],</span></span>
<span class="line"><span>      left: false,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  created(){</span></span>
<span class="line"><span>    this.getData()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    cancel(){</span></span>
<span class="line"><span>      this.$emit(&#39;sendValue&#39;, true)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onSubmit(){</span></span>
<span class="line"><span>      // console.log(this.sendArr);</span></span>
<span class="line"><span>      let send = [];</span></span>
<span class="line"><span>      if(this.sendArr &amp;&amp; this.sendArr.length){</span></span>
<span class="line"><span>        const mapArr = arr =&gt;{</span></span>
<span class="line"><span>          if(arr &amp;&amp; arr.length){</span></span>
<span class="line"><span>            arr.map(it=&gt;{</span></span>
<span class="line"><span>              send.push(it.uid);</span></span>
<span class="line"><span>              mapArr(it.childMenu);</span></span>
<span class="line"><span>              return it</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        mapArr(this.sendArr);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 有默认值 并且没有左右切换数据的时候（直接关闭）</span></span>
<span class="line"><span>      if(this.defaultCheckedKeys.length &amp;&amp; !send.length &amp;&amp; !this.left){</span></span>
<span class="line"><span>        this.$message.success(&quot;权限设置成功&quot;);</span></span>
<span class="line"><span>        this.cancel();</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Vue.submit(this, {</span></span>
<span class="line"><span>        loading: &quot;loading&quot;,</span></span>
<span class="line"><span>        url: SERVICE_URLS.team.role.config,</span></span>
<span class="line"><span>        data: {</span></span>
<span class="line"><span>          roleId: this.id,</span></span>
<span class="line"><span>          menuId: send,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        callback: data =&gt; {</span></span>
<span class="line"><span>          this.$message.success(&quot;权限设置成功&quot;);</span></span>
<span class="line"><span>          this.cancel();</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        error: err =&gt; {}</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    //请求数据</span></span>
<span class="line"><span>    getData() {</span></span>
<span class="line"><span>      Vue.submit(this, {</span></span>
<span class="line"><span>        loading: &quot;loading&quot;,</span></span>
<span class="line"><span>        url: SERVICE_URLS.team.role.menuRole,</span></span>
<span class="line"><span>        data: {</span></span>
<span class="line"><span>          roleId: this.id</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        callback: data =&gt; {</span></span>
<span class="line"><span>          const mapArr = (arr, it) =&gt; {</span></span>
<span class="line"><span>            if(arr &amp;&amp; arr.length){</span></span>
<span class="line"><span>              return arr.map((item, j)=&gt;{</span></span>
<span class="line"><span>                item.uid = item.id;</span></span>
<span class="line"><span>                item.id = it.id+&#39;-&#39;+(j-0+1);</span></span>
<span class="line"><span>                item.pid = it.id;</span></span>
<span class="line"><span>                if(item.childMenu &amp;&amp; !item.childMenu.length &amp;&amp; item.hasPermission) this.defaultCheckedKeys.push(item.id);</span></span>
<span class="line"><span>                mapArr(item.childMenu, item)</span></span>
<span class="line"><span>                return item</span></span>
<span class="line"><span>              })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          // 遍历添加 id 和 pid(并回显原数据 = defaultCheckedKeys)</span></span>
<span class="line"><span>          this.fromData = data.map((it, i)=&gt;{</span></span>
<span class="line"><span>            it.uid = it.id;</span></span>
<span class="line"><span>            it.id = i-0+1;</span></span>
<span class="line"><span>            it.pid = i;</span></span>
<span class="line"><span>            if(it.childMenu &amp;&amp; !it.childMenu.length &amp;&amp; it.hasPermission) this.defaultCheckedKeys.push(it.id);</span></span>
<span class="line"><span>            mapArr(it.childMenu, it);</span></span>
<span class="line"><span>            return it</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>          // console.log(&#39;fromData&#39;, this.fromData);</span></span>
<span class="line"><span>          console.log(&#39;defaultCheckedKeys&#39;, this.defaultCheckedKeys);</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        error: err =&gt; {}</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList</span></span>
<span class="line"><span>    changeMode() {</span></span>
<span class="line"><span>      if (this.mode == &quot;transfer&quot;) {</span></span>
<span class="line"><span>        this.mode = &quot;addressList&quot;;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        this.mode = &quot;transfer&quot;;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 监听穿梭框组件添加</span></span>
<span class="line"><span>    add(fromData, toData, obj) {</span></span>
<span class="line"><span>      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象</span></span>
<span class="line"><span>      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表</span></span>
<span class="line"><span>      // console.log(&quot;fromData:&quot;, fromData);</span></span>
<span class="line"><span>      // console.log(&quot;toData:&quot;, toData);</span></span>
<span class="line"><span>      // console.log(&quot;obj:&quot;, obj);</span></span>
<span class="line"><span>      this.sendArr = toData;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 监听穿梭框组件移除</span></span>
<span class="line"><span>    remove(fromData, toData, obj) {</span></span>
<span class="line"><span>      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象</span></span>
<span class="line"><span>      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表</span></span>
<span class="line"><span>      // console.log(&quot;fromData:&quot;, fromData);</span></span>
<span class="line"><span>      // console.log(&quot;toData:&quot;, toData);</span></span>
<span class="line"><span>      // console.log(&quot;obj:&quot;, obj);</span></span>
<span class="line"><span>      this.left = true;</span></span>
<span class="line"><span>      this.sendArr = toData;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.foot{</span></span>
<span class="line"><span>  padding: 40px 0 10px;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br></div></div>`,8),r=[e];function i(c,t,b,u,m,o){return n(),a("div",null,r)}const h=s(l,[["render",i]]);export{q as __pageData,h as default};
