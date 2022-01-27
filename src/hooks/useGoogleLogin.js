import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firebase 初始化
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

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
      console.log(
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
      console.log(
        `[Google] Logout failure: code=${error.code} | message=${error.message}`
      );
    }
  };

  // console.log('useGoogleLogin hook ready!')
  return [GoogleResponse, handleGoogleLogin, handleGoogleLogout];
};

export default useGoogleLogin;
