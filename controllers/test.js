let test = {}

test.get = async (ctx, next) => {
  ctx.response.body = '<h1>你好, Test GET</h1>'
}

test.post = async (ctx, next) => {
  ctx.response.body = '<h1>你好, Test POST</h1>'
}

module.exports = test
