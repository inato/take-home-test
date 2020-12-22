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

  it.each([['Herbal Tea'], ['Fervex']])(
    'should increase benefit for %s',
    (drugName) => {
      const increasingDrug = new Drug(drugName, 15, 8)
      const expectedIncreasingDrug = new Drug(drugName, 14, 9)

      const updatedBenefitValue = new Pharmacy([
        increasingDrug,
      ]).updateBenefitValue()

      expectUpdatedPharmacy(updatedBenefitValue, expectedIncreasingDrug)
    }
  )

  it('should increase benefit for "Herbal Tea" twice as fast when expired', () => {
    const herbalTea = new Drug('Herbal Tea', 0, 8)
    const expectedHerbalTea = new Drug('Herbal Tea', -1, 10)

    const updatedBenefitValue = new Pharmacy([herbalTea]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedHerbalTea)
  })

  it('should not give a benefit higher than 50', () => {
    const herbalTea = new Drug('Herbal Tea', 10, 50)
    const expectedHerbalTea = new Drug('Herbal Tea', 9, 50)

    const updatedBenefitValue = new Pharmacy([herbalTea]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedHerbalTea)
  })

  it('should never increase nor decrease values for "Magic Pill"', () => {
    const magicPill = new Drug('Magic Pill', 10, 42)
    const expectedMagicPill = new Drug('Magic Pill', 10, 42)

    const updatedBenefitValue = new Pharmacy([magicPill]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedMagicPill)
  })

  it('should increase Fervex benefit by two between 10 and 5 days prior to expiration', () => {
    const fervex = new Drug('Fervex', 10, 42)
    const expectedFervex = new Drug('Fervex', 9, 44)

    const updatedBenefitValue = new Pharmacy([fervex]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedFervex)
  })

  it('should increase Fervex benefit by three 5 days prior to expiration', () => {
    const fervex = new Drug('Fervex', 5, 42)
    const expectedFervex = new Drug('Fervex', 4, 45)

    const updatedBenefitValue = new Pharmacy([fervex]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedFervex)
  })

  it('should drop Fervex benefit to 0 after the expiration date', () => {
    const fervex = new Drug('Fervex', 0, 42)
    const expectedFervex = new Drug('Fervex', -1, 0)

    const updatedBenefitValue = new Pharmacy([fervex]).updateBenefitValue()

    expectUpdatedPharmacy(updatedBenefitValue, expectedFervex)
  })

  it.each([
    [22, 42, 21, 40],
    [0, 42, -1, 38],
  ])(
    'should degrades Dafalgan twice as fast as normal drugs',
    (initialExpiresIn, initialBenefit, expectedExpiresIn, expectedBenefit) => {
      const dafalgan = new Drug('Dafalgan', initialExpiresIn, initialBenefit)
      const expectedDafalgan = new Drug(
        'Dafalgan',
        expectedExpiresIn,
        expectedBenefit
      )

      const updatedBenefitValue = new Pharmacy([dafalgan]).updateBenefitValue()

      expectUpdatedPharmacy(updatedBenefitValue, expectedDafalgan)
    }
  )
})
