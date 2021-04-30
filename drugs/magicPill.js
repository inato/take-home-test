import Drug from "./drug";

export default class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }

  simulateOneDay() {
    //"Magic Pill" never expires nor decreases in Benefit.
  }
}
