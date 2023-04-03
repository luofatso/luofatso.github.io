# css自动打字器

一个css自动打字器的demo

## 效果

<script setup lang='ts'>
  import CssTyping from './components/CssTyping.vue'
</script>

<CssTyping />

## 代码

```html
<div data-title="自动打字器">
	<div class="auto-typing">welcome to css autotyper!</div>
</div>

```css
@mixin typing($count: 0, $duration: 0, $delay: 0) {
	overflow: hidden;
	border-right: 1px solid transparent;
	width: #{$count + 1}ch;
	font-family: Consolas, Monaco, monospace;
	white-space: nowrap;
	animation: typing #{$duration}s steps($count + 1) #{$delay}s infinite backwards,
		caret 500ms steps(1) #{$delay}s infinite forwards;
}
.auto-typing {
	font-weight: bold;
	font-size: 30px;
	color: #09f;
	@include typing(25, 5);
}
@keyframes caret {
	50% {
		border-right-color: currentColor;
	}
}
@keyframes typing {
	from {
		width: 0;
	}
}
```