// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmlPSwwrcjWEkPNRKmwu_mNXs0r5PI-Qw",
  authDomain: "ecommerce-4d68b.firebaseapp.com",
  projectId: "ecommerce-4d68b",
  storageBucket: "ecommerce-4d68b.appspot.com",
  messagingSenderId: "818435864653",
  appId: "1:818435864653:web:f96579ac1ca2ad022b8404",
  measurementId: "G-XLM5VPZWL1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
