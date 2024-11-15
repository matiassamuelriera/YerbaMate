// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics'; // Import getAnalytics
import { auth, provider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdEw1e33g-XNqbVQUqNMhU3s3m88yxJ6E",
  authDomain: "acme-13937.firebaseapp.com",
  projectId: "acme-13937",
  storageBucket: "acme-13937.appspot.com", // Corrected storageBucket format
  messagingSenderId: "11200021979",
  appId: "1:11200021979:web:ad72b05e951414726413fe",
  measurementId: "G-YG3TN10VNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize analytics
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, analytics };
