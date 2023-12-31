// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmMk4HtcUNfqHlqYWtqHNsltCDK7plz3M",
  authDomain: "gogogm.firebaseapp.com",
  projectId: "gogogm",
  storageBucket: "gogogm.appspot.com",
  messagingSenderId: "1024812633503",
  appId: "1:1024812633503:web:1ddaa89b1d4640e96cc1aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
