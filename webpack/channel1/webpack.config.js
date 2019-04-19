const devModule = require('./build/webpack.dev.conf')
const prodModule = require('./build/webpack.prod.conf')
let finalModule = {}
let ENV = process.env.NODE_ENV
switch (ENV) {
  case 'dev':
    finalModule = devModule
    break
  case 'prod':
    finalModule = prodModule
    break
  default:
    break
}
module.exports = finalModule
