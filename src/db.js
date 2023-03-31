// 处理json-server的路由
const test = require('../data/test')
const homePage = require('../data/home_page')

function responseData(data) {
  return {
    code: 0,
    msg: '请求成功',
    data
  }
}

module.exports = () => {
  return {
    testjson0: test(),
    home_page: responseData(homePage())
  }
}