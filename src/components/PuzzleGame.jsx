"use client";

import { useEffect, useState } from "react";
import { getTodayPuzzle } from "@/lib/puzzles/puzzleSelector";
import { validatePuzzle } from "@/lib/validator";

export default function PuzzleGame({ user, onLogout }) {
  const [solution, setSolution] = useState(null);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [puzzleType, setPuzzleType] = useState("");
  const [question, setQuestion] = useState("");

  function loadPuzzle() {
    const { type, puzzle, seed } = getTodayPuzzle();
    const data = puzzle.generate(seed + Date.now()); // refresh pe change

    setPuzzleType(type);
    setQuestion(data.question);
    setSolution(data.solution);

    // reset state
    setGuess("");
    setResult("");
    setAttempts(0);
    setGameOver(false);
  }


  useEffect(() => {
    const { type, puzzle, seed } = getTodayPuzzle();

    const dynamicSeed = seed + Date.now(); // 🔥 force change

    const data = puzzle.generate(dynamicSeed);

    setPuzzleType(type);

    if (data.question) {
      setQuestion(data.question);
    } else if (data.sequence) {
        setQuestion(`Remember this sequence: ${data.sequence.join(" ")}`);
      }

    setSolution(data.solution);
  }, []);


  function handleSubmit() {
    if (!guess || gameOver) return;

    const validation = validatePuzzle(
      puzzleType,
      guess,
      solution
    );

    setResult(validation);
    setAttempts((prev) => prev + 1);

    if (validation === "correct") {
      setGameOver(true);
    }

    setGuess("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-black to-[#0f172a] text-white px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 text-center">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">
            🎮 Daily Puzzle
          </h1>

          <button
            onClick={onLogout}
            className="text-sm text-red-400 hover:text-red-500 transition"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          {new Date().toDateString()}
        </p>

        {/* Puzzle */}
        <div className="mb-6">
          <p className="text-green-400 font-semibold text-lg">
            🔥 Today's Puzzle: {puzzleType}
          </p>

          {question && (
            <p className="text-2xl font-bold mt-3 tracking-widest">
              {question}
            </p>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-3 justify-center mb-4">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={gameOver}
            placeholder="Enter your answer..."
            className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <button
            onClick={handleSubmit}
            disabled={gameOver}
            className="px-5 py-2 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-lg font-semibold shadow-md"
          >
            Submit
          </button>
        </div>

        {/* Refresh Button */}
        <button
          onClick={loadPuzzle}
          className="mb-4 text-sm text-blue-400 hover:text-blue-500 transition"
        >
          🔄 Refresh Puzzle
        </button>

        <p className="text-gray-400 mb-2">
          Attempts: {attempts}
        </p>

        {result && (
          <p
            className={`text-lg font-semibold ${
              result === "correct"
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {result}
          </p>
        )}

        {gameOver && (
          <div className="mt-4 p-3 bg-green-500/10 border border-green-400/30 rounded-lg animate-pulse">
            🎉 <span className="text-green-400 font-bold">
              You solved today’s puzzle!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}


