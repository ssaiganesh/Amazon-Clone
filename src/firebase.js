// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyArH0JK6_JxoPz87l6W5tUKGNv3l61HRdk",
    authDomain: "sai-clone.firebaseapp.com",
    projectId: "sai-clone",
    storageBucket: "sai-clone.appspot.com",
    messagingSenderId: "507919351259",
    appId: "1:507919351259:web:95a2c7f4d1954ae135bbfe",
    measurementId: "G-3WJCG2FW2V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};