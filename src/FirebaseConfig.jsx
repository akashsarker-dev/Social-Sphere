// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3EUec4YPnUm7AWDMEaiEMz28daugU028",
  authDomain: "social-sphere-7d5a8.firebaseapp.com",
  databaseURL: "https://social-sphere-7d5a8-default-rtdb.firebaseio.com",
  projectId: "social-sphere-7d5a8",
  storageBucket: "social-sphere-7d5a8.appspot.com",
  messagingSenderId: "60446875024",
  appId: "1:60446875024:web:a9881b258a0525eddd6715",
  measurementId: "G-JCEKT4GG4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);