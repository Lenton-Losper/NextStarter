// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhnXfxrd5Ktk-GuUcwx13ZMY6bhBao1Uw",
  authDomain: "next-starter-28a0f.firebaseapp.com",
  projectId: "next-starter-28a0f",
  storageBucket: "next-starter-28a0f.appspot.com",
  messagingSenderId: "899672520926",
  appId: "1:899672520926:web:c2ad8aa651ab7592dd2a4f",
  measurementId: "G-QMKXHKWS1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
