export class DefaultBenefitStrategy {
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

export class HerbalTeaStrategy {
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

export class FervexStrategy {
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

export class DafalganStrategy {
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

export class MagicPillStrategy {
  updateBenefit() {
    // do nothing
  }

  updateExpiration() {
    // do nothing
  }
}
