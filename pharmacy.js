class DefaultBenefitStrategy {
  updateBenefit(drug) {
    this.decreaseBenefit(drug)
  }

  decreaseBenefit(drug) {
    if (drug.benefit > drug.BENEFIT_MINIMUM)
      drug.benefit -= drug.doubleRateWhenExpired(drug)
  }
}

class HerbalTeaStrategy {
  updateBenefit(drug) {
    this.increaseBenefit(drug)
  }

  increaseBenefit(drug) {
    if (drug.benefit < drug.BENEFIT_MAXIMUM)
      drug.benefit += drug.doubleRateWhenExpired()
  }
}

class FervexStrategy {
  updateBenefit(drug) {
    if (drug.isExpired()) this.dropBenefitValueToZero(drug)
    else drug.benefit += this.increaseBenefit(drug)
  }

  increaseBenefit(drug) {
    if (drug.expiresIn > 10) return 1
    if (drug.expiresIn <= 10 && drug.expiresIn > 5) return 2
    if (drug.expiresIn <= 5) return 3
    if (drug.isExpired()) return drug.BENEFIT_MINIMUM
  }

  dropBenefitValueToZero(drug) {
    drug.benefit = drug.BENEFIT_MINIMUM
  }
}

class DafalganStrategy {
  updateBenefit(drug) {
    this.decreaseBenefit(drug)
  }

  decreaseBenefit(drug) {
    if (drug.benefit > drug.BENEFIT_MINIMUM)
      drug.benefit -= 2 * drug.doubleRateWhenExpired(drug)
  }
}

export class Drug {
  BENEFIT_MAXIMUM = 50
  BENEFIT_MINIMUM = 0

  constructor(name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
    this.strategy = new DefaultBenefitStrategy()
  }

  setBenefitStrategy(strategy) {
    this.strategy = strategy
  }

  updateBenefit() {
    return this.strategy.updateBenefit(this)
  }

  updateExpiration() {
    this.expiresIn--
  }

  isExpired() {
    return this.expiresIn <= 0
  }

  doubleRateWhenExpired() {
    return this.isExpired() ? 2 : 1
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs
  }

  updatePharmacyBenefits() {
    this.drugs.forEach((drug) => {
      if (drug.name !== 'Magic Pill') {
        if (drug.name === 'Herbal Tea')
          drug.setBenefitStrategy(new HerbalTeaStrategy())
        if (drug.name === 'Fervex')
          drug.setBenefitStrategy(new FervexStrategy())
        if (drug.name === 'Dafalgan')
          drug.setBenefitStrategy(new DafalganStrategy())

        drug.updateBenefit()
        drug.updateExpiration()
      }
    })

    return this.drugs
  }
}
