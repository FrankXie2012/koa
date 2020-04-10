const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()

// 增加前缀
// router.prefix('/')

// 路由
router.get('/', controllers.main.get)
router.post('/', controllers.main.post)

// TEST路由
router.get('/test', controllers.test.get)
router.post('/test', controllers.test.post)

module.exports = router
