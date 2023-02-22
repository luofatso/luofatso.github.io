# css文字渐变

```
<p>我是渐变色的文字</p>

p{
  font-size: 60px;
  background-image: linear-gradient(135deg,red,blue);
  background-clip:text;
  -webkit-background-clip:text;
  color: transparent;
}
```