// 处理数据库以及服务等逻辑
'use strict'

const fs = require('fs')

const files = fs.readdirSync(__dirname).filter((file) => file !== 'index.js')

const services = {}
for (const file of files) {
  if (file.toLowerCase().endsWith('js')) {
    const service = require(`./${file}`)
    services[`${file.replace(/\.js/, '')}`] = service
  }
}

module.exports = services
