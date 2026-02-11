"use client";

 

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login({ onLogin }) {
  async function handleLogin() {
    const result = await signInWithPopup(auth, provider);
    onLogin(result.user);
  }

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Subtitle */}
      <p className="text-gray-400 text-sm">
        Sign in to play today's puzzle
      </p>

      {/* Google Login Button */}
      <button
        onClick={handleLogin}
        className="flex items-center justify-center gap-3 px-6 py-3 w-full
                   bg-white text-gray-800 font-medium rounded-xl
                   shadow-lg hover:shadow-xl
                   hover:scale-105 transition-all duration-300
                   active:scale-95"
      >
        {/* Google Icon */}
        <svg
          className="w-5 h-5"
          viewBox="0 0 48 48"
        >
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.6l6.85-6.85C35.8 2.5 30.32 0 24 0 14.82 0 6.73 5.64 3.05 13.71l7.98 6.2C12.9 13.38 17.99 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9h12.7c-.55 2.96-2.23 5.47-4.76 7.15l7.29 5.67C43.98 37.5 46.5 31.53 46.5 24.5z" />
          <path fill="#FBBC05" d="M10.98 28.91A14.52 14.52 0 019.5 24c0-1.71.29-3.36.81-4.91l-7.98-6.2A23.96 23.96 0 000 24c0 3.88.93 7.55 2.57 10.79l8.41-5.88z" />
          <path fill="#34A853" d="M24 48c6.32 0 11.63-2.09 15.5-5.69l-7.29-5.67c-2.02 1.36-4.6 2.16-8.21 2.16-6.01 0-11.1-3.88-12.97-9.41l-8.41 5.88C6.73 42.36 14.82 48 24 48z" />
        </svg>

        Login with Google
      </button>

      {/* Small footer text */}
      <p className="text-xs text-gray-500">
        Secure authentication powered by Firebase
      </p>

    </div>
  );
}
