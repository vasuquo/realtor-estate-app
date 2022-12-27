// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA59D6Qrl3mPDqCNj1h6Y47HpfZRoAgbos",
  authDomain: "realtor-clone-va.firebaseapp.com",
  projectId: "realtor-clone-va",
  storageBucket: "realtor-clone-va.appspot.com",
  messagingSenderId: "1099157515036",
  appId: "1:1099157515036:web:3e8b6c9c798a184bf0a8d9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();