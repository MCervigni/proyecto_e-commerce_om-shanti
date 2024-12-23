import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  appId: process.env.REACT_APP_FIREBASE_API_KEY,
  appKey: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  projectId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  storageBucket: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
