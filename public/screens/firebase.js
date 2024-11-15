// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHm11Qe0W_xAu4_CMQr6KJI1dF_MGLgfQ",
  authDomain: "acme-fae10.firebaseapp.com",
  projectId: "acme-fae10",
  storageBucket: "acme-fae10.firebasestorage.app",
  messagingSenderId: "447798610227",
  appId: "1:447798610227:web:304f42df35e4d2c3a61646",
  measurementId: "G-J8JFJXZP6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);