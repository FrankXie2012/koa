const fs = require('fs')
const path = require('path')
module.exports = {
  get: async (ctx, next) => {
    ctx.type = 'text/html'
    ctx.body = fs.createReadStream(path.join(__dirname, '../static/websocket.html'))
  },
  post: async (ctx, next) => {
    const formdata = ctx.request.body //所有的请求都保存在里面
    return (ctx.body = {
      code: 200,
      msg: 'Make it',
      data: formdata,
    })
  },
}
