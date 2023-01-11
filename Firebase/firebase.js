// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseApiKey } from "../secrets/firebaseapikey";
import{getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "mymoni-1bcde.firebaseapp.com",
  projectId: "mymoni-1bcde",
  storageBucket: "mymoni-1bcde.appspot.com",
  messagingSenderId: "865323747241",
  appId: "1:865323747241:web:33bf6d285608f3f05ce6b8"
};
// a persons record becomes doc{fields and values
//doc is made of collections of files
//setDoc is used to set ur own doc id
//addDoc is used to give an auto generated id


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authentication = getAuth(app);
export {db, authentication}
