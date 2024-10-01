import{a8 as en,a9 as ln,k as O,h as P,s as o,v as W,y as L,aa as rn,d as j,$ as cn,o as _,c as k,j as y,n as H,F as D,D as G,P as J,R as tn,t as A,a as q,b as X,e as Y,I,w as F,E as K,p as bn,l as un,_ as on,a2 as mn}from"./chunks/framework.DkMK-_fX.js";function nn(e){return en()?(ln(e),!0):!1}function sn(e){return typeof e=="function"?e():O(e)}const an=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dn=Object.prototype.toString,fn=e=>dn.call(e)==="[object Object]",vn=()=>{};function $(e){var i;const s=sn(e);return(i=s==null?void 0:s.$el)!=null?i:s}const gn=an?window:void 0,hn=an?window.document:void 0;function Q(...e){let i,s,m,p;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,m,p]=e,i=gn):[i,s,m,p]=e,!i)return vn;Array.isArray(s)||(s=[s]),Array.isArray(m)||(m=[m]);const r=[],b=()=>{r.forEach(d=>d()),r.length=0},l=(d,h,x,f)=>(d.addEventListener(h,x,f),()=>d.removeEventListener(h,x,f)),g=W(()=>[$(i),sn(p)],([d,h])=>{if(b(),!d)return;const x=fn(h)?{...h}:h;r.push(...s.flatMap(f=>m.map(B=>l(d,f,B,x))))},{immediate:!0,flush:"post"}),w=()=>{g(),b()};return nn(w),w}function yn(){const e=o(!1),i=rn();return i&&L(()=>{e.value=!0},i),e}function xn(e){const i=yn();return P(()=>(i.value,!!e()))}const Z=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function _n(e,i={}){const{document:s=hn,autoExit:m=!1}=i,p=P(()=>{var n;return(n=$(e))!=null?n:s==null?void 0:s.querySelector("html")}),r=o(!1),b=P(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(n=>s&&n in s||p.value&&n in p.value)),l=P(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(n=>s&&n in s||p.value&&n in p.value)),g=P(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(n=>s&&n in s||p.value&&n in p.value)),w=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(n=>s&&n in s),d=xn(()=>p.value&&s&&b.value!==void 0&&l.value!==void 0&&g.value!==void 0),h=()=>w?(s==null?void 0:s[w])===p.value:!1,x=()=>{if(g.value){if(s&&s[g.value]!=null)return s[g.value];{const n=p.value;if((n==null?void 0:n[g.value])!=null)return!!n[g.value]}}return!1};async function f(){if(!(!d.value||!r.value)){if(l.value)if((s==null?void 0:s[l.value])!=null)await s[l.value]();else{const n=p.value;(n==null?void 0:n[l.value])!=null&&await n[l.value]()}r.value=!1}}async function B(){if(!d.value||r.value)return;x()&&await f();const n=p.value;b.value&&(n==null?void 0:n[b.value])!=null&&(await n[b.value](),r.value=!0)}async function M(){await(r.value?f():B())}const u=()=>{const n=x();(!n||n&&h())&&(r.value=n)};return Q(s,Z,u,!1),Q(()=>$(p),Z,u,!1),m&&nn(f),{isSupported:d,isFullscreen:r,enter:B,exit:f,toggle:M}}const wn={class:"barrage-main"},kn=["onAnimationend"],Bn={key:0,class:"ani-box"},qn={key:1},N=5,Sn=10,Cn=100,En=1,Mn=j({__name:"LBarrage",props:{full:{type:Boolean,default:!1},arr:{},isPause:{type:Boolean},percent:{default:80}},setup(e,{expose:i}){var U;const s=e,m=o(null),p=o([]),r=o(null),b=o([]),l=o([]),g=o(null),w=o(((U=m.value)==null?void 0:U.offsetWidth)??750),d=[],h=a=>{a&&d.push(a)},x=(a,c)=>{const t=l.value[a][c];t&&(t.animation=!1,t.isSelf=!1,t.isFree=!1,t.actionType="",t.avatar="")},f=()=>{for(let a=0;a<N;a+=1){const c=[];b.value[a]=!0;for(let t=0;t<Sn;t+=1)c.push({id:`${a}-${t}`,row:a,col:t,isUse:!1,isFree:!1,text:"",actionType:"",avatar:"",isSelf:!1,animation:!1});l.value.push(c)}},B=()=>{for(let a=0;a<N;a+=1)if(b.value[a]&&l.value[a].length)return a;return-1},M=(a,c,t)=>{var z;b.value[t]=!1;const{sender:v=null,isSelf:R,content:V,actionType:pn=""}=c,T=l.value[a.row][a.col];T.isFree=!0,T.avatar=(v==null?void 0:v.avatar)||"",T.actionType=pn,T.isSelf=R,T.text=V,T.animation=!0,setTimeout(()=>{b.value[t]=!0},(((z=d[a.col+a.row*N])==null?void 0:z.clientWidth)||100)*10+1e3)},u=a=>l.value[a].find(c=>!c.isFree),n=()=>{r.value&&(clearInterval(r.value),r.value=null)},S=()=>{r.value=setInterval(()=>{if(p.value.length>0){let a;const c=p.value.shift();if(c.direction==="default"&&(a=B())!==-1){const t=u(a);t?M(t,c,a):p.value.unshift(c)}else p.value.unshift(c)}},Cn)},C=a=>{const c={...a,content:a.message,direction:"default"};c.type,a.senderId===En?p.value.length?p.value.unshift({...c,isSelf:!0}):p.value.push({...c,isSelf:!0}):p.value.push(c)},E=()=>{tn(()=>{var a;w.value=(a=m.value)==null?void 0:a.offsetWidth})};return W(()=>s.isPause,a=>{a?n():S()}),W(()=>s.full,()=>{E()}),L(()=>{f(),S(),E()}),cn(()=>{clearInterval(r.value),r.value=null}),i({addBarrage:C}),(a,c)=>(_(),k("section",{class:"barrage-wrapper",ref_key:"barrageWrapperRef",ref:m,style:J({height:a.percent+"%"})},[y("div",wn,[y("div",{class:H(["barrage-main-box",{"ani-pause":a.isPause,"ani-running":!a.isPause}]),ref_key:"barrageMainBoxRef",ref:g},[(_(!0),k(D,null,G(l.value,t=>(_(),k(D,null,[(_(!0),k(D,null,G(t,v=>{var R;return _(),k("div",{key:v.id,class:H(["barrage-item",{"self-dm":v.isSelf,"barrage-img":v.actionType.length}]),ref_for:!0,ref:h,style:J({transform:`translate3d(${w.value}px,0,0)`,top:`${v.row*(200/N)}px`,animation:v.animation?"barrage-run 6s linear":""}),onAnimationend:V=>x(v.row,v.col)},[(R=v.actionType)!=null&&R.length?(_(),k("div",Bn,"这里是其他动画礼物之类的，有机会在搞")):(_(),k("span",qn,A(v.text),1))],46,kn)}),128))],64))),256))],2)])],4))}}),Tn=e=>(bn("data-v-fcd34338"),e=e(),un(),e),In=Tn(()=>y("source",{src:"https://media.w3.org/2010/05/sintel/trailer.mp4",type:"video/mp4"},null,-1)),Fn={class:"tool"},Pn={class:"py-5"},Rn=j({__name:"index",setup(e){const i=o(null),s=o(null),m=o(null),p=o(""),r=o(!0),b=o(!1),l=o(!0),{isFullscreen:g,enter:w,exit:d,toggle:h}=_n(i),x=()=>{s.value.muted=r.value=!s.value.muted},f=(u,n=!1)=>{var S;u.length&&(n&&(p.value=""),(S=m.value)==null||S.addBarrage({content:u,message:u,senderId:n?1:2}))},B=(u,n=0)=>Math.floor(Math.random()*(u-n))+n,M=()=>{const u=["今夕何夕，见此良人😜","盈盈一水间，脉脉不得语","折芦花赠远，零落一身秋🤣","曾经沧海难为水，除却巫山不是云","欲买桂花同载酒，终不似，少年游😂","人生无根蒂，飘如陌上尘😄","何当共剪西窗烛，却话巴山夜雨时","人面不知何处去，桃花依旧笑春风😄"];for(let n=0;n<500;n+=1)f(`${u[B(8)]} = ${n}`)};return W(l,u=>{u&&setTimeout(()=>{M(),b.value=!1},0)}),L(()=>{var u;(u=s.value)==null||u.play(),M()}),(u,n)=>{const S=K("el-input"),C=K("el-button");return _(),k(D,null,[y("div",{class:"box",ref_key:"videoBox",ref:i},[y("video",{ref_key:"videoRef",ref:s,autoplay:"",muted:"",loop:"",class:"full"},[In,q(" Your browser does not support the video tag. ")],512),l.value?(_(),X(Mn,{key:0,ref_key:"barrageRef",ref:m,arr:[],isPause:b.value,percent:80,class:"full",full:O(g)},null,8,["isPause","full"])):Y("",!0)],512),y("div",Fn,[y("div",Pn,[I(S,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=E=>p.value=E),style:{width:"300px"},placeholder:"发送新弹幕",clearable:""},null,8,["modelValue"]),I(C,{type:"primary",class:"ml-2",onClick:n[1]||(n[1]=E=>f(p.value,!0))},{default:F(()=>[q("发送弹幕")]),_:1})]),I(C,{type:"primary",onClick:n[2]||(n[2]=E=>l.value=!l.value)},{default:F(()=>[q(A(l.value?"关闭该死的弹幕":"想继续看弹幕"),1)]),_:1}),l.value?(_(),X(C,{key:0,type:"primary",onClick:n[3]||(n[3]=E=>b.value=!b.value)},{default:F(()=>[q(A(b.value?"继续开始弹幕":"暂停一下弹幕"),1)]),_:1})):Y("",!0),I(C,{type:"primary",onClick:x},{default:F(()=>[q(A(r.value?"没有声音怎么能行":"真该死，吵死了"),1)]),_:1}),I(C,{type:"primary",onClick:O(h)},{default:F(()=>[q("全屏播放")]),_:1},8,["onClick"])])],64)}}}),Nn=on(Rn,[["__scopeId","data-v-fcd34338"]]),Dn=y("h1",{id:"vue3弹幕",tabindex:"-1"},[q("vue3弹幕 "),y("a",{class:"header-anchor",href:"#vue3弹幕","aria-label":'Permalink to "vue3弹幕"'},"​")],-1),An=y("p",null,"很早之前的一个项目，拖延症晚期的我终于是动手记录一下了。",-1),Wn=y("h2",{id:"效果",tabindex:"-1"},[q("效果 "),y("a",{class:"header-anchor",href:"#效果","aria-label":'Permalink to "效果"'},"​")],-1),On=mn(`<h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4LnYW" id="tab-5tcyoJx" checked><label for="tab-5tcyoJx">template</label><input type="radio" name="group-4LnYW" id="tab-s6-OljK"><label for="tab-s6-OljK">setup</label><input type="radio" name="group-4LnYW" id="tab-P6Iey6l"><label for="tab-P6Iey6l">scss</label></div><div class="blocks"><div class="language-vue3 vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;section class=&quot;barrage-wrapper&quot; ref=&quot;barrageWrapperRef&quot; :style=&quot;{ height: percent + &#39;%&#39; }&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;barrage-main&quot;&gt;</span></span>
<span class="line"><span>      &lt;div</span></span>
<span class="line"><span>        class=&quot;barrage-main-box&quot;</span></span>
<span class="line"><span>        :class=&quot;{ &#39;ani-pause&#39;: isPause, &#39;ani-running&#39;: !isPause }&quot;</span></span>
<span class="line"><span>        ref=&quot;barrageMainBoxRef&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;template v-for=&quot;item in domPool&quot;&gt;</span></span>
<span class="line"><span>          &lt;div</span></span>
<span class="line"><span>            v-for=&quot;it in item&quot;</span></span>
<span class="line"><span>            :key=&quot;it.id&quot;</span></span>
<span class="line"><span>            class=&quot;barrage-item&quot;</span></span>
<span class="line"><span>            :class=&quot;{ &#39;self-dm&#39;: it.isSelf, &#39;barrage-img&#39;: it.actionType.length }&quot;</span></span>
<span class="line"><span>            :ref=&quot;setItemRef&quot;</span></span>
<span class="line"><span>            :style=&quot;{</span></span>
<span class="line"><span>              transform: \`translate3d(\${barMainWidth}px,0,0)\`,</span></span>
<span class="line"><span>              top: \`\${it.row * (200 / CHANNEL_COUNT)}px\`,</span></span>
<span class="line"><span>              animation: it.animation ? &#39;barrage-run 6s linear&#39; : &#39;&#39;,</span></span>
<span class="line"><span>            }&quot;</span></span>
<span class="line"><span>            @animationend=&quot;barrageAnimationEnd(it.row, it.col)&quot;</span></span>
<span class="line"><span>          &gt;</span></span>
<span class="line"><span>            &lt;template v-if=&quot;it.actionType?.length&quot;&gt;</span></span>
<span class="line"><span>              &lt;div class=&quot;ani-box&quot;&gt;这里是其他动画礼物之类的，有机会在搞&lt;/div&gt;</span></span>
<span class="line"><span>              &lt;!-- &lt;l-avatar :avatar=&quot;it.avatar&quot; :size=&quot;30&quot; c/lass=&quot;ml-10&quot; /&gt; --&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;span v-else&gt;{{ it.text }}&lt;/span&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/template&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/section&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-vue3 vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot; name=&quot;LBarrage&quot;&gt;</span></span>
<span class="line"><span>// import { Vue3Lottie } from &#39;vue3-lottie&#39;</span></span>
<span class="line"><span>// import &#39;vue3-lottie/dist/style.css&#39;</span></span>
<span class="line"><span>// import { useAppStore } from &#39;@/store&#39;</span></span>
<span class="line"><span>// import getChatActionHooks from &#39;@/hooks/getChatActionHooks&#39;</span></span>
<span class="line"><span>import { ref, watch, onMounted, onBeforeUnmount, nextTick } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Props = {</span></span>
<span class="line"><span>  full: boolean // 视频是否全屏</span></span>
<span class="line"><span>  arr: any // 弹幕源数组</span></span>
<span class="line"><span>  isPause: boolean // 弹幕是否暂停状态</span></span>
<span class="line"><span>  percent?: number // 弹幕占比</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type BarrageType = {</span></span>
<span class="line"><span>  id: string</span></span>
<span class="line"><span>  row: number</span></span>
<span class="line"><span>  col: number</span></span>
<span class="line"><span>  isUse: boolean</span></span>
<span class="line"><span>  isFree: boolean</span></span>
<span class="line"><span>  text: string</span></span>
<span class="line"><span>  isSelf: boolean</span></span>
<span class="line"><span>  actionType: string</span></span>
<span class="line"><span>  avatar: string</span></span>
<span class="line"><span>  animation: boolean</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// const appStore = useAppStore()</span></span>
<span class="line"><span>const props = withDefaults(defineProps&lt;Props&gt;(), {</span></span>
<span class="line"><span>  percent: 80,</span></span>
<span class="line"><span>  full: false,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const CHANNEL_COUNT = 5 // 行数</span></span>
<span class="line"><span>const MAX_DM_COUNT = 10 // 每行弹幕数最大值</span></span>
<span class="line"><span>const INTER_VAL_TIME = 100 // 取弹幕时间间隔</span></span>
<span class="line"><span>// const USER_ID = appStore.userInfo.id</span></span>
<span class="line"><span>const USER_ID = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const barrageWrapperRef = ref&lt;any&gt;(null)</span></span>
<span class="line"><span>const barrages = ref&lt;any&gt;([]) // 弹幕数组</span></span>
<span class="line"><span>const intervalDM = ref&lt;any&gt;(null) // intervalDM</span></span>
<span class="line"><span>const hasPosition = ref&lt;any&gt;([]) // 滚动弹幕的通道</span></span>
<span class="line"><span>const domPool = ref&lt;BarrageType[][]&gt;([]) // dom池</span></span>
<span class="line"><span>const barrageMainBoxRef = ref&lt;any&gt;(null) // 弹幕容器</span></span>
<span class="line"><span>const barMainWidth = ref(barrageWrapperRef.value?.offsetWidth ?? 750) // 弹幕容器宽度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// const { isLove, animationGood, animationLove } = getChatActionHooks()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const itemRefs: any = []</span></span>
<span class="line"><span>const setItemRef = (el: any) =&gt; {</span></span>
<span class="line"><span>  if (el) itemRefs.push(el)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 动画结束 恢复dom原本数据</span></span>
<span class="line"><span>const barrageAnimationEnd = (row: number, col: number) =&gt; {</span></span>
<span class="line"><span>  const thatBarrage = domPool.value[row][col]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (thatBarrage) {</span></span>
<span class="line"><span>    thatBarrage.animation = false</span></span>
<span class="line"><span>    thatBarrage.isSelf = false</span></span>
<span class="line"><span>    thatBarrage.isFree = false</span></span>
<span class="line"><span>    thatBarrage.actionType = &#39;&#39;</span></span>
<span class="line"><span>    thatBarrage.avatar = &#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const init = () =&gt; {</span></span>
<span class="line"><span>  // 初始化一些DOM 重复利用这些DOM</span></span>
<span class="line"><span>  for (let j = 0; j &lt; CHANNEL_COUNT; j += 1) {</span></span>
<span class="line"><span>    const doms: BarrageType[] = []</span></span>
<span class="line"><span>    hasPosition.value[j] = true // hasPosition 标记每个通道目前是否有位置</span></span>
<span class="line"><span>    for (let i = 0; i &lt; MAX_DM_COUNT; i += 1) {</span></span>
<span class="line"><span>      // 放入该通道的DOM池</span></span>
<span class="line"><span>      doms.push({</span></span>
<span class="line"><span>        id: \`\${j}-\${i}\`,</span></span>
<span class="line"><span>        row: j,</span></span>
<span class="line"><span>        col: i,</span></span>
<span class="line"><span>        isUse: false,</span></span>
<span class="line"><span>        isFree: false,</span></span>
<span class="line"><span>        text: &#39;&#39;,</span></span>
<span class="line"><span>        actionType: &#39;&#39;,</span></span>
<span class="line"><span>        avatar: &#39;&#39;,</span></span>
<span class="line"><span>        isSelf: false,</span></span>
<span class="line"><span>        animation: false,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    domPool.value.push(doms)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取一个可以发射弹幕的通道 没有则返回-1</span></span>
<span class="line"><span>const getChannel = () =&gt; {</span></span>
<span class="line"><span>  for (let i = 0; i &lt; CHANNEL_COUNT; i += 1) {</span></span>
<span class="line"><span>    if (hasPosition.value[i] &amp;&amp; domPool.value[i].length) return i</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return -1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据DOM和弹幕信息 发射弹幕</span></span>
<span class="line"><span>const shootBarrage = (domItem: BarrageType, dmItem: any, channel: number) =&gt; {</span></span>
<span class="line"><span>  hasPosition.value[channel] = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const { sender = null, isSelf, content, actionType = &#39;&#39; } = dmItem</span></span>
<span class="line"><span>  const thatBarrage = domPool.value[domItem.row][domItem.col]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 设置当前通道为false</span></span>
<span class="line"><span>  thatBarrage.isFree = true</span></span>
<span class="line"><span>  thatBarrage.avatar = sender?.avatar || &#39;&#39;</span></span>
<span class="line"><span>  thatBarrage.actionType = actionType</span></span>
<span class="line"><span>  thatBarrage.isSelf = isSelf</span></span>
<span class="line"><span>  thatBarrage.text = content</span></span>
<span class="line"><span>  thatBarrage.animation = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 弹幕全部显示之后 才能开始下一条弹幕</span></span>
<span class="line"><span>  // 大概 dom.clientWidth * 10 的时间 该条弹幕就从右边全部划出到可见区域 再加1秒保证弹幕之间距离</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    hasPosition.value[channel] = true</span></span>
<span class="line"><span>  }, (itemRefs[domItem.col + domItem.row * CHANNEL_COUNT]?.clientWidth || 100) * 10 + 1000)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取空闲通道中空闲的dom</span></span>
<span class="line"><span>const getFreeChannelDom = (channel: number) =&gt; {</span></span>
<span class="line"><span>  return domPool.value[channel].find((it: any) =&gt; !it.isFree)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 暂停弹幕</span></span>
<span class="line"><span>const pauseBarrage = () =&gt; {</span></span>
<span class="line"><span>  if (intervalDM.value) {</span></span>
<span class="line"><span>    clearInterval(intervalDM.value)</span></span>
<span class="line"><span>    intervalDM.value = null</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 播放弹幕</span></span>
<span class="line"><span>const playBarrage = () =&gt; {</span></span>
<span class="line"><span>  // 每隔1ms从弹幕池里获取弹幕（如果有的话）并发射</span></span>
<span class="line"><span>  intervalDM.value = setInterval(() =&gt; {</span></span>
<span class="line"><span>    // 更新逻辑</span></span>
<span class="line"><span>    if (barrages.value.length &gt; 0) {</span></span>
<span class="line"><span>      let channel</span></span>
<span class="line"><span>      const barrage = barrages.value.shift()</span></span>
<span class="line"><span>      if (barrage.direction === &#39;default&#39; &amp;&amp; (channel = getChannel()) !== -1) {</span></span>
<span class="line"><span>        const domItem = getFreeChannelDom(channel)</span></span>
<span class="line"><span>        if (domItem) {</span></span>
<span class="line"><span>          shootBarrage(domItem, barrage, channel)</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          barrages.value.unshift(barrage)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        barrages.value.unshift(barrage)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }, INTER_VAL_TIME)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const addBarrage = (res: any) =&gt; {</span></span>
<span class="line"><span>  const obj: any = { ...res, content: res.message, direction: &#39;default&#39; }</span></span>
<span class="line"><span>  // 动画弹幕</span></span>
<span class="line"><span>  if (obj.type === &#39;INTERACTION&#39;) {</span></span>
<span class="line"><span>    // obj.actionType = isLove(res.message) ? &#39;LOVE&#39; : &#39;GOOD&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 是否为本人所发</span></span>
<span class="line"><span>  if (res.senderId === USER_ID) {</span></span>
<span class="line"><span>    if (barrages.value.length) {</span></span>
<span class="line"><span>      barrages.value.unshift({</span></span>
<span class="line"><span>        ...obj,</span></span>
<span class="line"><span>        isSelf: true,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      barrages.value.push({</span></span>
<span class="line"><span>        ...obj,</span></span>
<span class="line"><span>        isSelf: true,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    barrages.value.push(obj)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置弹幕卡槽长度</span></span>
<span class="line"><span>const setBarrageWidth = () =&gt; {</span></span>
<span class="line"><span>  nextTick(() =&gt; {</span></span>
<span class="line"><span>    barMainWidth.value = barrageWrapperRef.value?.offsetWidth</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  () =&gt; props.isPause,</span></span>
<span class="line"><span>  (val) =&gt; {</span></span>
<span class="line"><span>    // eslint-disable-next-line no-unused-expressions</span></span>
<span class="line"><span>    val ? pauseBarrage() : playBarrage()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  () =&gt; props.full,</span></span>
<span class="line"><span>  () =&gt; {</span></span>
<span class="line"><span>    setBarrageWidth()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  // 初始化弹幕dom组</span></span>
<span class="line"><span>  init()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 开始播放弹幕</span></span>
<span class="line"><span>  playBarrage()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 弹幕卡槽长度</span></span>
<span class="line"><span>  setBarrageWidth()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span>  clearInterval(intervalDM.value)</span></span>
<span class="line"><span>  intervalDM.value = null</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  addBarrage,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br></div></div><div class="language-vue3 vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;style lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.barrage-wrapper {</span></span>
<span class="line"><span>  overflow: hidden;</span></span>
<span class="line"><span>  z-index: 2;</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  left: 0px;</span></span>
<span class="line"><span>  top: 30px;</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .barrage-img {</span></span>
<span class="line"><span>    display: flex !important;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    height: 45px;</span></span>
<span class="line"><span>    background: rgba(255, 255, 255, 0.3);</span></span>
<span class="line"><span>    border-radius: 32px;</span></span>
<span class="line"><span>    padding: 1px 10px !important;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .ani-box {</span></span>
<span class="line"><span>      width: 30px;</span></span>
<span class="line"><span>      height: 30px;</span></span>
<span class="line"><span>      position: relative;</span></span>
<span class="line"><span>      margin-right: 40px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .ani {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        bottom: 0;</span></span>
<span class="line"><span>        left: 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .barrage-item {</span></span>
<span class="line"><span>    z-index: 99;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    // left: 0px;</span></span>
<span class="line"><span>    // top: 0px;</span></span>
<span class="line"><span>    // transform: translateX(-100%);</span></span>
<span class="line"><span>    // padding: 5px 0px;</span></span>
<span class="line"><span>    user-select: none; // 禁用选择文字</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    white-space: pre;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    // pointer-events: none;</span></span>
<span class="line"><span>    // perspective: 500px;</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    will-change: transform;</span></span>
<span class="line"><span>    font-size: 20px;</span></span>
<span class="line"><span>    color: rgb(255, 255, 255);</span></span>
<span class="line"><span>    font-family: SimHei, &#39;Microsoft JhengHei&#39;, Arial, Helvetica, sans-serif;</span></span>
<span class="line"><span>    font-weight: bold;</span></span>
<span class="line"><span>    line-height: 1.125;</span></span>
<span class="line"><span>    opacity: 1;</span></span>
<span class="line"><span>    text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px,</span></span>
<span class="line"><span>      rgb(0, 0, 0) -1px 0px 1px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &amp;:hover {</span></span>
<span class="line"><span>      color: red;</span></span>
<span class="line"><span>      animation-play-state: paused !important;</span></span>
<span class="line"><span>      z-index: 150;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .top-item {</span></span>
<span class="line"><span>    z-index: 100;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .barrage-main {</span></span>
<span class="line"><span>    /* border: 2px solid blue; */</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    // overflow: hidden;</span></span>
<span class="line"><span>    // background: #000;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .barrage-main-box {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.self-dm {</span></span>
<span class="line"><span>  border: 2px solid var(--c-blue);</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>  color: var(--c-blue) !important;</span></span>
<span class="line"><span>  padding: 1px 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes barrage-run {</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>    // transform: translate3d(500px, 0, 0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>    transform: translate3d(-100%, 0, 0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes barrage-fade {</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>    visibility: visible;</span></span>
<span class="line"><span>    // opacity: 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>    visibility: hidden;</span></span>
<span class="line"><span>    // opacity: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ani-pause {</span></span>
<span class="line"><span>  &amp; div {</span></span>
<span class="line"><span>    animation-play-state: paused !important;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ani-running {</span></span>
<span class="line"><span>  &amp; div {</span></span>
<span class="line"><span>    animation-play-state: running !important;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br></div></div></div></div>`,2),jn=JSON.parse('{"title":"vue3弹幕","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/vue3弹幕.md","filePath":"大前端/Vue3/vue3弹幕.md","lastUpdated":1727401527000}'),$n={name:"大前端/Vue3/vue3弹幕.md"},Un=j({...$n,setup(e){return(i,s)=>(_(),k("div",null,[Dn,An,Wn,I(Nn),On]))}});export{jn as __pageData,Un as default};
