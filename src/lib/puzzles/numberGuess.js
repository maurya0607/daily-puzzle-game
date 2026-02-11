import { BasePuzzle } from "./base";

export class NumberGuessPuzzle extends BasePuzzle {
  generate(seed) {

    const hash = String(seed)
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const solution = (hash % 100) + 1;

    return {
      question: "Guess a number between 1 - 100",
      solution,
    };
  }

  validate(input, solution) {
    if (input === solution) return "correct";
    if (input > solution) return "too high";
    return "too low";
  }
}
