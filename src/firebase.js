import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp  } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNkLTFc1rTa29FBkthUCdih0zOPZ9Ysdg",
    authDomain: "linkedin-react-redux-fir-a3beb.firebaseapp.com",
    projectId: "linkedin-react-redux-fir-a3beb",
    storageBucket: "linkedin-react-redux-fir-a3beb.appspot.com",
    messagingSenderId: "480600807912",
    appId: "1:480600807912:web:4adedac80339ee29c12c5d"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  export { db, auth, serverTimestamp, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,onAuthStateChanged };