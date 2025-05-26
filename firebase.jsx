// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4bUwkct4KlB4xKcgg7Po6mC9IgcIpCvc",
  authDomain: "bookfy-b8234.firebaseapp.com",
  projectId: "bookfy-b8234",
  storageBucket: "bookfy-b8234.firebasestorage.app",
  messagingSenderId: "570225411131",
  appId: "1:570225411131:web:42ecbd03e1a174da98081e",
  measurementId: "G-XQMGEBNP0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, db };