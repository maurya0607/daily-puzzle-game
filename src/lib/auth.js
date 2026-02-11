// import { getAuth } from "firebase-admin/auth";

// export async function verifyUser(token) {
//   const decoded = await getAuth().verifyIdToken(token);
//   return decoded;
// }


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  appId: "...",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
