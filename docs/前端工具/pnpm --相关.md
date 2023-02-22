# pnpm 相关

- pnpm  安装依赖报错 `EPERM: operation not permitted`
设置了pnpm-store 后问题解决

`pnpm config set store-dir /path/to/.pnpm-store`