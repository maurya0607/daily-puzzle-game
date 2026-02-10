"use client";

import { useState } from "react";

import { getAuth } from "firebase/auth";

export default function PuzzlePage() {
  const auth = getAuth();

  async function submitScore(score) {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.uid,
        email: user.email,
        name: user.displayName,
        provider: "google",
        puzzleType: "math",
        score: score,
      }),
    });

    alert("Score saved ✅");
  }

  return (
    <div>
      <h1>Math Puzzle</h1>

      {/* Example button */}
      <button onClick={() => submitScore(90)} className="px-4 py-2 bg-green-600 rounded">
        Submit Puzzle
      </button>
    </div>
  );
}
