---
layout: post
title: "升级 Mac OS X Lion 上的 git"
description: "如何升级 Mac OS X Lion 上的 git"
category: dev
tags: [git]
---

Mac OS X Lion 下使用 `which git` 查看 `git` 发现位于 `/usr/bin/git` 目录下，可能是安装 `Xcode 4.5.1`时一起装上来的，版本是 1.7.10.2。

想升级到新版本，下载 `git-osx-installer` 安装完成后，在命令行里查看却仍是旧版本，查阅资料发现这个安装包是将 `git` 装在 `/usr/local/git` 目录下。

如果你装了homebrew了的话：

    brew install git

我的做法是：

更新后

    sudo cd /usr/bin
    sudo mkdir old-git-1.7.10.2
    sudo mv git* old-git-1.7.10.2

这样的好处是 `git` 的其他组件也到最新的了。而且 `git` 补全的时候不会出现旧的 `git`

参考资料：
[SegmentFault: Mac OS X Lion 下 Git 如何升级？](http://segmentfault.com/q/1010000000095119)
