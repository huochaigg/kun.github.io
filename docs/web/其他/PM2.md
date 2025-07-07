
## 安装

```
npm install -g pm2
```

## 启动一个应用

```
pm2 start app.js
```

## 启动带参数的命令

```
pm2 start app.js --name my-app --watch
```

- `--name`：指定进程名称（默认用文件名）
- `--watch`：监听文件变动自动重启
- `--env production`：使用生产环境变量（需要配合 ecosystem 文件）

## 查看进程列表

```
pm2 list
```

## 查看详细信息

```
pm2 show <app_name|id>
```

## 停止某个进程

```
pm2 stop <app_name|id>
```

## 重启某个进程

```
pm2 restart <app_name|id>
```

## 删除进程

```
pm2 delete <app_name|id>
```

## 使用 JSON 配置文件（`ecosystem.config.js`）

```
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'api',
      script: './app.js',
      instances: 2,
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}

// 启动方式：
pm2 start ecosystem.config.js --env production

```

## 日志

```
pm2 logs             # 所有日志
pm2 logs my-app      # 指定 app 日志
pm2 flush            # 清空日志
```

## 保存当前进程列表

```
pm2 save

pm2 startup           # 设置开机自启命令
```

## 完整配置

```
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'my-app',            // 应用名称（PM2中的名称）
      script: './app.js',        // 启动文件（相对于 ecosystem 的位置）
      args: '',                  // 启动参数
      instances: 2,              // 启动实例数（0 或 max 为根据 CPU 核数）
      exec_mode: 'cluster',      // 启动模式（fork 单实例 | cluster 多实例）
      watch: false,              // 是否监听文件变化自动重启
      ignore_watch: ['node_modules', 'logs'],  // 忽略监听的文件夹
      autorestart: true,         // 崩溃后自动重启
      max_memory_restart: '500M',// 超过内存重启
      env: {                     // 默认环境变量
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {          // 生产环境变量（--env production 会加载）
        NODE_ENV: 'production',
        PORT: 8080
      },
      output: './logs/out.log',  // 标准输出日志
      error: './logs/error.log', // 错误日志
      merge_logs: true,          // 多实例日志合并
      time: true                 // 日志带时间戳
    }
  ]
}
```

## pm2守护进程的原理是什么?

PM2 是一个用于管理 Node.js 进程的工具，它可以在后台启动、守护和监控多个 Node.js 应用程序。PM2 的守护进程原理主要包括以下几个方面：

1. 启动应用：当用户使用 PM2 启动应用时，PM2 会创建一个子进程，并将应用程序作为子进程来启动。同时，PM2 会记录该应用程序的相关信息，如 PID（进程 ID）、状态、日志等，并且会将这些信息保存到 PM2 的数据库中。
    
2. 监控应用：一旦应用程序被启动，PM2 就会监控它的运行情况。如果应用程序意外退出或发生异常，PM2 将会自动重启应用程序。同时，PM2 会定期检查应用程序的资源占用情况，并且可以根据需要调整进程数、CPU 使用率等参数。
    
3. 守护进程：为了确保 PM2 能够长时间稳定运行，PM2 本身也需要一个守护进程来监控其运行情况。该守护进程会定期检查 PM2 的健康状态，并且在 PM2 出现异常情况时进行相应的处理，例如重启进程、发送警告通知等。
    
4. 日志管理：PM2 还提供了丰富的日志管理功能，可以将应用程序的日志导出到文件或远程服务器，并且支持实时查看、过滤等操作。这些日志信息对于排查问题、分析业务数据等都非常有用。
