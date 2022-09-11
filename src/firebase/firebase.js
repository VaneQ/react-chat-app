// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA109djTW0_--mumzhsDjXq9gXMLZJ1TwI",
  authDomain: "react-chat-app-382fb.firebaseapp.com",
  projectId: "react-chat-app-382fb",
  storageBucket: "react-chat-app-382fb.appspot.com",
  messagingSenderId: "533028373185",
  appId: "1:533028373185:web:caca4dee0d2b4969e60a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth( app );
