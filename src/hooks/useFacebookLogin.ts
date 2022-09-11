import { useState } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const useFacebookLogin = () => {
  const [FBResponse, setFBResponse] = useState({ login: false });
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  provider.addScope("email"); // 向 Facebook 取得登入者的 email

  const handleFBLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      setFBResponse({ login: true });
      localStorage.setItem("facebookClientToken", accessToken);
    } catch (error) {
      const credential = FacebookAuthProvider.credentialFromError(error);

      setFBResponse({ login: false });
      console.error(
        `[FB] Login failure: code=${error.code} | message=${error.message} | credential-type=${credential}`
      );
    }
  };

  const handleFBLogout = async () => {
    try {
      const result = await signOut(auth);

      setFBResponse({ login: false });
      localStorage.removeItem("facebookClientToken");
    } catch (error) {
      console.error(
        `[FB] Logout failure: code=${error.code} | message=${error.message}`
      );
    }
  };

  return [FBResponse, handleFBLogin, handleFBLogout];
};

export default useFacebookLogin;
