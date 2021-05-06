import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'



// const db = firebase.firestore()
// db.collection("users").doc('S8W8JOEUbogt2OacWT15').update({
//   born: 1815,
//   first: "bbb",
//   last: "Lovelovelove",
// })
//   .then(res => console.log('update res', res))
//   .catch(error => console.log('update error', error))


const useGoogleLogin = () => {
  const [GoogleResponse, setGoogleResponse] = useState()

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
      const result = await firebase.auth().signInWithPopup(provider)
      console.log('google login result', result)

      const {
        credential,
        credential: {
          accessToken,
        },
        user
      } = result

      console.log('user', user, 'crendential', credential, 'token', accessToken)
      localStorage.setItem('googleAccessToken', accessToken)

      setGoogleResponse({
        login: true,
        credential,
        accessToken,
        user
      })
    } catch (error) {
      const { code, message, email, credential } = error
      console.log('code', code, 'message', message, 'email', email, 'credential', credential)

      setGoogleResponse({
        login: false,
        code,
        message,
        email,
        credential
      })
    }
  }

  const handleGoogleLogout = async () => {
    try {
      await firebase.auth().signOut()
      setGoogleResponse({ login: false })
      console.log('logout success')
    } catch (error) {
      console.log('logout failure', error)
    }
  }

  return [GoogleResponse, handleGoogleLogin, handleGoogleLogout]
}

export default useGoogleLogin