const admin = require('../../firebase/admin')
const hasher = require('../hasher')

const db = admin.firestore().collection('users')

function filterData (data) {
  const { password, ...user } = data
  return user
}

module.exports = {
  async create ({ email, name, password }) {
    const hash = await hasher.hash(password)
    const ref = await db.add({
      email,
      name,
      password: hash,
      verified: false,
      suspended: false,
      createdAt: new Date()
    })
    const doc = await ref.get()

    return { uid: ref.id, ...filterData(doc.data()) }
  },

  async get ({ uid, email }) {
    if (uid) {
      const doc = await db.doc(uid).get()
      if (!doc.exists) return null

      return { uid, ...filterData(doc.data()) }
    }

    const query = await db.where('email', '==', email).get()
    if (query.empty) return null

    const doc = query.docs[0]
    return { uid, ...filterData(doc.data()) }
  }
}
