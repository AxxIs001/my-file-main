// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVYQ6TPrjLgw6vrBybMegzki8_CkZiJoE",
    authDomain: "instagram-clone-a6417.firebaseapp.com",
    projectId: "instagram-clone-a6417",
    storageBucket: "instagram-clone-a6417.appspot.com",
    messagingSenderId: "612004340738",
    appId: "1:612004340738:web:b5a87a5d23a99d72fb731b",
    measurementId: "G-TJRG2L7SQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };