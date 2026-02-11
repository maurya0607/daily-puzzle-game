import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

 

const firebaseConfig = {
  apiKey: "AIzaSyA0iJGXf1lhhYCTDPpgJ0aCLJldRs117xI",
  authDomain: "puzzle-game-9dd52.firebaseapp.com",
  projectId: "puzzle-game-9dd52",
  storageBucket: "puzzle-game-9dd52.firebasestorage.app",
  messagingSenderId: "495279168286",
  appId: "1:495279168286:web:500c00cf0efd923ab5870f",
  measurementId: "G-V3E2XKXJYE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();





 