// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWSRUTAiv15OYZeYBBAv2gwAwoeAw3UBY",
  authDomain: "vema-e70a5.firebaseapp.com",
  projectId: "vema-e70a5",
  storageBucket: "vema-e70a5.appspot.com",
  messagingSenderId: "740424739667",
  appId: "1:740424739667:web:68677f12c2e173f4d34fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
