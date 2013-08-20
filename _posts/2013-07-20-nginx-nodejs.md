---
layout: post
title: "Nginx 反向代理 Node.js"
description: "my first article of github blog"
category:  Dev
tags: [nodejs]
---
{% include JB/setup %}

修改 Nginx 配置文件：

    subl /usr/local/etc/nginx/nginx.conf

增加一段：

    server {
        listen  80;
        server_name demo.me.cn;
        location / {
            proxy_pass http://127.0.0.1:3000;
        }
    }

修改 hosts：

    subl /etc/hosts

增加一行：

    127.0.0.1 demo.me.cn

强制停止 Nginx ：

    pkill -9 nginx

查看 Nginx 版本号

    ps -ef | grep nginx

