const MAXIMUM_BENEFIT = 50;
const MINIMUM_BENEFIT = 0;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.benefitAging = -1;
    this.benefitAgingWhenExpired = this.benefitAging * 2;
    this.expirationDateAging = -1;
  }

  isExpired(){
    return this.expiresIn <= 0;
  }

  validateBenefit(){
    const benefit = (this.benefit < MINIMUM_BENEFIT) ? MINIMUM_BENEFIT : (this.benefit > MAXIMUM_BENEFIT) ? MAXIMUM_BENEFIT : this.benefit;
    return benefit;
  }

  updateBenefit(benefitEvolution){
    return this.benefit + benefitEvolution;
  }

  updateExpiresIn(){
    return this.expiresIn + this.expirationDateAging;
  }

  handleAging(){
    if(this.isExpired()){
      this.benefit = this.updateBenefit(this.benefitAgingWhenExpired)
    } else {
      this.benefit = this.updateBenefit(this.benefitAging)
    }
    this.benefit = this.validateBenefit();
    this.expiresIn = this.updateExpiresIn();
  }
}

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit){
    super("Herbal Tea", expiresIn, benefit);
    this.benefitAging = 1;
    this.benefitAgingWhenExpired = this.benefitAging * 2;
  }

  handleAging(){
    return super.handleAging();
  }
}

export class MagicPill extends Drug {
  constructor(expiresIn, benefit){
    super("Magic Pill", expiresIn, benefit);
    this.benefitAging = 0;
    this.benefitAgingWhenExpired = this.benefitAging * 2;
    this.expirationDateAging = 0;
  }

  handleAging(){
    return super.handleAging();
  }
}

export class Fervex extends Drug {
  constructor(expiresIn, benefit){
    super("Fervex", expiresIn, benefit);
    this.benefitAging = 1;
    this.benefitAgingWhenExpired = 0;
  }

  evaluateBenefitEvolution(){
    const benefitAging = (this.expiresIn <= 5) ? 3 : (this.expiresIn <= 10) ? 2 : this.benefitAging;
    return benefitAging
  }

  handleAging(){
    this.benefitAging = this.evaluateBenefitEvolution();
    return super.handleAging();
  }
}

export class Dafalgan extends Drug {
  constructor(expiresIn, benefit){
    super("Dafalgan", expiresIn, benefit);
    this.benefitAging = this.benefitAging * 2;
    this.benefitAgingWhenExpired = this.benefitAging * 2;
  }

  handleAging(){
    return super.handleAging();
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}

// export class 