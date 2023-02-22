# Grid布局示例

[在线演示](https://codepen.io/luofatso/pen/wvyReNo)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .parent {
        height: 500px;
        display: grid;
        grid-template-columns: 3fr repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
      }

      .div1 {
        grid-area: 1 / 1 / 3 / 2;
      }

      .div2 {
        grid-area: 3 / 1 / 6 / 2;
      }

      .div3 {
        grid-area: 1 / 2 / 2 / 4;
      }

      .div4 {
        grid-area: 2 / 2 / 6 / 3;
      }

      .div5 {
        grid-area: 2 / 3 / 6 / 4;
      }

      div {
        border: 1px solid #000;
      }
    </style>
  </head>

  <body>
    <div class="parent">
      <div class="div1">
        <p>一些文字</p>
      </div>
      <div class="div2"></div>
      <div class="div3">3</div>
      <div class="div4">4</div>
      <div class="div5">5</div>
    </div>
  </body>
</html>

```