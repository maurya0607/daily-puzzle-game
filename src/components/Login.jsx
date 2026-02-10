 

"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login({ onLogin }) {
  async function handleLogin() {
    const result = await signInWithPopup(auth, provider);
    onLogin(result.user); // 🔑 user upar bhej rahe
  }

  return (
    <button
      onClick={handleLogin}
      className="px-6 py-2 bg-blue-600 rounded"
    >
      Login with Google
    </button>
  );
}
