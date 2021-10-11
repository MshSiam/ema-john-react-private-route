import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"

const useFirebase = () => {
  const [user, setUser] = useState({})

  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  //   google sign in // //
  const signinUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // // sign out // //
  const signout = () => {
    signOut(auth).then((result) => {
      setUser({})
    })
  }

  // observes weather state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  return {
    user,
    signinUsingGoogle,
    signout
  }
}

export default useFirebase
