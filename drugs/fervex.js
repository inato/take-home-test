import Drug from "./drug";
import config from "../config/config";

export default class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(config.drugNames.FERVEX, expiresIn, benefit);
  }

  simulateOneDay() {
    this.decrementExpiresIn();

    if (this.hasExpired) {
      this.benefit = 0;
    } else {
      this.incrementBenefit();

      if (this.expiresIn < 10) {
        this.incrementBenefit();
      }

      if (this.expiresIn < 5) {
        this.incrementBenefit();
      }
    }
  }
}
