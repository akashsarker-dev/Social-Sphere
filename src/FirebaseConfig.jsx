// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDktIhYNaQZXOZdndtavLEWXa8h2jXrDkU",
  authDomain: "social-sphere-1cbce.firebaseapp.com",
  projectId: "social-sphere-1cbce",
  storageBucket: "social-sphere-1cbce.appspot.com",
  messagingSenderId: "196925375758",
  appId: "1:196925375758:web:f5f8d721b5a11964ba435f",
  measurementId: "G-NSKQDMX8GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);