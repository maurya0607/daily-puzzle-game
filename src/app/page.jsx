"use client";

import { useState } from "react";
import Login from "../components/Login";
import PuzzleGame from "../components/PuzzleGame";

export default function Home() {
  const [user, setUser] = useState(null);
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white px-4 relative overflow-hidden">
      {/* <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      */}
     

      {/* Card Container */}
      <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-700 transition-all duration-500">
       


        {/* App Title */}
        <h1 className="text-3xl font-bold text-center mb-2 tracking-wide">
          🎮 Daily Puzzle Game
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400 text-sm mb-6">
          Solve today's challenge and test your brain 🧠
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6" />

        {/* Auth or Game */}
        {!user ? (
          <Login onLogin={setUser} />
        ) : (
          <PuzzleGame user={user} />
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2026 Puzzle Game • Built with Next.js & Tailwind
        </div>

      </div>

    </main>
  );
}

  