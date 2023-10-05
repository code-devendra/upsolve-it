import { initializeApp } from "firebase/app";
import {
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  where,
} from "firebase/firestore";

import { useEffect, useState, useContext, createContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDJTin3pl7Em6-O2Ve-4K-LZ5ZRHrqkdXk",
  authDomain: "upsolve-questions.firebaseapp.com",
  projectId: "upsolve-questions",
  storageBucket: "upsolve-questions.appspot.com",
  messagingSenderId: "627044305411",
  appId: "1:627044305411:web:21126c3a710bb565549c36",
};

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  // AUTH
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  const isLoggedIn = user ? true : false;
  const signInUserWithGoogle = () =>
    signInWithPopup(firebaseAuth, googleProvider);
  const logoutUser = () => signOut(firebaseAuth);

  // CRUD QUESTIONS
  const addQuestion = (question, questionUrl) =>
    addDoc(collection(firestore, "questions"), {
      question,
      questionUrl,
      userID: user.uid,
      userEmail: user.email,
    });

  const getAllQuestions = () =>
    getDocs(
      collection(firestore, "questions"),
      where("userID", "==", user.uid)
    );

  return (
    <FirebaseContext.Provider
      value={{
        isLoggedIn,
        signInUserWithGoogle,
        logoutUser,
        addQuestion,
        getAllQuestions,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
