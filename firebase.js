// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-COrVJHlFgtWm2R1CvnSPHoBnzQ5N8cI",
  authDomain: "bm-reclutamiento.firebaseapp.com",
  projectId: "bm-reclutamiento",
  storageBucket: "bm-reclutamiento.firebasestorage.app",
  messagingSenderId: "331866467746",
  appId: "1:331866467746:web:1009629837797e690396fb",
  measurementId: "G-C563VFJH8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
