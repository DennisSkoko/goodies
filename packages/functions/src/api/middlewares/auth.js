const express = require('express')
const _ = require('lodash/fp')
const db = require('../db')
const hasher = require('../hasher')
const jwt = require('../jwt')

const router = express.Router()

router.post('/auth/sign-up', async (req, res, next) => {
  try {
    const { email, name, password } = req.body
    const user = await db.user.get({ email })

    if (user) {
      return res.status(409).json({
        code: 'ERR_USER_EXISTS',
        message: 'User already exists'
      })
    }

    const newUser = await db.user.create({ email, name, password })
    const token = await jwt.sign(_.omit(['password'], newUser))

    res.json({ token })
  } catch (err) {
    next(err)
  }
})

router.post('/auth/sign-in', async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await db.user.get({ email })

    if (!user) {
      return res.status(401).json({
        code: 'ERR_USER_NOT_EXISTS',
        message: 'User with the given email does not exists'
      })
    }

    if (user.suspended) {
      return res.status(403).json({
        code: 'ERR_USER_SUSPENDED',
        message: 'User has been suspended and is allowed to authenticate'
      })
    }

    if (!await hasher.compare(password, user.password)) {
      return res.status(401).json({
        code: 'ERR_AUTH_INVALID_PASS',
        message: 'The given password is incorrect'
      })
    }

    const token = await jwt.sign(_.omit(['password'], user))

    res.json({ token })
  } catch (err) {
    next(err)
  }
})

module.exports = router
