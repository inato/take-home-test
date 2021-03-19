class DefaultBenefitStrategy {
  updateBenefit(drug) {
    this.decreaseBenefit(drug)
  }

  decreaseBenefit(drug) {
    if (drug.benefit > drug.BENEFIT_MINIMUM)
      drug.benefit -= drug.doubleRateWhenExpired()
  }

  updateExpiration(drug) {
    drug.expiresIn--
  }
}

class HerbalTeaStrategy {
  updateBenefit(drug) {
    drug.benefit += this.increaseBenefit(drug)
  }

  increaseBenefit(drug) {
    if (drug.benefit < drug.BENEFIT_MAXIMUM) return drug.doubleRateWhenExpired()
    return 0
  }

  updateExpiration(drug) {
    drug.expiresIn--
  }
}

class FervexStrategy {
  updateBenefit(drug) {
    if (drug.isExpired()) this.dropBenefitValueToMinimum(drug)
    else drug.benefit += this.increaseBenefit(drug)
  }

  increaseBenefit(drug) {
    if (drug.expiresIn <= 5) return 3
    if (drug.expiresIn <= 10 && drug.expiresIn > 5) return 2
    return 1
  }

  dropBenefitValueToMinimum(drug) {
    drug.benefit = drug.BENEFIT_MINIMUM
  }

  updateExpiration(drug) {
    drug.expiresIn--
  }
}

class DafalganStrategy {
  updateBenefit(drug) {
    drug.benefit -= this.decreaseBenefit(drug)
  }

  decreaseBenefit(drug) {
    const DAFALGAN_COEFFICIENT = 2
    if (drug.benefit > drug.BENEFIT_MINIMUM)
      return DAFALGAN_COEFFICIENT * drug.doubleRateWhenExpired()
  }

  updateExpiration(drug) {
    drug.expiresIn--
  }
}

class MagicPillStrategy {
  updateBenefit() {
    // do nothing
  }

  updateExpiration() {
    // do nothing
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
    return this.strategy.updateExpiration(this)
  }

  isExpired() {
    return this.expiresIn <= 0
  }

  doubleRateWhenExpired() {
    return this.isExpired() ? 2 : 1
  }
}

export class Pharmacy {
  drugStrategies = {
    'Herbal Tea': new HerbalTeaStrategy(),
    'Magic Pill': new MagicPillStrategy(),
    Fervex: new FervexStrategy(),
    Dafalgan: new DafalganStrategy(),
  }
  specialsDrugs = Object.keys(this.drugStrategies)

  constructor(drugs = []) {
    this.drugs = drugs
  }

  updatePharmacyBenefits() {
    this.drugs.forEach((drug) => this.updateDrug(drug))
    return this.drugs
  }

  updateDrug(drug) {
    if (this.specialsDrugs.includes(drug.name))
      drug.setBenefitStrategy(this.drugStrategies[drug.name])
    drug.updateBenefit()
    drug.updateExpiration()
  }
}
