// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
// 
//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrgbzJ8ifxJhwmVRQfJ_tfi1csFNu_aj4",
  authDomain: "sql-demos-6d37d.firebaseapp.com",
  databaseURL: "https://sql-demos-6d37d-default-rtdb.firebaseio.com",
  projectId: "sql-demos-6d37d",
  storageBucket: "sql-demos-6d37d.appspot.com",
  messagingSenderId: "1072985728112",
  appId: "1:1072985728112:web:1d5afb58caace9169a80b5",
  measurementId: "G-58VENBT8S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

console.log("firebase configurado");


export default getFirestore();