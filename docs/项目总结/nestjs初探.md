# nestjs 初探

## 搭建环境

- 全局安装脚手架

```
npm i -g @nestjs/cli
```

- 初始化项目

```
nest new 项目名
```

- 启动项目

```
pnpm start
// or
npm run start
// 成功后查看
http://localhost:3000
```

- 通过脚手架快速生成用户模块（UserController）

```
nest g co user
```

> 同时会生成后缀为 `spec` 的测试文件,虽然有测试功能非常好，但在快速开发过程中，并非每一个功能都需要自动化测试覆盖，只要保证主要的功能有用例覆盖即可。可以在根目录下的 nest-cli.json 添加如下配置(关闭)

```
"generateOptions": {
  "spec": false
}
```

- 借助 `CLI` 的能力快速生成 `CURD`

> 生成一个模块 (nest g mo) 来组织代码，使其保持清晰的界限（Module）。
生成一个控制器 (nest g co) 来定义CRUD路径（Controller）。
生成一个服务 (nest g s) 来表示/隔离业务逻辑（Service）。
生成一个实体类/接口来代表资源数据类型（Entity）。

一键全部生成
```
nest g resource user 
```