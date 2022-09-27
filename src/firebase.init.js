// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbMaDlYCM2zsDlUCQnmsXUyCCC1FH8wdk",
  authDomain: "uiu-crowdfounding-191.firebaseapp.com",
  projectId: "uiu-crowdfounding-191",
  storageBucket: "uiu-crowdfounding-191.appspot.com",
  messagingSenderId: "987589366824",
  appId: "1:987589366824:web:141574a7115718da92d11d",
  measurementId: "G-NYQL3Z8JSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth