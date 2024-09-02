// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-1542f.firebaseapp.com",
  projectId: "x-next-1542f",
  storageBucket: "x-next-1542f.appspot.com",
  messagingSenderId: "457814052208",
  appId: "1:457814052208:web:f484f2351f45618df0d3b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);