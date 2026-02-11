import { BasePuzzle } from "./base";
import { generateHash } from "./dailySeed";

export class MathPuzzle extends BasePuzzle {
   
  generate(seed) {
  const hash = generateHash(seed);

  const a = (hash % 50) + 1;
  const b = ((hash >> 3) % 50) + 1; // shift bits for variation

  return {
    question: `${a} + ${b} = ?`,
    solution: a + b,
  };
}


  validate(input, solution) {
    return Number(input) === solution ? "correct" : "incorrect";
  }
}
