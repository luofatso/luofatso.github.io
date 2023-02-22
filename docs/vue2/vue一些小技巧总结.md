# vue使用的一些小技巧

## vue-cli添加commitlint
```
vue add commitlint
```

## 清除定时任务
```
  const timer = setInterval(() =>{                    
    // 某些定时器操作                
  }, 500); 
             
  // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
  this.$once('hook:beforeDestroy', () => {            
    clearInterval(timer);                                    
  })
```