import { BasePuzzle } from "./base";
import { generateHash } from "./dailySeed";

export class MemoryPuzzle extends BasePuzzle {
  generate(seed) {
    const hash = generateHash(seed);

    const sequence = [
      (hash % 9) + 1,
      ((hash + 3) % 9) + 1,
      ((hash + 7) % 9) + 1,
    ];

   return {
      question: `Remember this sequence: ${sequence.join(" ")}`,
      solution: sequence.join(""),
    };
  }

  validate(input, solution) {
    return input === solution ? "correct" : "incorrect";
  }
}
