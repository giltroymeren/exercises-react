// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBFtl3q9unCJAkFKs1w5kGfmGXXmy_AMY",
  authDomain: "house-marketplace-b4ba1.firebaseapp.com",
  projectId: "house-marketplace-b4ba1",
  storageBucket: "house-marketplace-b4ba1.appspot.com",
  messagingSenderId: "122699461667",
  appId: "1:122699461667:web:02362300baaab15596ad96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()