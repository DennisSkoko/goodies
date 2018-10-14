'use strict'

const Koa = require('koa')
const applyMiddlewares = require('./apply-middlewares')

const app = new Koa()
applyMiddlewares(app)

module.exports = app
