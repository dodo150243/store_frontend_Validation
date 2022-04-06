// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ3jirCBpnB9Ksl3larOESvJB76yzy3Oc",
  authDomain: "react-upload-15000.firebaseapp.com",
  projectId: "react-upload-15000",
  storageBucket: "react-upload-15000.appspot.com",
  messagingSenderId: "728524368369",
  appId: "1:728524368369:web:f8fe0fe118c44c61e27c50",
  measurementId: "G-6HNGWGSRGD"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const storage = getStorage(firebase);
export{storage, firebase as default};