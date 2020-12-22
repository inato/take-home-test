import { Drug, Pharmacy } from './pharmacy'

describe('Pharmacy', () => {
  function expectUpdatedPharmacy(updatedBenefitValue, expectedTestDrug) {
    expect(updatedBenefitValue).toEqual([expectedTestDrug])
  }

  it('should decrease the benefit and expiresIn', () => {
    const testDrug = new Drug('test', 2, 3)
    const expectedTestDrug = new Drug('test', 1, 2)

    const updatedBenefitValue = new Pharmacy([testDrug]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedTestDrug)
  })

  it('should decrease the benefit twice as fast when expired', () => {
    const testDrug = new Drug('test', 0, 6)
    const expectedTestDrug = new Drug('test', -1, 4)

    const updatedBenefitValue = new Pharmacy([testDrug]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedTestDrug)
  })

  it('should not give negative benefit', () => {
    const testDrug = new Drug('test', 5, 0)
    const expectedTestDrug = new Drug('test', 4, 0)

    const updatedBenefitValue = new Pharmacy([testDrug]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedTestDrug)
  })

  it('should increase benefit for "Herbal Tea"', () => {
    const herbalTea = new Drug('Herbal Tea', 5, 8)
    const expectedHerbalTea = new Drug('Herbal Tea', 4, 9)

    const updatedBenefitValue = new Pharmacy([herbalTea]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedHerbalTea)
  })

  it('should increase benefit for "Herbal Tea" twice as fast when expired', () => {
    const herbalTea = new Drug('Herbal Tea', 0, 8)
    const expectedHerbalTea = new Drug('Herbal Tea', -1, 10)

    const updatedBenefitValue = new Pharmacy([herbalTea]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedHerbalTea)
  })
})
