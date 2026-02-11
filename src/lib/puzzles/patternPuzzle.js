import { BasePuzzle } from "./base";
import { generateHash } from "./dailySeed";

export class PatternPuzzle extends BasePuzzle {
  generate(seed) {
    const hash = generateHash(seed);

    // const start = (hash % 5) + 1;
    // const pattern = [start, start + 2, start + 4];

    // const solution = start + 6;

    // return {
    //   sequence: pattern,
    //   solution,
    // };
    const start = (hash % 5) + 1;
    const pattern = [start, start + 2, start + 4];
    const solution = start + 6;

    return {
      question: `${pattern.join(" ")} ?`,
      solution,
    };
  }

  validate(input, solution) {
    return Number(input) === solution ? "correct" : "incorrect";
  }
}
