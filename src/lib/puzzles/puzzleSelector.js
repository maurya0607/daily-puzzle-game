// import { getDailySeed } from "./dailySeed";
// import { NumberGuessPuzzle } from "./numberGuess";
// import { MathPuzzle } from "./mathPuzzle";
// import { WordPuzzle } from "./wordPuzzle";
// import { PatternPuzzle } from "./patternPuzzle";
// import { MemoryPuzzle } from "./memoryPuzzle";

// export function getTodayPuzzle() {
//   const seed = getDailySeed();

//   const puzzles = [
//     { type: "numberGuess", instance: new NumberGuessPuzzle() },
//     { type: "math", instance: new MathPuzzle() },
//     { type: "word", instance: new WordPuzzle() },
//     { type: "pattern", instance: new PatternPuzzle() },
//     { type: "memory", instance: new MemoryPuzzle() },
//   ];

//   const index = seed % puzzles.length;

//   return {
//     type: puzzles[index].type,
//     puzzle: puzzles[index].instance,
//     seed,
//   };
// }


import { NumberGuessPuzzle } from "./numberGuess";
import { MathPuzzle } from "./mathPuzzle";
import { WordPuzzle } from "./wordPuzzle";
import { PatternPuzzle } from "./patternPuzzle";
import { MemoryPuzzle } from "./memoryPuzzle";

export function getTodayPuzzle() {
  // 🔥 Random seed every time
  const seed = Math.floor(Math.random() * 1000000);

  const puzzles = [
    { type: "numberGuess", instance: new NumberGuessPuzzle() },
    { type: "math", instance: new MathPuzzle() },
    { type: "word", instance: new WordPuzzle() },
    { type: "pattern", instance: new PatternPuzzle() },
    { type: "memory", instance: new MemoryPuzzle() },
  ];

  const index = seed % puzzles.length;

  return {
    type: puzzles[index].type,
    puzzle: puzzles[index].instance,
    seed,
  };
}
