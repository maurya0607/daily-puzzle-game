// import { BasePuzzle } from "./base";
// //import { generateHash } from "./dailySeed";

// const words = ["apple", "grape", "mango", "peach", "berry"];

// export class WordPuzzle extends BasePuzzle {
//   generate(seed) {
//     const hash = generateHash(seed);
//     const solution = words[hash % words.length];

//     return { solution };
//   }

//   validate(input, solution) {
//     return input.toLowerCase() === solution
//       ? "correct"
//       : "incorrect";
//   }
// }


import { BasePuzzle } from "./base";

const words = ["apple", "grape", "mango", "peach", "berry"];

export class WordPuzzle extends BasePuzzle {
  generate(seed) {
    const index = Number(seed) % words.length;
    const selectedWord = words[index];

    return {
      question: `Unscramble this word: ${selectedWord
        .split("")
        .sort(() => 0.5 - Math.random())
        .join("")}`,
      solution: selectedWord,
    };
  }
  validate(input, solution) {
    const userGuess = Number(input);

    if (userGuess === solution) {
      return "correct";
    }

    if (userGuess > solution) {
      return "high";
    }

    if (userGuess < solution) {
      return "low";
    }
  }
}
