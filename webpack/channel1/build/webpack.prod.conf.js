const webpackMerge = require('webpack-merge')
const base = require('./build/webpack.base.conf.js')
module.exports = webpackMerge(base, {
})
