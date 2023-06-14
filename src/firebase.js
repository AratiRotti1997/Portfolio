
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAgRcD4eDH6pB_UI1Ek9k9I17PqDAFlRmc",
  authDomain: "portfolio-10337.firebaseapp.com",
  databaseURL: "https://portfolio-10337-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-10337",
  storageBucket: "portfolio-10337.appspot.com",
  messagingSenderId: "119989609800",
  appId: "1:119989609800:web:dbdb133e0b0aaf08a93f7d",
  measurementId: "G-KGBWN04T5X"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);