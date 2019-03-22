import firebase from 'firebase/app'
import 'firebase/auth'

const FIREBASE_APP_CONFIG = {
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
}

function configure (app) {
  return app.auth().setPersistence(
    process.env.NODE_ENV === 'production'
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION
  )
}

function initializeAuth (app) {
  return new Promise(resolve => {
    const unsubscribe = app.auth().onAuthStateChanged(() => {
      unsubscribe()
      resolve()
    })
  })
}

async function createFirebaseApp (name) {
  const app = firebase.initializeApp(FIREBASE_APP_CONFIG, name)

  await configure(app)
  await initializeAuth(app)

  return app
}

export default createFirebaseApp
