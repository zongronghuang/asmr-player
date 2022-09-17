import { createContext } from "react";

const AuthContext = createContext({
  authProvider: "",
  FB: {
    authResponse: "",
    loginMethod: () => {},
    logoutMethod: () => {},
  },
  Google: {
    authResponse: "",
    loginMethod: () => {},
    logoutMethod: () => {},
  },
});

export default AuthContext;
