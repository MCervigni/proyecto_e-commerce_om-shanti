import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrtKf9fcSZjNCr2GhaYzznZkF2akwdz9o",
  authDomain: "e-commerce-om-shanti.firebaseapp.com",
  projectId: "e-commerce-om-shanti",
  storageBucket: "e-commerce-om-shanti.firebasestorage.app",
  messagingSenderId: "584633964049",
  appId: "1:584633964049:web:85eef5b7f0c8e3ecaf83b0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
