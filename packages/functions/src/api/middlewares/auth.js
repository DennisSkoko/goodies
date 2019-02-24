const express = require('express')
const db = require('../db')
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
    const token = await jwt.sign(newUser)

    res.json({ token })
  } catch (err) {
    next(err)
  }
})

module.exports = router
