import Drug from "./drug";
import config from "../config/config";

export default class Fervex extends Drug {
  _computeBenefitIncrement() {
    if (this.expiresIn < 5) {
      return 3;
    } else if (this.expiresIn < 10) {
      return 2;
    }

    return 1;
  }

  constructor(expiresIn, benefit) {
    super(config.drugNames.FERVEX, expiresIn, benefit);
  }

  simulateOneDay() {
    this.decrementExpiresIn();

    if (this.hasExpired) {
      this.benefit = 0;
    } else {
      const increment = this._computeBenefitIncrement();

      this.incrementBenefit(increment);
    }
  }
}
