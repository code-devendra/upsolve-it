import { initializeApp } from "firebase/app";
import {
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import { useEffect, useState, useContext, createContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDJTin3pl7Em6-O2Ve-4K-LZ5ZRHrqkdXk",
  authDomain: "upsolve-it.vercel.app",
  projectId: "upsolve-questions",
  storageBucket: "upsolve-questions.appspot.com",
  messagingSenderId: "627044305411",
  appId: "1:627044305411:web:21126c3a710bb565549c36",
};

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  const isLoggedIn = user ? true : false;
  const signInUserWithGoogle = () =>
    signInWithRedirect(firebaseAuth, googleProvider);
  const logoutUser = () => signOut(firebaseAuth);
  return (
    <FirebaseContext.Provider
      value={{ isLoggedIn, signInUserWithGoogle, logoutUser }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
