// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyXr-ExYHqRGHDUtjm9dcthstjA39J9kc",
  authDomain: "vite-contact-c4afe.firebaseapp.com",
  projectId: "vite-contact-c4afe",
  storageBucket: "vite-contact-c4afe.firebasestorage.app",
  messagingSenderId: "512113818767",
  appId: "1:512113818767:web:4c6c8ca7c6d53504d084fa",
  measurementId: "G-NG4GK87M1X"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);