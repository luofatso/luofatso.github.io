# Git常用命令

[[TOC]]

git命令有很多，在此记录一下常用的命令。

## 查看远程分支

`git branch -a`

## 创建并且换dev分支

`git checkout -b dev`

## 将master合并的dev分支

```
git merge master
git push origin dev
```

## 其他操作

```
日志详细
git log

日志版本
git log --pretty=oneline

回退到上一个版本
git reset --hard HEAD^

到指定版本
git reset --hard 版本号

分支指定合并到某个版本
git cherry--pick 版本号

把其他<name>分支合并到当前分支
git merge <name>
git push origin <点前分支>

刷新新的分支信息
git remote update origin -p
```

## gitlab 的 ssh key 不生效的问题

```
执行 ssh -T git@gitlab.wm.com （注： git 是我 gitlab 服务用户，@ 后面的那个地址是我 gitlab 的服务器域名)）

```

## 关联远程仓库

```
git remote add origin 地址

查看远程关联地址
git remote -v

删除远程地址
git remote rm origin
```

## 关联多个远程地址

```
git remote add github 地址
git remote add gitee 地址

对应提交
git push github master
git push gitee master
```

## 生成SSH key

```
// ssh-rsa
ssh-keygen -t rsa -C "邮箱"
// ssh-ed25519
ssh-keygen -t ed25519 -C "邮箱"
```

## 查看SSH key

```
cat ~/.ssh/id_rsa.pub
抑或:c盘>用户>自己的用户名>.ssh
```

## 将已有本地git仓库从新推送远程仓库

```
git remote rename origin old-origin
git remote add origin 仓库地址
git push -u origin --all
git push -u origin --tags
```

## 已有文件夹推送远程仓库

```
git init
git remote add origin 仓库地址
git add .
git commit -m "Initial commit"
git push -u origin master
```
