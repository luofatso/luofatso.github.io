# 玩转CSS

## 1 浏览器

前端开发者每天都打交道的工具，浏览器是一切CSS的运行环境; 同时标志着互联网的时代来临。

### 1.1 历史

- 1993年，NCSA组织发布了Mosaic浏览器
- 1994年，网景公司发布了Navigator浏览器
- 1995年，微软公司发布了IExplorer浏览器，并掀起了浏览器之战
- 1996年，Navigator浏览器的市场份额达到86%，微软公司开始将IExplorer浏览器整合到Windows操作系统中
- 1996年，ASA公司发布了Opera浏览器
- 1998年，网景公司启动其开源产品，开始推出Mozilla
- 2001年，为人诟病的IExplorer 6发布，这货霸占国内市场十多年
- 2002年，网景公司发布了Firefox浏览器
- 2003年，苹果公司发布了Safari浏览器
- 2004年，IExplorer浏览器的市场份额达到了历史顶峰92%，自此以后其市场份额开始下滑
- 2006年，Firefox 3的发布创下了吉尼斯世界纪录，一天800万下载量
- 2008年，谷歌公司发布了Chrome浏览器

> 世界五大浏览器：Chrome、Safari、Firefox、Opera、IExplorer/Edge

### 1.2 渲染引擎

渲染引擎又名浏览器内核，指负责对网页语法解析并渲染成一张可视化页面的解析器。

- Google Chrome：Webkit(前期)、Blink(后期)
- Apple Safari：Webkit
- Mozilla Firefox：Gecko
- ASA Opera：Presto(前期)、Blink(后期)
- Microsoft IExplorer：Trident
- Microsoft Edge：Trident(前期)、Blink(后期)

### 1.3 渲染过程

解析文件 -> 绘制图层 -> 合成图层

#### 1.3.1 解析文件

1. 将html文件转换为DOM树
2. 将css文件转换为CSSOM树
3. 将DOM树和CSSOM树合并生成渲染树

#### 1.3.2 绘制图层

- 根据渲染树生成布局渲染树(回流)
- 根据布局渲染树生成绘制渲染树(重绘)

#### 1.3.3 合成图层

根据绘制渲染树合成图层显示在屏幕上

### 1.4 回流重绘

#### 1.4.1 回流

回流又名重排，指几何属性需改变的渲染。

几何属性：包括布局、尺寸等可用数学几何衡量的属性
布局：display、float、position、list、table、flex、columns、grid
尺寸：margin、padding、border、width、height

#### 1.4.2 重绘

重绘指更改外观属性而不影响几何属性的渲染。

外观属性：包括界面、文字等可用状态向量描述的属性
界面：appearance、outline、background、mask、box-shadow、box-reflect、filter、opacity、clip
文字：text、font、word

> 回流必定引发重绘，重绘不一定引发回流

#### 1.4.3 性能优化

- 使用visibility:hidden替换display:none
- 使用transform代替top（间接启动GPU加速）
- 避免使用Table布局
- 避免规则层级过多
- 避免节点属性值放在循环里当成循环变量
- 动态改变类而不改变样式
- 将频繁回流重绘的节点设置为图层
- 使用requestAnimationFrame作为动画帧

## 2 选择器

css选择器又被称为css样式属性、css属性选择器，你了解、使用了哪些选择器？

```
h1 {
  ···
}
.class {
  ···
}
#id {
  ···
}
```

### 2.1 分类

tag、#id、.class、元素、\*、后代、子代、兄弟、条件、状态、结构、属性、伪元素

#### 2.1.1 基础选择器

| 选择器 | 别名       | 说明           |
| ------ | ---------- | -------------- |
| tag    | 标签选择器 | 指定类型的标签 |
| #id    | ID选择器   | 指定身份的标签 |
| .class | 类选择器   | 指定类名的标签 |
| \*     | 通配选择器 | 所有类型的标签 |

#### 2.1.2 集合选择器

| 选择器      | 别名       | 说明           |
| ----------- | ---------- | -------------- |
| elem1,elem2 | 并集选择器 | 多个指定的元素 |
| elem.class  | 交集选择器 | 多个指定的元素 |

#### 2.1.3 条件选择器

