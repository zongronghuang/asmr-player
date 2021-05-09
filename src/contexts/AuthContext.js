import { createContext } from 'react'

const AuthContext = createContext({
  authProvider: null,
  FB: {
    status: null,
    authResponse: null,
    loginMethod: null,
    logoutMethod: null
  },
  Google: {
    authResponse: null,
    loginMethod: null,
    logoutMethod: null
  }
})

export default AuthContext