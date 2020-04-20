'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // VUE_APP_BASE_API:'"http://192.168.1.129:7111/bsa-admin"',
  // VUE_APP_BASE_WS:'"wss://192.168.1.129:7111/bsa-admin"',
})
