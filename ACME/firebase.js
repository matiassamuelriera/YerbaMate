// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics'; // Import getAnalytics



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHbHj4i1H_EHKbIM0OtLTbL-XSNy9osSs",
  authDomain: "acme-22e50.firebaseapp.com",
  projectId: "acme-22e50",
  storageBucket: "acme-22e50.firebasestorage.app",
  messagingSenderId: "1097815768281",
  appId: "1:1097815768281:web:5e4faa82e26d233ea052c8",
  measurementId: "G-RCCBE3W23K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize analytics
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export { app, auth, googleProvider, analytics, signInWithPopup };