- :lang 指定标记语言的元素
- :dir() 指定编写方向的元素
- :has 包含指定元素的元素
- :is 指定条件的元素
- :not 非指定条件的元素
- :where 指定条件的元素
- :scope 指定元素作为参考点
- :any-link 所有包含href的链接元素
- :local-link 所有包含href且属于绝对地址的链接元素

#### 2.1.4 状态选择器

- :active 鼠标激活的元素
- :hover 鼠标悬浮的元素
- :link 未访问的链接元素
- :visited 已访问的链接元素
- :target 当前锚点的元素
- :focus 输入聚焦的表单元素
- :required 输入必填的表单元素
- :valid 输入合法的表单元素
- :invalid 输入非法的表单元素
- :in-range 输入范围以内的表单元素
- :out-of-range 输入范围以外的表单元素
- :checked 选项选中的表单元素
- :optional 选项可选的表单元素
- :enabled 事件启用的表单元素
- :disabled 事件禁用的表单元素
- :read-only 只读的表单元素
- :read-write 可读可写的表单元素
- :target-within 内部锚点元素处于激活状态的元素
- :focus-within 内部表单元素处于聚焦状态的元素
- :focus-visible 输入聚焦的表单元素
- :blank 输入为空的表单元素
- :user-invalid 输入合法的表单元素
- :indeterminate 选项未定的表单元素
- :placeholder-shown 占位显示的表单元素
- :current() 浏览中的元素
- :past() 已浏览的元素
- :future() 未浏览的元素
- :playing 开始播放的媒体元素
- :paused 暂停播放的媒体元素

#### 2.1.5 结构选择器

- :root 文档的根元素
- :empty 无子元素的元素
- :nth-child(n) 元素中指定顺序索引的元素
- :nth-last-child(n) 元素中指定逆序索引的元素
- :first-child 元素中为首的元素
- :last-child 元素中为尾的元素
- :only-child 父元素仅有该元素的元素
- :nth-of-type(n) 标签中指定顺序索引的标签
- :nth-last-of-type(n) 标签中指定逆序索引的标签
- :first-of-type 标签中为首的标签
- :last-of-type 标签中为尾的标签
- :only-of-type 父元素仅有该标签的标签

#### 2.1.6 属性选择器

- [attr] 指定属性的元素
- [attr=val] 属性等于指定值的元素
- [attr*=val] 属性包含指定值的元素
- [attr^=val] 属性以指定值开头的元素
- [attr$=val] 属性以指定值结尾的元素
- [attr~=val] 属性包含指定值(完整单词)的元素(不推荐使用)
- [attr|=val] 属性以指定值(完整单词)开头的元素(不推荐使用)

#### 2.1.7 伪元素选择器

- ::before 在元素前插入的内容
- ::after 在元素后插入的内容
- ::first-letter 元素的首字母
- ::first-line 元素的首行
- ::selection 鼠标选中的元素
- ::backdrop 全屏模式的元素
- ::placeholder 表单元素的占位

### 2.2 CSS权重

大家开发中遇到过CSS覆盖导致排版出问题？

样式覆盖的根本原因是未处理好规则间的优先级别，虽然使用!important能解决问题，但不能什么情况都由!important暴力解决。

#### 2.2.1 直观权重

- 10000：!important
- 1000：内联样式、外联样式
- 100：ID选择器
- 10：类选择器、伪类选择器、属性选择器
- 1：标签选择器、伪元素选择器
- 0：通配选择器、后代选择器、兄弟选择器

#### 2.2.2 微观权重

- 1,0,0,0,0：!important
- 0,1,0,0,0：内联样式、外联样式
- 0,0,1,0,0：ID选择器
- 0,0,0,1,0：类选择器、伪类选择器、属性选择器
- 0,0,0,0,1：标签选择器、伪元素选择器
- 0,0,0,0,0：通配选择器、后代选择器、兄弟选择器

#### 2.2.3 规则

!important > 内联样式 = 外联样式 > ID选择器 > 类选择器 = 伪类选择器 = 属性选择器 > 标签选择器 = 伪元素选择器 > 通配选择器 = 后代选择器 = 兄弟选择器

- 规则的权值不同时，权值高的规则优先
- 规则的权值相同时，后定义的规则优先
- 属性后面追加!important时，规则无条件绝对优先

