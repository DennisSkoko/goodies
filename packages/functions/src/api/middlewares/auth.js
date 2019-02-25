const express = require('express')
const _ = require('lodash/fp')
const db = require('../db')
const AuthInvalidPassword = require('../error/AuthInvalidPassword')
const UserDoesNotExists = require('../error/UserDoesNotExists')
const UserExists = require('../error/UserExists')
const UserSuspended = require('../error/UserSuspended')
const hasher = require('../hasher')
const jwt = require('../jwt')

const router = express.Router()

router.post('/auth/sign-up', async (req, res, next) => {
  try {
    const { email, name, password } = req.body
    const user = await db.user.get({ email })

    if (user) return next(new UserExists())

    const newUser = await db.user.create({ email, name, password })
    const token = await jwt.sign(_.omit(['password'], newUser))

    res.status(201).json({ token })
  } catch (err) {
    next(err)
  }
})

router.post('/auth/sign-in', async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await db.user.get({ email })

    if (!user) return next(new UserDoesNotExists())
    if (user.suspended) return next(new UserSuspended())

    if (!await hasher.compare(password, user.password)) {
      return next(new AuthInvalidPassword())
    }

    const token = await jwt.sign(_.omit(['password'], user))

    res.json({ token })
  } catch (err) {
    next(err)
  }
})

module.exports = router
