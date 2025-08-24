import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARrFmTXl3QjVlptBuZK-FuINPQ5bE6W_E",
  authDomain: "team-geesh.firebaseapp.com",
  projectId: "team-geesh",
  storageBucket: "team-geesh.firebasestorage.app",
  messagingSenderId: "789416464329",
  appId: "1:789416464329:web:43a2e27c60ec037864e218",
  measurementId: "G-W9M3DW35GF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);