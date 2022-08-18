import { initializeApp } from "firebase/app";
import { firestore, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAccENryspLeqzb0YUCA7STPKx69J34IlA",
  authDomain: "portfolio-app-ce71f.firebaseapp.com",
  projectId: "portfolio-app-ce71f",
  storageBucket: "portfolio-app-ce71f.appspot.com",
  messagingSenderId: "43974886888",
  appId: "1:43974886888:web:27fb2fbe8ec6bac644d05d",
  measurementId: "G-K02WQ6VQ2R",
};

// Initialize Firebase
const firestoreDB = getFirestore(initializeApp(firebaseConfig));

export default firestoreDB;
