const admin = require('../firebase/admin')

const db = admin.firestore().collection('users')

module.exports = {
  create ({ uid, name }) {
    return db.doc(uid).set({ name })
  }
}
