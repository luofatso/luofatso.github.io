# JS原生拖拽

[在线演示](https://codepen.io/luofatso/pen/jOZXwga)


源码：
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>拖拽与缩放</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      #box {
        width: 100px;
        height: 100px;
        background: orange;
        position: absolute;
        left: 100px;
        top: 100px;
      }

      .kuang {
        box-sizing: border-box;
        border: 1px solid #0f0;
        width: 100%;
        height: 100%;
        position: relative;
      }

      .kuang .dian {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #0f0;
      }

      .left_top {
        left: -5px;
        top: -5px;
      }

      .right_top {
        right: -5px;
        top: -5px;
      }

      .left_bottom {
        left: -5px;
        bottom: -5px;
      }

      .right_bottom {
        right: -5px;
        bottom: -5px;
      }
    </style>
  </head>

  <body>
    <div id="box" class="border"></div>
  </body>
  <script>
    function MoveClass(
      id,
      options = {
        minWidth: 100,
        minHeight: 100,
      }
    ) {
      // 绑定ele属性
      this.ele = document.querySelector(id)
      this.options = options

      this.move()
      this.editEle()
    }
    MoveClass.prototype.move = function () {
      // ele的鼠标按下事件调用mousedown
      this.ele.onmousedown = (e) => {
        // 获取事件对象
        var e = e || window.event
        // 鼠标按下时，鼠标相对于元素的x坐标
        var x = e.offsetX
        // 鼠标按下时，鼠标相对于元素的y坐标
        var y = e.offsetY
        // 鼠标按下移动时调用mousemove
        document.onmousemove = (e) => {
          // 元素ele移动的距离l
          var l = e.clientX - x
          // 元素ele移动的距离l
          var t = e.clientY - y
          this.ele.style.left = l + 'px'
          this.ele.style.top = t + 'px'
        }
        // 当鼠标弹起时，清空onmousemove与onmouseup
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }

    MoveClass.prototype.editoptions = {
      left_top: true,
      right_top: true,
      left_bottom: true,
      right_bottom: true,
    }
    MoveClass.prototype.editEle = function () {
      // console.log(this.ele.clientWidth,this.ele.clientHeight);
      // console.log(this.ele.offsetLeft,this.ele.offsetTop);
      var that = this
      // 创建一个div
      var div = document.createElement('div')
      // 遍历this.editoptions
      for (let attr in this.editoptions) {
        if (this.editoptions[attr]) {
          // 循环创建左上，左下，右上，右下方位的小点
          var dian = document.createElement('div')
          dian.className = 'dian ' + attr
          // 设置类型为对应的attr
          dian.dataset.type = attr
          // 当按下对应方位的小点时
          dian.onmousedown = (e) => {
            var e = e || window.event
            // 先获取鼠标距离屏幕的left与top值
            var clientXY = {
              x: e.clientX,
              y: e.clientY,
            }
            // 获取鼠标按下时ele的宽高
            var eleWH = {
              width: this.ele.clientWidth,
              height: this.ele.clientHeight,
            }
            // 阻止事件冒泡（针对父元素的move）
            e.stopPropagation()
            // 通过e.target获取精准事件源对应的type值
            var type = e.target.dataset.type
            // 鼠标按下对应方位小点移动时，调用mousemove
            document.onmousemove = function (e) {
              // 查找type中是否包含”right“
              if (type.indexOf('right') > -1) {
                // console.log("right");
                // 如果拖拽后的宽度小于最小宽度，就return出去
                if (
                  that.options.minWidth >
                  eleWH.width + e.clientX - clientXY.x
                ) {
                  return
                }
                // ele拖拽后的宽度为：初始width+拖拽后鼠标距离屏幕的距离 - 第一次按下时鼠标距离屏幕的距离
                that.ele.style.width =
                  eleWH.width + e.clientX - clientXY.x + 'px'
              }
              // 与”right“相同原理
              if (type.indexOf('bottom') > -1) {
                // console.log("bottom");
                if (
                  that.options.minHeight >
                  eleWH.height + e.clientY - clientXY.y
                ) {
                  return
                }
                that.ele.style.height =
                  eleWH.height + e.clientY - clientXY.y + 'px'
              }

              if (type.indexOf('top') > -1) {
                // console.log("top");
                if (
                  that.options.minHeight >
                  eleWH.height - e.clientY + clientXY.y
                ) {
                  return
                }
                // ele拖拽后的高度为：初始height-拖拽后鼠标距离屏幕的距离 + 第一次按下时鼠标距离屏幕的距离
                that.ele.style.height =
                  eleWH.height - e.clientY + clientXY.y + 'px'
                // 重新设置ele的top值为此时鼠标距离屏幕的y值
                that.ele.style.top = e.clientY + 'px'
              }
              // 与”top“相同原理
              if (type.indexOf('left') > -1) {
                // console.log("left");
                if (
                  that.options.minWidth >
                  eleWH.width - e.clientX + clientXY.x
                ) {
                  return
                }
                that.ele.style.width =
                  eleWH.width - e.clientX + clientXY.x + 'px'
                // 重新设置ele的left值为此时鼠标距离屏幕的x值
                that.ele.style.left = e.clientX + 'px'
              }
            }
            document.onmouseup = function () {
              document.onmousemove = null
              document.onmouseup = null
            }
          }
        }
        // 将类名为”dian“的div添加到div中
        div.appendChild(dian)
      }
      // 为div设置类名
      div.className = 'kuang'
      // 将类名为”kuang“的div添加到ele中
      this.ele.appendChild(div)
    }

    // new一个MoveClass对象
    var moveClass = new MoveClass('#box')
  </script>
</html>
```
