module.exports = {
  firebase: {
    region: 'europe-west1'
  },

  hasher: {
    rounds: 10
  },

  jwt: {
    secret: process.env.GOODIES_JWT_SECRET || 'jwt-secret',
    options: {
      expiresIn: '6h'
    }
  }
}
