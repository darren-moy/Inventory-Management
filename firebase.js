// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYMRuHgIIYTyII70fVMNNs7QMicTDF7wU",
  authDomain: "inventory-management-43988.firebaseapp.com",
  projectId: "inventory-management-43988",
  storageBucket: "inventory-management-43988.appspot.com",
  messagingSenderId: "888624796879",
  appId: "1:888624796879:web:99d762087745ac40d153ba",
  measurementId: "G-FR5V8QVXN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};