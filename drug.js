import { DefaultBenefitStrategy } from './strategies'

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
