import { useState } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const useGoogleLogin = () => {
  const [GoogleResponse, setGoogleResponse] = useState();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      localStorage.setItem("googleAccessToken", token);
      setGoogleResponse({ login: true });
    } catch (error) {
      console.error(
        `[Google] Login failure: code=${error.code} | message=${error.message}`
      );
      setGoogleResponse({ login: false });
    }
  };

  const handleGoogleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setGoogleResponse({ login: false });
    } catch (error) {
      console.error(
        `[Google] Logout failure: code=${error.code} | message=${error.message}`
      );
    }
  };

  // console.log('useGoogleLogin hook ready!')
  return [GoogleResponse, handleGoogleLogin, handleGoogleLogout];
};

export default useGoogleLogin;
