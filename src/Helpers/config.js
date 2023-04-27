// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from 'firebase/auth' 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEQlM2rqw29F3CTnQyMI5hGcgXdCZtZS8",
  authDomain: "baeminclone-7e64a.firebaseapp.com",
  projectId: "baeminclone-7e64a",
  storageBucket: "baeminclone-7e64a.appspot.com",
  messagingSenderId: "1086737450747",
  appId: "1:1086737450747:web:e4cf2df5e435272396525e",
  measurementId: "G-QPBNERTGN3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

// Initialize Cloud Storage and get a reference to the service
export const db = getFirestore(app);


