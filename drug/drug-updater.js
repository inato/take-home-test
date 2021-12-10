export class DrugUpdater {
  constructor(expiresIn, benefit) {
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  checkBenefit() {
    if (this.benefit < 0) {
      this.benefit = 0;
    } else if (this.benefit > 50) {
      this.benefit = 50;
    }
  }
}
