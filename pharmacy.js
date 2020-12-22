export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
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
      /*this.firstUpdateRules(drug)
      this.secondUpdateRules(drug)*/
    })

    return this.drugs
  }

  updateBenefit(drug) {
    if (drug.name === 'Herbal Tea' || drug.name === 'Fervex')
      this.increaseBenefit(drug)
    else this.decreaseBenefit(drug)
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

  doubleRateWhenExpired(drug) {
    return this.isExpired(drug) ? 2 : 1
  }

  increaseByFervexSpecificRules(fervex) {
    if (fervex.expiresIn > 10) return 1
    if (fervex.expiresIn <= 10 && fervex.expiresIn > 5) return 2
    if (this.isExpired(fervex)) return this.BENEFIT_MINIMUM
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
