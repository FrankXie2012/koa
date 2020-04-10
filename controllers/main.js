let main = {}
const mysql = require('../models')

main.get = async (ctx, next) => {
  const url = ctx.url // 请求的url
  const method = ctx.method // 请求的方法
  const query = ctx.query // 请求参数
  const querystring = ctx.querystring // url字符串格式的请求参数
  ctx.body = {
    url,
    method,
    query,
    querystring,
  }
}

main.post = async (ctx, next) => {
  const formdata = ctx.request.body //所有的请求都保存在里面
  const data = await mysql.query('SELECT * from ENGINES')
  return (ctx.body = {
    code: 200,
    msg: formdata,
    data: data,
  })
}

module.exports = main
