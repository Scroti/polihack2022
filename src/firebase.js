// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFMk-Z_PCM-IfRHEHHxZG1j5JkAD5-eLY",
  authDomain: "polihack-4359e.firebaseapp.com",
  projectId: "polihack-4359e",
  storageBucket: "polihack-4359e.appspot.com",
  messagingSenderId: "977707546411",
  appId: "1:977707546411:web:72d1e6e1870b73ae2d376e",
  measurementId: "G-K0JYR1WMXH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);





