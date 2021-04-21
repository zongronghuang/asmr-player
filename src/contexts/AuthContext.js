import { createContext } from 'react'

const AuthContext = createContext({
  FB: {
    status: null,
    authResponse: null,
    loginMethod: null,
    logoutMethod: null
  },
  twitter: {
    status: null,
    authResponse: null,
    loginMethod: null,
    logoutMethod: null
  }
})

export default AuthContext