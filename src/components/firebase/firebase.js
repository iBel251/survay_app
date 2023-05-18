// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZfecYIcYZFQPds9Ny6UkzHGfvOzQjpAU",
  authDomain: "survey-app-c1e8b.firebaseapp.com",
  projectId: "survey-app-c1e8b",
  storageBucket: "survey-app-c1e8b.appspot.com",
  messagingSenderId: "822200088206",
  appId: "1:822200088206:web:a4d498d546b17a83c03bdf",
  measurementId: "G-WL8PWX7R1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
