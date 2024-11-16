// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVJfqrKJEqcQ0JDTQj2J13Ahc47Q5egj8",
  authDomain: "m-9-conceptual-2.firebaseapp.com",
  projectId: "m-9-conceptual-2",
  storageBucket: "m-9-conceptual-2.firebasestorage.app",
  messagingSenderId: "32437642123",
  appId: "1:32437642123:web:0c3437fd3751d88e7fc58e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
