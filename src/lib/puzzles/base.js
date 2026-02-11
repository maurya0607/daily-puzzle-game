export class BasePuzzle {
  generate(seed) {
    throw new Error("generate() must be implemented");
  }

  validate(input, solution) {
    throw new Error("validate() must be implemented");
  }
}
