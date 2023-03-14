// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCROdhralpvCroULiOcnmI61ypEHqYFOW4",
  authDomain: "realtor-clone-react-3a356.firebaseapp.com",
  projectId: "realtor-clone-react-3a356",
  storageBucket: "realtor-clone-react-3a356.appspot.com",
  messagingSenderId: "944350714082",
  appId: "1:944350714082:web:9430f7565c785895f026bb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();