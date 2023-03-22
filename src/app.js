const path = require('path')
const jsonServer = require('json-server')
const router = require('./router')
const db = require('./db')()

const server = jsonServer.create()

// json-server的默认中间件
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '../public')
})

server.use(middlewares)

// req.body
server.use(jsonServer.bodyParser)

router(server)
const jsonRouter  = jsonServer.router(db)

server.use('/api', jsonRouter)

server.listen(8000, () => {
  console.log('JSON Server is running at 8000')
})