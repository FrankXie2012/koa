# 基于 koa2 的 Node.js 平台 web 开发框架模板

## 概述

Koa2 是现在最流行的基于 Node.js 平台的 web 开发框架，主要遵循 MVC 模式，这个模板主要的功能集成了 Logger、Router、JWT、MySql 数据库连接、PM2、websokect 等模块，还有部分的中间件集合，基本满足简单的后台项目开发需求。

## Quick Start

- Clone 模板工程

```
git clone https://10.17.2.11/toolchain/template/koa.git
```

- 安装依赖

```
npm install
```

- 启动项目(开发环境)

```
npm run dev
```

- 启动项目(生产环境)

```
npm run prod
```

- 启动项目(测试环境)

```
npm run test
```

- 查看 pm2 日志

```
npm run logs
```

- 停止 pm2 服务

```
npm run stop
```

## 目录结构说明

    ├─.gitignore                // 忽略文件配置
    ├─app.js                    // 应用入口
    ├─config.js                 // 公共配置文件
    ├─ecosystem.config.js       // pm2配置文件
    ├─package.json              // 依赖文件配置
    ├─README.md                 // README.md文档
    ├─routes                    // 路由
    |   └index.js                  // 路由配置文件
    ├─models                    // 数据库配置及模型
    |   └index.js                  // 数据库配置
    ├─middlewares               // 中间件
    |      ├─cors.js                // 跨域中间件
    |      ├─jwt.js                 // jwt中间件
    |      ├─logger.js              // 日志打印中间件
    |      └response.js             // 响应及异常处理中间件
    ├─logs                      // 日志目录
    |  ├─koa-template.log
    |  └koa-template.log-2020-04-23
    ├─controllers               // 操作业务逻辑
    |      ├─index.js               // 配置
    |      ├─login.js               // 登录
    |      └test.js                 // 测试
    ├─services                 // 操作数据库
    |      ├─index.js               // 配置
    ├─static                   // 静态资源
