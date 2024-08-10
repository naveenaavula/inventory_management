// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDt2XnEi4pnck9UBXAT5bTc5B3kmSe5ao",
  authDomain: "inventory-management-550a4.firebaseapp.com",
  projectId: "inventory-management-550a4",
  storageBucket: "inventory-management-550a4.appspot.com",
  messagingSenderId: "1031772338277",
  appId: "1:1031772338277:web:0734104269a2999de9ee8c",
  measurementId: "G-D737SZX4EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};