import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const useGoogleLogin = () => {
  const [GoogleResponse, setGoogleResponse] = useState()
  const provider = new firebase.auth.GoogleAuthProvider()

  const handleGoogleLogin = async () => {
    try {
      const result = await firebase.auth().signInWithPopup(provider)
      const {
        credential: {
          accessToken,
        }
      } = result

      localStorage.setItem('googleAccessToken', accessToken)
      setGoogleResponse({ login: true })
    } catch (error) {
      console.log(`[Google] Login failure: code=${error.code} | message=${error.message}`)
      setGoogleResponse({ login: false })
    }
  }

  const handleGoogleLogout = async () => {
    try {
      await firebase.auth().signOut()
      setGoogleResponse({ login: false })
    } catch (error) {
      console.log(`[Google] Logout failure: code=${error.code} | message=${error.message}`)
    }
  }

  // console.log('useGoogleLogin hook ready!')
  return [GoogleResponse, handleGoogleLogin, handleGoogleLogout]
}

export default useGoogleLogin