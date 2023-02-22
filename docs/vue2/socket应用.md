# socket 的应用

socket 这东西我就不做多的介绍了，相信大家都有相应的了解，本人呢也是这个样子的；最近刚好项目中应用了一下，这里记录一下。(本记录为 vue)

## 初始化

```
yarn add vue-socket.io
yarn add socket.io-client

import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';

// 相关配置
const socketOptions = {
  transports: ['websocket', 'polling'],
  path: '/api/socket.io',
  autoConnect: false,
};

Vue.use(
  new VueSocketIO({
    // debug: process.env.NODE_ENV === 'production' ? false : true, // debug调试，生产关闭
    connection: SocketIO(baseURL, socketOptions),
  })
);
```

### 页面中使用

```
created() {
  this.$socket.open(); // 开始连接socket
}
beforeDestroy() {
  this.sockets.unsubscribe("message");
  this.$socket.close();
},
// 注意是跟data、methods同级
sockets: {
  connecting() {
    // console.log("正在连接");
  },
  disconnect() {
    // console.log("Socket断开");
    // 断开后取消监听事件，防止断开重新连接后多次监听
    this.sockets.unsubscribe("message");
  },
  connect_failed() {
    // console.log("连接失败");
  },
  connect() {
    // socket连接成功后加入相应的房间
    this.joinMessage();
  },
},
methods: {
  // 加入响应房间
  joinMessage() {
    this.$socket.emit(
      "join",
      {
        ...相关参数
      },
      (res) => {
          // 开始监听房间的事件
          this.sockets.subscribe("message", (res) => {
            ... 成功后相应处理
          });
        }
      }
    );
  },
}
```

## 拓展使用

只使用 socket.io-client 插件

```
import SocketIO from 'socket.io-client';

// 相关配置
const socketOptions = {
  transports: ['websocket', 'polling'],
  path: '/api/socket.io',
  autoConnect: false,
};

prototype.$io = SocketIO(baseURLIo, {
  ...socketOptions,
  path: '/cron/socket.io',
});

this.$io.open();
// this.$io.removeListener('message');// 清除监听
// this.$io.disconnect();// 断开连接

// 断开之后清除监听事件
this.$io.on("disconnect", () => {
  this.$io.removeListener("message"); // 清除监听
});
this.$io.on("connect", () => {
  this.$io.emit(
    "join",
    {
      id: this.userInfo.id,
      eventId: this.id,
    },
    (res) => {
      if (res.statusCode == 200) {
        // 开始监听socket
        this.$io.on("message", (res) => {
          if (res.statusCode == 200) {
            this.handleSocketMsg(res);
          }
        });
      }
    }
  );
});
```
