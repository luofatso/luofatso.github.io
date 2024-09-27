# n -- mac管理node

`n` 是一个简单的 `Node.js` 版本管理器，允许您快速切换不同的 `Node.js` 版本。它是一个轻量级的工具，适用于 macOS 和 Linux 等 Unix-like 系统。

## 安装 `n`

首先，确保您的系统上已经安装了 `Node.js`。

```
npm install -g n
```

## 使用 `n`

```
// 安装最新稳定版 Node.js
sudo n latest

// 安装指定版本
sudo n 16.15.1

// 切换 nodejs 版本号
sudo n

// 卸载 n
npm uninstall -g n
```

> 使用 n 工具，您可以轻松管理不同项目中的不同 Node.js 版本，确保您的应用程序在最新的 Node.js 版本上运行，同时保持对旧版本的兼容性。如若遇到权限问题可以使用`sudo`命令。
