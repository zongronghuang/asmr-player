import { createContext } from "react";

const AuthContext = createContext({
  authProvider: null,
  FB: {
    authResponse: null,
    loginMethod: null,
    logoutMethod: null,
  },
  Google: {
    authResponse: null,
    loginMethod: null,
    logoutMethod: null,
  },
});

export default AuthContext;
