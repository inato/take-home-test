import Drug from "./drug";
import config from "../config/config";

export default class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(config.drugs.MAGIC_PILL.name, expiresIn, benefit);
  }

  simulateOneDay() {
    //"Magic Pill" never expires nor decreases in Benefit.
  }
}
