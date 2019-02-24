const functions = require('../firebase/functions')
const app = require('../api/app')

module.exports = functions.https.onRequest(app)
