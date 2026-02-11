import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA0iJGXf1lhhYCTDPpgJ0aCLJldRs117xI",
//   authDomain: "puzzle-game-9dd52.firebaseapp.com",
//   projectId: "puzzle-game-9dd52",
//   storageBucket: "puzzle-game-9dd52.firebasestorage.app",
//   messagingSenderId: "495279168286",
//   appId: "1:495279168286:web:4a420458d3e54dacb5870f",
//   measurementId: "G-6V9NM8YWE4"
// };

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





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA0iJGXf1lhhYCTDPpgJ0aCLJldRs117xI",
//   authDomain: "puzzle-game-9dd52.firebaseapp.com",
//   projectId: "puzzle-game-9dd52",
//   storageBucket: "puzzle-game-9dd52.firebasestorage.app",
//   messagingSenderId: "495279168286",
//   appId: "1:495279168286:web:4a420458d3e54dacb5870f",
//   measurementId: "G-6V9NM8YWE4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);