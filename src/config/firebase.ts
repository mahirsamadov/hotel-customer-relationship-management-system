// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { variables } from "./variables";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: variables.FIREBASE_API_KEY,
  authDomain: "hotel-10af0.firebaseapp.com",
  databaseURL: "https://hotel-10af0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hotel-10af0",
  storageBucket: "hotel-10af0.appspot.com",
  messagingSenderId: "930944634818",
  appId: "1:930944634818:web:6390f19d6bff9a3d3dd05b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);