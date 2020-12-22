export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      this.updateBenefit(drug)
      this.updateExpiration(drug)
      /*this.firstUpdateRules(drug)
      this.secondUpdateRules(drug)*/
    })

    return this.drugs
  }

  updateBenefit(drug) {
    if (drug.name === 'Herbal Tea') this.increaseBenefit(drug)
    else this.decreaseBenefit(drug)
  }

  decreaseBenefit(drug) {
    if (drug.benefit > 0) drug.benefit -= this.doubleRateWhenExpired(drug)
  }

  doubleRateWhenExpired(drug) {
    return this.isExpired(drug) ? 2 : 1
  }

  increaseBenefit(drug) {
    drug.benefit += this.doubleRateWhenExpired(drug)
  }

  isExpired(drug) {
    return drug.expiresIn <= 0
  }

  updateExpiration(drug) {
    if (drug.name !== 'Magic Pill') drug.expiresIn--
  }

  secondUpdateRules(drug) {
    if (
      this.isExpired(drug) &&
      drug.name !== 'Herbal Tea' &&
      drug.name !== 'Fervex' &&
      drug.benefit > 0
    ) {
      drug.name !== 'Magic Pill' ? drug.benefit-- : (drug.benefit = 0)
    } else {
      if (drug.benefit < 50) drug.benefit++
    }
  }

  firstUpdateRules(drug) {
    if (
      drug.name !== 'Herbal Tea' &&
      drug.name !== 'Fervex' &&
      drug.benefit > 0 &&
      drug.name !== 'Magic Pill'
    )
      drug.benefit--
    else {
      if (drug.benefit < 50) {
        drug.benefit++
        if (drug.name === 'Fervex' && drug.expiresIn < 11 && drug.benefit < 50)
          drug.benefit++

        if (drug.expiresIn < 6 && drug.benefit < 50) drug.benefit++
      }
    }
  }
}
