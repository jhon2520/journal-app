import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYxWStEPma6QmfloUR0Otjpxjl3DsE7Vg",
    authDomain: "react-app-journal-df5c8.firebaseapp.com",
    projectId: "react-app-journal-df5c8",
    storageBucket: "react-app-journal-df5c8.appspot.com",
    messagingSenderId: "537304229979",
    appId: "1:537304229979:web:fb740c540c46379dc4377e"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initializeApp(firebaseConfig);
const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider
}