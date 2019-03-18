const functions = require('../firebase/functions')
const db = require('../db')

module.exports = functions.auth.user()
  .onCreate(({ uid, email }) => {
    const name = email.substring(0, email.indexOf('@'))
    return db.user.create({ uid, name })
  })
