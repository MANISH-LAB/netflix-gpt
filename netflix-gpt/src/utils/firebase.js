// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGk1vGGsa6avSL6RV2jeI6a0EK6Zt95_4",
  authDomain: "netflix-gpt-29811.firebaseapp.com",
  projectId: "netflix-gpt-29811",
  storageBucket: "netflix-gpt-29811.appspot.com",
  messagingSenderId: "873263311656",
  appId: "1:873263311656:web:ccd1d7a4e1309acd007e1d",
  measurementId: "G-RWLXJ6X6QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)