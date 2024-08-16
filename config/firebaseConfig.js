// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "loop-clone-3b49c.firebaseapp.com",
  projectId: "loop-clone-3b49c",
  storageBucket: "loop-clone-3b49c.appspot.com",
  messagingSenderId: "745615047880",
  appId: "1:745615047880:web:1a83b440be41ad76e7b9fd",
  measurementId: "G-GTY1YPLTYS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
