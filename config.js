const path = require('path')

module.exports = {
  port: '3000',
  logPath: path.resolve(__dirname, './logs/koa.log'),
  mysql: {
    host: '10.10.115.58',
    port: 3306,
    database: 'information_schema',
    user: 'appserfe',
    password: 'appserfe123',
  },
}
