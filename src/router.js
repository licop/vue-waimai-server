// 处理自定义路由

const test = require('./controller/test')

module.exports = (app) => {
  app.use('/api/test', test)
}