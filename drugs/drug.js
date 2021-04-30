import config from "../config/config";

export default class Drug {
  constructor(name, expiresIn, benefit) {
    const isValidBenefit =
      config.MIN_BENEFIT <= benefit && benefit <= config.MAX_BENEFIT;

    if (!isValidBenefit) {
      throw new Error(
        `a drug benefit value can only be between ${config.MIN_BENEFIT} and ${config.MAX_BENEFIT}`
      );
    }

    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  get hasExpired() {
    return this.expiresIn < 0;
  }

  incrementBenefit(nbToIncrement = 1) {
    const canIncrement = this.benefit + nbToIncrement < config.MAX_BENEFIT;

    if (canIncrement) {
      this.benefit = this.benefit + nbToIncrement;
    } else {
      this.benefit = config.MAX_BENEFIT;
    }
  }

  decrementBenefit(nbToDecrement = 1) {
    const canDecrement = this.benefit - nbToDecrement > config.MIN_BENEFIT;

    if (canDecrement) {
      this.benefit = this.benefit - nbToDecrement;
    } else {
      this.benefit = config.MIN_BENEFIT;
    }
  }

  decrementExpiresIn() {
    this.expiresIn--;
  }

  simulateOneDay() {
    this.decrementExpiresIn();
    this.decrementBenefit();

    if (this.hasExpired) {
      this.decrementBenefit();
    }
  }
}
