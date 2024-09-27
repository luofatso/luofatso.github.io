# ngrok -- 内网穿透使用

做微信公共号开发都知道，登录授权需要重定向，重定向需要在线地址(域名)；平时在开发为了方便肯定要在本地好调试的，这里推荐用ngrok做内网穿透特别方便，几分钟就可以搞定（快，免费）。

## 1.下载

进入ngrok官网（https://ngrok.com/)，注册ngrok账号并下载ngrok；

## 2.授权

根据官网给定的授权码，运行如下授权命令；

```
ngrok authtoken 授权码
```

## 3.开始

根据业务需要开启相应端口；

```
ngrok http 3000
```

## 4.注意事项

使用vue-cli的小伙伴注意了,可能ngrok启动成功但不能正常使用，需要在vue.config.js中配置一下

```
module.exports = {
	...其它配置
  devServer: {
    disableHostCheck: true,
    ...其它配置
  },
};
```
