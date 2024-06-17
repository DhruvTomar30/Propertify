// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertify-a5590.firebaseapp.com",
  projectId: "propertify-a5590",
  storageBucket: "propertify-a5590.appspot.com",
  messagingSenderId: "111093219881",
  appId: "1:111093219881:web:62decb04eb6a2cf96c5238"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);