### 2.3 拓展：CSS三大特性（继承性、层叠性、优先级（权重））

#### 2.3.1 继承性

CSS的继承性，指的是子元素继承父元素的某些样式属性。

- 文本相关属性：font-size（字体大小）、font-family（字体系列）、font-style（字体样式）、font-weight（字体粗细）、font、line-height（行高）、text-align（水平对齐方式）、text-indent（首行缩进）、word-spacing（字间距）。
- 列表相关属性：list-style-image（使用图像替换列表项标记）、list-style-position（规定列表项标记位置）、list-style-type（设置列表项标记类型）、list-style
- 颜色相关属性：color

#### 2.3.2 层叠性

当我们在CSS上重复定义多个相同的属性时，CSS会把先定义时属性覆盖掉（相同的权重），反之权重大的覆盖小的。

## 3 盒模型

盒模型是CSS中最重要最核心的概念，不要看着基础，往往出错的就是基础部分。

![盒模型](https://pic.rmb.bdstatic.com/bjh/bcbc60147a070f3971aad73bfa9c38b2.png)

### 3.1 组成

由外到内用公式表示就是：box = margin + border + padding + content

除了content，其余属性都包含left、right、top和bottom等扩展属性

### 3.2 类型

因为历史原因，盒模型分为标准盒模型和怪异盒模型

#### 3.2.1 标准盒模型

width = width

#### 3.2.2 怪异盒模型

width = border + padding + width

#### 3.2.3 转换

css3声明盒模型的类型，它就是box-sizing。

- content-box：标准盒模型(默认)
- border-box：怪异盒模型

### 3.3 拓展： 行内元素、块级元素

默认排版从左到右，从上到下

当节点的display声明为block、list-item、table、flex或grid时，该节点被标记为块级元素。

当节点的display声明为inline、inline-block、inline-table、inline-flex或inline-grid时，该节点被标记为行内元素。

### 3.4 拓展：css定位

CSS 有两个最重要的基本属性，前端开发必须掌握：display 和 position

- [CSS 定位详解](http://www.ruanyifeng.com/blog/2019/11/css-position.html)
- [杀了个回马枪，还是说说position:sticky吧](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)

## 4 布局方式

- 普通布局：display:block/inline
- 浮动布局：float:left/right
  - 文字环绕
    ![image.png](https://inews.gtimg.com/newsapp_ls/0/15001646453/0)
- 定位布局：position:relative/absolute/fixed、left/right/top/bottom/z-index
- 表格布局：table系列属性
- 弹性布局：display:flex/inline-flex、flex系列属性
- 多列布局：column系列属性
- 格栅布局：display:grid/inline-grid、grid系列属性
- 响应式布局：em/rem/vw/vh/vmin/vmax、媒体查询
  - 拓展1：[CSS单位px，rem，em，vw，vh的区别](https://www.cnblogs.com/theblogs/p/10516098.html)
  - 拓展2：[rem布局解析](https://juejin.cn/post/6844903671143088136)
  - 拓展3：[谈谈 rem 与 vw -- rem](https://www.jianshu.com/p/1a9b5d48afa2)

## 5 Flex

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

[Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[Flex布局教程：实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
[30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)
[写给自己看的display: flex布局教程](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)

### 5.1 容器和项目

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

### 5.2 容器的属性

- flex-direction 决定主轴的方向
- flex-wrap 定义如何换行
- flex-flow 以上两个的缩写
- justify-content 项目在主轴上的对齐方式
- align-items 项目在交叉轴上如何对齐
- align-content 多根轴线的对齐方式

### 5.3 项目的属性

- order 定义项目的排列顺序。数值越小，排列越靠前，默认为0
- flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- flex-shrink 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- flex-basis 定义了在分配多余空间之前，项目占据的主轴空间
- flex 上三属性的缩写 默认0 1 auto
- align-self 允许单个项目有与其他项目不一样的对齐方式

## 6 Grid

网格布局（Grid）是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

[推荐阮一峰Grid网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 7 转换（变形）、过渡和动画

### 7.1 转换 transform

对元素进行移动、缩放、转动、拉长或拉伸

### 7.1.1 语法

- translate()：位移
  ![translate()：位移](https://pic.rmb.bdstatic.com/bjh/90d0549fd0de7978f469c9980b946b8a.png)
- scale()：缩放
  ![scale()：缩放](https://pic.rmb.bdstatic.com/bjh/3764b6b057e146c2521d132d11b22e2c.png)
- skew()：扭曲
  ![skew()：扭曲](https://pic.rmb.bdstatic.com/bjh/5d1ae4c46034a8179b9bbee3771a5416.png)
- rotate()：旋转
  ![rotate()：旋转](https://pic.rmb.bdstatic.com/bjh/18dca3e350eb8111d1ea198533528a6d.png)

### 7.1.2 案例：transform画心形

在线演示：[transform画心形](https://codepen.io/luofatso/pen/xxYjExY)

```
<div class="heart-shape"></div>

.heart-shape {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #f66;
  transform: rotate(45deg);
  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    background-color: #f66;
    content: "";
  }
  &::before {
    transform: translateX(-50%);
    // background-color: #fee;
  }
  &::after {
    transform: translateY(-50%);
    // background-color: #999;
  }
}
```

效果图：
![transform画心形](https://pic.rmb.bdstatic.com/bjh/eb74655b784e8c626b9b5ae1ba6c899d.png) | ![transform画心形](https://pic.rmb.bdstatic.com/bjh/3815be56f884b901ee0b7ad60f154de9.png)
--- | ---

### 7.2 过渡 transition

transition能让状态间的切换变得更丝滑

- transition-property：属性
  - all：全部属性过渡(默认)
  - none：无属性过渡
  - String：某个属性过渡
- transition-duration：时间
  - Time：秒或毫秒(默认0)
- transition-timing-function：缓动函数
  - ease：逐渐变慢，等同于cubic-bezier(.25,.1,.25,1)(默认)
  - linear：匀速，等同于cubic-bezier(0,0,1,1)
  - ease-in：加速，等同于cubic-bezier(.42,0,1,1)
  - ease-out：减速，等同于cubic-bezier(0,0,.58,1)
  - ease-in-out：先加速后减速，等同于cubic-bezier(.42,0,.58,1)
  - cubic-bezier：贝塞尔曲线，(x1,y1,x2,y2)四个值指定于曲线上的点P1和P2，所有值需在[0,1]区域内
- transition-delay：时延
  - Time：秒或毫秒(默认0)

### 7.3 动画 animation

### 7.3.1 语法

- animation-name：名称
  - none：无动画(默认)
  - String：动画名称
- animation-duration：时间
  - Time：秒或毫秒(默认0)
- animation-timing-function：缓动函数
  - ease：逐渐变慢，等同于cubic-bezier(.25,.1,.25,1)(默认)
  - linear：匀速，等同于cubic-bezier(0,0,1,1)
  - ease-in：加速，等同于cubic-bezier(.42,0,1,1)
  - ease-out：减速，等同于cubic-bezier(0,0,.58,1)
  - ease-in-out：先加速后减速，等同于cubic-bezier(.42,0,.58,1)
  - cubic-bezier：贝塞尔曲线，(x1,y1,x2,y2)四个值指定于曲线上的点P1和P2，所有值需在[0,1]区域内
  - steps([,[start|end]]?)：把动画平均划分成n等分，直到平均走完该动画
  - step-start：等同于steps(1,start)，把动画分成一步，动画执行时以左侧端点0%为开始
  - step-end：等同于steps(1,end)，把动画分成一步，动画执行时以右侧端点100%为开始
- animation-delay：时延
  - Time：秒或毫秒(默认0)
- animation-iteration-count：播放次数
  - Number：数值(默认1)
  - infinite：无限次
- animation-direction：轮流反向播放(播放次数为一次则该属性无效果)
  - normal：正常播放(默认)
  - alternate：轮流反向播放，奇数次数正常播放，偶数次数反向播放
- animation-play-state：播放状态
  - running：正在播放(默认)
  - paused：暂停播放
- animation-fill-mode：播放前后其效果是否可见
  - none：不改变默认行为(默认)
  - backwards：在时延所指定时间内或在动画开始前应用开始属性(在第一个关键帧中定义)
  - forwards：在动画结束后保持最后一个属性(在最后一个关键帧中定义)
  - both：向前和向后填充模式都被应用

### 7.3.2 案例：自动打字器

在线演示：[自动打字器](https://codepen.io/luofatso/pen/poaVbjX)

特点：

- 字体都是等宽字体，等宽字体可保证每次打字时光标的移动距离都是一致的
- 打字器的宽度由最初的0px逐渐增加内容后变成最终固定字数的宽度，宽度以等宽字体的个数为准
- 标随着每打一个字就闪烁一次，打字速度均匀，打字完毕再次重复打字
- 整个打字过程存在两个动画，一个是打字器自增宽度，一个是光标闪烁
- 整个打字过程一闪一闪地完成，根据其断断续续的特点可判断该动画为逐帧动画

> 有一个叫做ch的长度单位，它是一个等宽字体的特有长度单位，准确宽度为0的宽度。因此一个等宽字体就是1ch，两个等宽字体就是2ch。通过等宽字体个数定制打字器长度最合适不过了，而常用的设备自带等宽字体有Consolas、Monaco和Monospace三种。

## 8 函数

CSS函数指复杂类型或调用特殊处理的组件值类型。为单调的属性声明增加了更强大的点缀，让简单的CSS变得更有艺术感。

### 8.1 分类

- 属性函数：attr()；
- 背景图片函数：linear-gradient()、radial-gradient()、conic-gradient()、repeating-linear-gradient()、repeating-radial-gradient()、repeating-conic-gradient()、image-set()、image()、url()、element()；
- 颜色函数：rgb()、rgba()、hsl()、hsla()、hwb()、color-mod()；
- 图形函数：circle()、ellipse()、inset()、polygon()、path()
- 滤镜函数：blur()、brightness()、contrast()、drop-shadow()、grayscale()、hue-rotate()、invert()、opacity()、saturate()、sepia()；
- 转换函数：matrix()、matrix3d()、perspective()、rotate()、rotate3d()、rotateX()、rotateY()、rotateZ()、scale()、scale3d()、scaleX()、scaleY()、scaleZ()、skew()、skewX()、skewY()、translate()、translateX()、translateY()、translateZ()、translate3d()；
- 数学函数：calc()、min()、max()、mixmax()、repeat()；
- 缓动函数：cubic-bezier()、steps()；
- 其他函数：counter()、counters()、toggle()、var()、 symbols()

## 9 变量

CSS变量又名CSS自定义属性，指可在整个文档中重复使用的值。

```css
/* 不使用变量 */
.title {
  background-color: red;
}
.desc {
  background-color: red;
}

/* 使用变量 */
:root {
  // 全局声明
  --bg-color: red;
}
.title {
  // 局部什么
  --color: #000;
  color: var(--color);
  background-color: var(--bg-color);
}
.desc {
  background-color: var(--bg-color);
}
```

### 9.1 使用

- 声明：--变量名
- 读取：var(--变量名, 默认值)
- 类型
  - 普通：只能用作属性值不能用作属性名
  - 字符：与字符串拼接 "Hello, "var(--name)
  - 数值：使用calc()与数值单位连用 var(--width) \* 10px
- 作用域

  - 范围：在当前节点块作用域及其子节点块作用域下有效
  - 优先级别：内联样式 = 外联样式 > ID选择器 > 类选择器 = 伪类选择器 = 属性选择器 > 标签选择器 = 伪元素选择器 > 通配选择器 = 后代选择器 = 兄弟选择器

  > 当浏览器遇到无效的 var() 时，会使用继承值或初始值代替。

### 9.2 好处

- 减少样式代码的重复性
- 增加样式代码的扩展性
- 提高样式代码的灵活性
- 增多一种CSS与JS的通讯方式
- 不用深层遍历DOM改变某个样式
- js访问

  ```
  // 定义
  :root {
    --main-color: '#ffeead'
  }

  // 获取
  var root = document.querySelector(':root');
  var rootStyles = getComputedStyle(root);
  var mainColor = rootStyles.getPropertyValue('--main-color');
  console.log(mainColor); --> '#ffeead'

  // 更新
  root.style.setProperty('--main-color', '#88d8b0')
  ```

### 9.3 案例

一个条形加载条通常由几条线条组成，每条线条对应一个存在不同时延的相同动画，通过时间差运行相同动画，从而产生加载效果。

在线演示：[条形加载](https://codepen.io/luofatso/pen/Yzeemjy)

```
// 使用前
<ul class="strip-loading">
  <li v-for="v in 6" :key="v"></li>
</ul>

.strip-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  li {
    border-radius: 3px;
    width: 6px;
    height: 30px;
    background-color: #f66;
    animation: beat 1s ease-in-out infinite;
    & + li {
      margin-left: 5px;
    }
    &:nth-child(2) {
      animation-delay: 200ms;
    }
    &:nth-child(3) {
      animation-delay: 400ms;
    }
    &:nth-child(4) {
      animation-delay: 600ms;
    }
    &:nth-child(5) {
      animation-delay: 800ms;
    }
    &:nth-child(6) {
      animation-delay: 1s;
    }
  }
}
@keyframes beat {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(.5);
  }
}
```

```
// 使用后
<ul class="strip-loading">
  <li v-for="v in 6" :key="v" :style="`--line-index: ${v}`"></li>
</ul>
.strip-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  li {
    --time: calc((var(--line-index) - 1) * 200ms);
    border-radius: 3px;
    width: 6px;
    height: 30px;
    background-color: #f66;
    animation: beat 1.5s ease-in-out var(--time) infinite;
    & + li {
      margin-left: 5px;
    }
  }
}
@keyframes beat {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(.5);
  }
}
```

### 9.4 相比less、sass

- 浏览器原生特性，无需经过任何转译可直接运行
- DOM对象一员，极大便利了CSS与JS间的联系

## 10 CSS预处理器

常见：Sass(Scss)、Less、Stylus

作用、好处：为css添加一些编程特性，再编译生成css文件。

功能：

- 可以使用变量、常量
- 允许css代码嵌套
- 运算符、循环、判断
- 混入Mixin
- 继承
- 函数等功能

## 11 原子化

传统方案：

```
@for $i from 1 through 10 {
  .m-#{$i} {
    margin: $i / 4 rem;
  }
}
```

编译结果为：

```

.m-1 { margin: 0.25 rem; }
.m-2 { margin: 0.5 rem; }
/* ... */
.m-10 { margin: 2.5 rem; }
```

> 原子化：原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名。

```
.m-0 {
  margin: 0;
}
.text-red {
  color: red;
}
```

特点：

- 原子化 CSS 是一种 CSS 的架构方式（解决方案）
  - 大家应该都知道相关的一些css方案，比如一直在用的css预处理器，还有css-in-js等
  - 过去以更加组件化和整体工具类的方向作为css的最佳实践，原子化css算是一个不同的声音。
- 它倾向于小巧且用途单一的 class
  - 每个引用的类里面只有一个单一的功能，很小巧、灵活
  - 如果一个类里包含两个功能那么他就不是原子css了
- 并且会以视觉效果进行命名
  - 不知道你有没有在某些时候被去起一个类名被停顿过，特别是在有大量模版的时候，这有的时候还是挺难的
  - 直接用框架封装好的类，就不用考虑这个问题了，并且根据视觉的类名，你可以很容易的举一反三

优点：

- 开发的效率和舒适
- 灵活和可维护

缺点：

- 仍存在的上手门槛
- 学习、维护成本上升

目前优秀库推荐：[Tailwind CSS](https://tailwindcss.com/)、[Windi CSS](https://cn.windicss.org/)、[Tachyons](https://tachyons.io/)

## 12 拓展

- [css加载会造成阻塞吗？](https://juejin.cn/post/6844903667733118983?utm_source=gold_browser_extension)
- [css设置居中的方案总结-超全](https://juejin.cn/post/6844903560879013901)
- [CSS性能优化的8个技巧](https://juejin.cn/post/6844903649605320711?utm_source=gold_browser_extension)
- [不可思议的纯 CSS 滚动进度条效果](https://juejin.cn/post/6844903758074216462)
- [趣味CSS3效果挑战小汇总](https://juejin.cn/post/6844903896473665550)
- [从青铜到王者10个css3伪类使用技巧和运用，了解一哈](https://juejin.cn/post/6844903654756089864)
- [彻底搞懂CSS层叠上下文、层叠等级、层叠顺序、z-index](https://juejin.cn/post/6844903667175260174)
