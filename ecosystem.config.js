module.exports = {
  apps: [
    {
      name: 'API',
      script: './app.js',
      instances: 1,
      autorestart: true,
      watch: true,
      ignore_watch: [
        // 不用监听的文件
        'node_modules',
        'logs',
      ],
      max_memory_restart: '1G',
      env_prod: {
        NODE_ENV: 'production',
        REMOTE_ADDR: '',
      },
      env_dev: {
        NODE_ENV: 'development',
        REMOTE_ADDR: '',
      },
      env_test: {
        NODE_ENV: 'test',
        REMOTE_ADDR: '',
      },
    },
  ],
}
