import Drug from "./drug";
import config from "../config/config";

export default class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(config.drugNames.MAGIC_PILL, expiresIn, benefit);
  }

  simulateOneDay() {
    //"Magic Pill" never expires nor decreases in Benefit.
  }
}
