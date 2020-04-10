const Koa = require('koa')
const bodyParser = require('koa-bodyparser')()
const cors = require('koa2-cors')
const config = require('./config')
const {loggerMiddleware} = require('./middlewares/logger')
const {errorHandler, responseHandler} = require('./middlewares/response')
const {corsHandler} = require('./middlewares/cors')
const router = require('./routes')

const app = new Koa()

// Logger
app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

// Global Middlewares
app.use(bodyParser)

// cors
app.use(cors(corsHandler))

// Routes
app.use(router.routes(), router.allowedMethods())

// Response
app.use(responseHandler)

// 在端口3000监听:
const port = process.env.PORT || config.port
const server = app.listen(port)
console.log(`app started at port ${port}...`)

// 导入WebSocket模块:
const WebSocket = require('ws')
// 引用Server类:
const WebSocketServer = WebSocket.Server
const wss = new WebSocketServer({
  server: server,
})
wss.on('connection', (ws) => {
  console.log(ws)
})
