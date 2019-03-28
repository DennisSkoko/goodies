import React, { useRef, useState, useEffect } from 'react'
import TheHeader from './components/TheHeader'
import { AuthProvider } from './hooks/useAuth'
import { ToastProvider } from './hooks/useToast'
import { createFirebaseApp, FirebaseProvider } from './hooks/useFirebase'
import RouterOutlet from './routing/RouterOutlet'
import Toast from './ui/Toast'
import './style'

function App () {
  const firebaseApp = useRef(null)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    createFirebaseApp()
      .then(app => {
        firebaseApp.current = app
        setInitialized(true)
      })
      .catch(err => {
        console.error('Failed to initialize a firebase app', err)
      })
  }, [])

  if (!initialized) return null

  return (
    <FirebaseProvider app={firebaseApp.current}>
      <AuthProvider>
        <ToastProvider>
          <>
            <TheHeader />
            <Toast />
            <RouterOutlet />
          </>
        </ToastProvider>
      </AuthProvider>
    </FirebaseProvider>
  )
}

export default App
