import { getApp,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  {getFirestore, getFireStore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDM6YPzlEXTyzeFCSu3wNKEzODTlYCl0o",
  authDomain: "booking-project-e1e63.firebaseapp.com",
  projectId: "booking-project-e1e63",
  storageBucket: "booking-project-e1e63.appspot.com",
  messagingSenderId: "122514258199",
  appId: "1:122514258199:web:c5e45cd41eed78b2745f52",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
