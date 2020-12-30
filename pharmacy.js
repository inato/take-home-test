export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
  }

  isExpired() {
    return this.expiresIn <= 0
  }
}

export class Pharmacy {
  BENEFIT_MAXIMUM = 50
  BENEFIT_MINIMUM = 0

  constructor(drugs = []) {
    this.drugs = drugs
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.name !== 'Magic Pill') {
        this.updateBenefit(drug)
        this.updateExpiration(drug)
      }
    })

    return this.drugs
  }

  updateBenefit(drug) {
    if (drug.name === 'Herbal Tea' || drug.name === 'Fervex')
      this.increaseBenefit(drug)
    else this.decreaseBenefit(drug)

    if (drug.name === 'Fervex' && drug.isExpired())
      this.dropBenefitValueToZero(drug)
  }

  decreaseBenefit(drug) {
    if (drug.benefit > this.BENEFIT_MINIMUM)
      drug.benefit -= this.doubleRateWhenExpired(drug)
  }

  increaseBenefit(drug) {
    if (drug.benefit < this.BENEFIT_MAXIMUM) {
      drug.name === 'Fervex'
        ? (drug.benefit += this.increaseByFervexSpecificRules(drug))
        : (drug.benefit += this.doubleRateWhenExpired(drug))
    }
  }

  dropBenefitValueToZero(drug) {
    drug.benefit = this.BENEFIT_MINIMUM
  }

  doubleRateWhenExpired(drug) {
    let coefficient = 1

    if (drug.name === 'Dafalgan') coefficient = 2

    return drug.isExpired() ? coefficient * 2 : coefficient
  }

  increaseByFervexSpecificRules(fervex) {
    if (fervex.expiresIn > 10) return 1
    if (fervex.expiresIn <= 10 && fervex.expiresIn > 5) return 2
    if (fervex.expiresIn <= 5) return 3
    if (fervex.isExpired()) return this.BENEFIT_MINIMUM
  }

  updateExpiration(drug) {
    if (drug.name !== 'Magic Pill') drug.expiresIn--
  }
}
