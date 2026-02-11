 

export function validatePuzzle(type, input, solution) {
  switch (type) {
    case "numberGuess":
      return Number(input) === solution
        ? "correct"
        : input > solution
        ? "Too High"
        : "Too Low";

    case "math":
      return Number(input) === solution ? "correct" : "incorrect";

    case "word":
      return input.toLowerCase() === solution.toLowerCase()
        ? "correct"
        : "incorrect";

    case "pattern":
      return Number(input) === solution ? "correct" : "incorrect";

    case "memory":
      return input === solution ? "correct" : "incorrect";

    default:
      throw new Error("Invalid puzzle type");
  }
}
