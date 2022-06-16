
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// for prod .env.local
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

// for test project

const firebaseConfig = {
  apiKey: 'AIzaSyDLa679jWLsbEftym7jnVjs2LcwwxrZCNI',
  authDomain: 'auth-manager-d6bba.firebaseapp.com',
  projectId: 'auth-manager-d6bba',
  storageBucket: 'uth-manager-d6bba.appspot.com',
  messagingSenderId: '185647031915',
  appId: '1:185647031915:web:22eeb223e7a5d0b7e3732e'
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }