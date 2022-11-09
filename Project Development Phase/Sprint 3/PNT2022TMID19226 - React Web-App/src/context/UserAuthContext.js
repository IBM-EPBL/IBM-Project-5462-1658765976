import { createContext, useContext, useEffect, useState } from "react"
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from "../firebase/firebaseConfig.js"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth"

const userAuthContext = createContext()
export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("")

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (user) => {
        if (user.user && user.user.emailVerified === false) {
          sendEmailVerification(user.user)
          console.log("Verification Email Sent")
        }
      }
    )
  }

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
  }

  const signInWithFacebook = async () => {
    await signInWithPopup(auth, facebookAuthProvider).then((user) => {
      if (user.user && user.user.emailVerified === false) {
        sendEmailVerification(user.user)
        console.log("Verification Email Sent")
      }
    })
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutGoogle = async () => {
    await signOut(auth)
  }

  const sendVerificationEmail = () => {
    if (user && user.emailVerified === false) {
      sendEmailVerification(user)
      console.log("Verification Email Sent")
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <userAuthContext.Provider
      value={{
        user,
        signUp,
        login,
        signOut: signOutGoogle,
        signInWithGoogle,
        signInWithFacebook,
        sendVerificationEmail,
      }}
    >
      {children}
    </userAuthContext.Provider>
  )
}
export const useUserAuth = () => {
  return useContext(userAuthContext)
}
