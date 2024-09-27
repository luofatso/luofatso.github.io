# js返回顶部的几种解决方案

[TOC]

## 1、纯js,无动画版本

```
window.scrollTo(x-coord, y-coord);
window.scrollTo(0,0);
```

## 2、纯js，带动画版本

```
生硬版：

var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
    } else {
        window.clearInterval( scrollToTop );
    }
}, 16); // how fast to scroll (this equals roughly 60 fps)

流畅版：

(function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
})();
```

## 3、jQuery,带动画版本

```
if ($("html").scrollTop()) {
  $("html").animate({ scrollTop: 0 }, 1000);
  return false;
} else {
  $("body").animate({ scrollTop: 0 }, 1000);
  return false;
}
```
