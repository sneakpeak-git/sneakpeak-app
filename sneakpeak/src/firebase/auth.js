import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseConfig from "./config";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence);

async function handleGoogleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // google access token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // signed-in user info.
      const user = result.user;
      console.log(user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
}

async function handleSignOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}

export { handleGoogleSignIn, auth, handleSignOut };
