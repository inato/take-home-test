import Drug from "./drug";
import config from "../config/config";

export default class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(config.drugs.HERBAL_TEA.name, expiresIn, benefit);
  }

  simulateOneDay() {
    this.decrementExpiresIn();
    this.incrementBenefit();

    if (this.hasExpired) {
      this.incrementBenefit();
    }
  }
}
