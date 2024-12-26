## NRM

NRM 的全称是 npm registry manager ，是一个 npm 的镜像源管理工具。

## 安装

```js
npm install -g nrm
```

## 查看当前所有镜像源

```js
nrm ls

// 结果
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
* qunhe ------ http://npm-registry.qunhequnhe.com/
```

## 切换镜像源

```js
// 切换至 taobao 的镜像源
nrm use taobao

// 切换至 cnpm 的镜像源
nrm use cnpm
```

## 添加/删除/响应

```js
// 添加镜像源
nrm add registry http://npm-registry.qunhequnhe.com/

// 删除镜像源, 其中 reigstry 为源名
nrm del <registry>

// 测试镜像源的响应时间
nrm test npm
```
