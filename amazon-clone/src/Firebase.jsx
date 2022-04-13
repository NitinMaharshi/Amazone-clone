import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkQhEYFY7qvTy6t4x0fieC-jeRqB1O1GE",
  authDomain: "clone-b341a.firebaseapp.com",
  projectId: "clone-b341a",
  storageBucket: "clone-b341a.appspot.com",
  messagingSenderId: "1006126620088",
  appId: "1:1006126620088:web:235da4ba64e3601608c34d",
  measurementId: "G-880MTYFM9N",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
