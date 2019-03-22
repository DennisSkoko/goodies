import { useContext } from 'react'
import FirebaseContext from './FirebaseContext'

function useFirebase () {
  const app = useContext(FirebaseContext)

  return {
    app,
    auth: app.auth()
  }
}

export default useFirebase
