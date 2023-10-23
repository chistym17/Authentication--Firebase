// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiUxpdUZF4mnhjUfLjIzpSw4P5wskqbSA",
  authDomain: "simple-firebase-75b5e.firebaseapp.com",
  projectId: "simple-firebase-75b5e",
  storageBucket: "simple-firebase-75b5e.appspot.com",
  messagingSenderId: "985275151897",
  appId: "1:985275151897:web:1cbb69615c730e293fdc88",
  measurementId: "G-P63XV7BYRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app