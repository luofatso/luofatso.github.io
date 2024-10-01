import{_ as s,o as n,c as a,a2 as e}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"element-plus-table多选框","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/element-plus-table多选框.md","filePath":"大前端/Vue3/element-plus-table多选框.md","lastUpdated":1727401527000}'),p={name:"大前端/Vue3/element-plus-table多选框.md"},l=e(`<h1 id="element-plus-table多选框" tabindex="-1">element-plus-table多选框 <a class="header-anchor" href="#element-plus-table多选框" aria-label="Permalink to &quot;element-plus-table多选框&quot;">​</a></h1><p>vue3中使用element-plus table的多选框默认选择及禁止选择等</p><h2 id="_1-禁止选择" tabindex="-1">1.禁止选择 <a class="header-anchor" href="#_1-禁止选择" aria-label="Permalink to &quot;1.禁止选择&quot;">​</a></h2><div class="language-vue3 vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-table</span></span>
<span class="line"><span>  ref=&quot;multipleTableRef&quot;</span></span>
<span class="line"><span>  v-loading=&quot;tableLoad&quot;</span></span>
<span class="line"><span>  :data=&quot;tableData&quot;</span></span>
<span class="line"><span>  row-key=&quot;deviceName&quot;</span></span>
<span class="line"><span>  size=&quot;large&quot;</span></span>
<span class="line"><span>  :default-sort=&quot;{ prop: &#39;deviceName&#39;, order: &#39;ascending&#39; }&quot;</span></span>
<span class="line"><span>  @sort-change=&quot;sortTable&quot;</span></span>
<span class="line"><span>  @selection-change=&quot;handleSelectionChange&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>  &lt;el-table-column</span></span>
<span class="line"><span>    type=&quot;selection&quot;</span></span>
<span class="line"><span>    v-if=&quot;!!appStore.version.length&quot;</span></span>
<span class="line"><span>    width=&quot;200&quot;</span></span>
<span class="line highlighted"><span>    :selectable=&quot;selectable&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>&lt;/el-table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line highlighted"><span>const selectable = (row: IVersion) =&gt; {</span></span>
<span class="line highlighted"><span>  return !!row.appVersion</span></span>
<span class="line highlighted"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_2-默认选中" tabindex="-1">2.默认选中 <a class="header-anchor" href="#_2-默认选中" aria-label="Permalink to &quot;2.默认选中&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { ElTable } from &#39;element-plus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const multipleTableRef = ref&lt;InstanceType&lt;typeof ElTable&gt;&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  nextTick(() =&gt; {</span></span>
<span class="line"><span>    tableData.value.forEach((row:IVersion) =&gt; {</span></span>
<span class="line"><span>      if (row.appUpdateFlag === 1) {</span></span>
<span class="line"><span>        multipleTableRef.value!.toggleRowSelection(row, true)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_3-选择项目" tabindex="-1">3.选择项目 <a class="header-anchor" href="#_3-选择项目" aria-label="Permalink to &quot;3.选择项目&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const handleSelectionChange = (version: IVersion[]) =&gt; {</span></span>
<span class="line"><span>  optSelection.value = version.map((it: IVersion) =&gt; it.deviceName)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_4-后端排序" tabindex="-1">4.后端排序 <a class="header-anchor" href="#_4-后端排序" aria-label="Permalink to &quot;4.后端排序&quot;">​</a></h2><div class="language-vue3 vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-table</span></span>
<span class="line"><span>  ref=&quot;multipleTableRef&quot;</span></span>
<span class="line"><span>  v-loading=&quot;tableLoad&quot;</span></span>
<span class="line"><span>  :data=&quot;tableData&quot;</span></span>
<span class="line"><span>  row-key=&quot;deviceName&quot;</span></span>
<span class="line"><span>  size=&quot;large&quot;</span></span>
<span class="line"><span>  :default-sort=&quot;{ prop: &#39;deviceName&#39;, order: &#39;ascending&#39; }&quot;</span></span>
<span class="line"><span>  @sort-change=&quot;sortTable&quot;</span></span>
<span class="line"><span>  @selection-change=&quot;handleSelectionChange&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>  &lt;el-table-column</span></span>
<span class="line"><span>    prop=&quot;deviceName&quot;</span></span>
<span class="line"><span>    label=&quot;设备编号&quot;</span></span>
<span class="line highlighted"><span>    sortable=&quot;custom&quot;</span></span>
<span class="line"><span>    :sort-orders=&quot;[&#39;ascending&#39;, &#39;descending&#39;]&quot;</span></span>
<span class="line"><span>    :class=&quot;{ descending: ruleForm.order === ESort.DESC }&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>&lt;/el-table&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_5-表格默认排序" tabindex="-1">5.表格默认排序 <a class="header-anchor" href="#_5-表格默认排序" aria-label="Permalink to &quot;5.表格默认排序&quot;">​</a></h2><div class="language-vue3 vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-table</span></span>
<span class="line"><span>  ref=&quot;multipleTableRef&quot;</span></span>
<span class="line"><span>  v-loading=&quot;tableLoad&quot;</span></span>
<span class="line"><span>  :data=&quot;tableData&quot;</span></span>
<span class="line"><span>  row-key=&quot;deviceName&quot;</span></span>
<span class="line"><span>  size=&quot;large&quot;</span></span>
<span class="line highlighted"><span>  :default-sort=&quot;{ prop: &#39;deviceName&#39;, order: &#39;ascending&#39; }&quot;</span></span>
<span class="line highlighted"><span>  @sort-change=&quot;sortTable&quot;</span></span>
<span class="line"><span>  @selection-change=&quot;handleSelectionChange&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>  &lt;el-table-column</span></span>
<span class="line"><span>    prop=&quot;deviceName&quot;</span></span>
<span class="line"><span>    label=&quot;设备编号&quot;</span></span>
<span class="line"><span>    sortable=&quot;custom&quot;</span></span>
<span class="line"><span>    :sort-orders=&quot;[&#39;ascending&#39;, &#39;descending&#39;]&quot;</span></span>
<span class="line"><span>    :class=&quot;{ descending: ruleForm.order === ESort.DESC }&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>&lt;/el-table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line highlighted"><span>const sortTable = (col: any) =&gt; {</span></span>
<span class="line highlighted"><span>  ruleForm.value.orderBy = sortType[col.prop] as EAppOrderType.DEVICE_NAME // 排序键名</span></span>
<span class="line highlighted"><span>  ruleForm.value.order = col.order === &#39;ascending&#39; ? ESort.ASC : ESort.DESC // 排序顺序</span></span>
<span class="line highlighted"><span>  getTabalData() // 按排序规则，重新搜索</span></span>
<span class="line highlighted"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>multipleTableRef.value?.sort(&#39;deviceName&#39;, &#39;ascending&#39;) // 重置初始化排序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>multipleTableRef.value?.clearSort() // 清空所有排序</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote><p>具体了解：PDA-APP升级模块</p></blockquote>`,13),i=[l];function t(r,c,u,o,b,d){return n(),a("div",null,i)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
