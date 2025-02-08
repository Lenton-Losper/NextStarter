// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhnXfxrd5Ktk-GuUcwx13ZMY6bhBao1Uw",
  authDomain: "next-starter-28a0f.firebaseapp.com",
  projectId: "next-starter-28a0f",
  storageBucket: "next-starter-28a0f.firebasestorage.app",
  messagingSenderId: "899672520926",
  appId: "1:899672520926:web:c2ad8aa651ab7592dd2a4f",
  measurementId: "G-QMKXHKWS1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);