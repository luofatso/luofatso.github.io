# cloc 计算代码行数

```
npx cloc [options]

npx cloc $(git ls-files)   // 查看当前开发文件的代码行数
```

## 计算代码行数

```
git log --pretty=tformat: --numstat | awk ' { add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %sn", add, subs, loc }' -  
```

[工具链接](https://github.com/kentcdodds/cloc#readme)