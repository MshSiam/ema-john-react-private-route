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
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.usser)
      console.log(result.user)
    })
  }

  // // sign out // //
  const signout = () => {
    signOut(auth).then((result) => {
      setUser({})
    })
  }

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
