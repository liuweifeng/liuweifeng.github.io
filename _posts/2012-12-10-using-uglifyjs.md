---
layout: post
title: "使用 Uglifyjs 压缩 JavaScript 文档"
description: ""
category: dev
tags: [JavaScript]
---
{% include JB/setup %}

>UglifyJS是基于 NodeJS 的 JavaScript 语法解析/压缩/格式化工具。它在保留语义的同时会尽量提高压缩比率。

##安装
首先需要安装 Node.js 环境。这个不在赘述。
安装完Node，在命令行执行：

    npm install -g uglify-js