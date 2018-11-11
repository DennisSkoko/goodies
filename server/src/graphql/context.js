'use strict'

const jwt = require('../jwt')
const logger = require('../logger')
const User = require('../db/user')

const AUTHORIZATION_PREFIX = 'Bearer '
const UNAUTHORIZED_ERROR = 'Unauthorized'

function getJwtToken (request) {
  return new Promise((resolve, reject) => {
    const header = request.header.authorization

    const token = header &&
      header.includes(AUTHORIZATION_PREFIX) &&
      header.substring(AUTHORIZATION_PREFIX.length)

    if (!token) {
      logger.debug('Request did not contain a valid authorization field')
      reject(new Error(UNAUTHORIZED_ERROR))
    } else {
      resolve(token)
    }
  })
}

function getUserIdFromToken (token) {
  return jwt.verify(token)
    .then(payload => {
      if (!payload.sub) {
        logger.warn('Parsed a jwt token without a \'sub\' field')
        return Promise.reject(new Error(UNAUTHORIZED_ERROR))
      }

      return payload.sub
    })
    .catch(() => {
      logger.debug('Recieved an invalid jwt token')
      return Promise.reject(new Error(UNAUTHORIZED_ERROR))
    })
}

function fetchUser (id) {
  return User.findByPk(id)
    .then(user => {
      if (!user) {
        logger.warn('Jwt token referenced a user that does not exists', { id })
        return Promise.reject(new Error(UNAUTHORIZED_ERROR))
      }

      return user
    })
    .catch(err => {
      logger.error('Failed to fetch the user when authenticating', {
        error: err.message
      })
      return Promise.reject(err)
    })
}

function handleError (err) {
  if (err.message === UNAUTHORIZED_ERROR) {
    return { user: null }
  }

  logger.error('Failed to authenticate the user', {
    error: err.message
  })
  return Promise.reject(err)
}

module.exports = ({ ctx: { request } }) =>
  getJwtToken(request)
    .then(getUserIdFromToken)
    .then(fetchUser)
    .then(user => ({ user }))
    .catch(handleError)
