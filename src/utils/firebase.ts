// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDULVuVth1yeyNUY3Tf91XeKvilptrXzuQ",
  authDomain: "line-clone-d39fa.firebaseapp.com",
  projectId: "line-clone-d39fa",
  storageBucket: "line-clone-d39fa.appspot.com",
  messagingSenderId: "441840556000",
  appId: "1:441840556000:web:4dbfc5d66b7dc809b23d85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };
