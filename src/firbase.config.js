import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9aPqs2KOl8AlMru1UWlFLw2RTyi7I8LE",
  authDomain: "romand-ecommerce.firebaseapp.com",
  projectId: "romand-ecommerce",
  storageBucket: "romand-ecommerce.appspot.com",
  messagingSenderId: "360195610081",
  appId: "1:360195610081:web:18fef2c56654e380f7aea0",
  measurementId: "G-LS0CRWYBD3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
