import { useState } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { FirebaseError } from "firebase/app";
import { Object } from "../types";

const useGoogleLogin = (): [Object, () => void, () => void] => {
  const [GoogleResponse, setGoogleResponse] = useState<Object>({
    login: false,
  });
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken!;
      const user = result.user;

      localStorage.setItem("googleAccessToken", token);
      setGoogleResponse({ login: true });
    } catch (error) {
      // error 為 FirebaseError
      if (error instanceof FirebaseError) {
        console.error(
          `[Google] Login failure: code=${error.code} | message=${error.message}`
        );
        setGoogleResponse({ login: false });
      }

      // 其他類型 error
      console.error("[Google] Login failure: ", error);
    }
  };

  const handleGoogleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem("googleAccessToken");
      setGoogleResponse({ login: false });
    } catch (error) {
      // error 為 FirebaseError
      if (error instanceof FirebaseError) {
        console.error(
          `[Google] Logout failure: code=${error.code} | message=${error.message}`
        );
      }

      // 其他類型 error
      console.error("[Google] Logout failure: ", error);
    }
  };

  // console.log('useGoogleLogin hook ready!')
  return [GoogleResponse, handleGoogleLogin, handleGoogleLogout];
};

export default useGoogleLogin;
