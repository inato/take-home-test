import { Drug } from "./drug";

describe("Drug", () => {
  it("At the end of each day our system lowers both values for every drug", () => {
    // Arrange
    const testDrug = new Drug("test", 2, 3);
    // Act
    testDrug.updateBenefitValue();
    // Assert
    expect(testDrug.benefit).toBe(2);
    expect(testDrug.expiresIn).toBe(1);
  });

  it("The Benefit of an item is never negative", () => {
    // Arrange
    const testDrug = new Drug("test", 2, 0);
    // Act
    testDrug.updateBenefitValue();
    // Assert
    expect(testDrug.benefit).toBe(0);
  });

  it("Once the expiration date has passed, Benefit degrades twice as fast.", () => {
    // Arrange
    const testDrug = new Drug("test", 0, 4);
    // Act
    testDrug.updateBenefitValue();
    // Assert
    expect(testDrug.benefit).toBe(2);
  });

  describe('"Herbal Tea"', () => {
    it(`"Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.`, () => {
      // Arrange
      const testDrug = new Drug("Herbal Tea", 0, 4);
      // Act
      testDrug.updateBenefitValue();
      // Assert
      expect(testDrug.benefit).toBe(6);
    });

    it(`The Benefit of an item is never negative`, () => {
      // Arrange
      const testDrug = new Drug("Herbal Tea", 0, 50);
      // Act
      testDrug.updateBenefitValue();
      // Assert
      expect(testDrug.benefit).toBe(50);
    });
  });

  describe('"Magic Pill"', () => {
    it(`"Magic Pill" never expires nor decreases in Benefit.`, () => {
      // Arrange
      const testDrug = new Drug("Magic Pill", 5, 5);
      // Act
      testDrug.updateBenefitValue();
      // Assert
      expect(testDrug.benefit).toBe(5);
      expect(testDrug.expiresIn).toBe(5);
    });
  });

  describe("Fervex", () => {
    it(`Benefit increases by 2 when there are 10 days or less`, () => {
      // Arrange
      const testDrug = new Drug("Fervex", 9, 5);
      // Act
      testDrug.updateBenefitValue();
      // Assert
      expect(testDrug.benefit).toBe(7);
    });

    it(`Benefit increases by 3 when there are 5 days or less`, () => {
      // Arrange
      const testDrug = new Drug("Fervex", 5, 5);
      // Act
      testDrug.updateBenefitValue();
      // Assert
      expect(testDrug.benefit).toBe(8);
    });

    it(`Benefit drops to 0 after the expiration date.`, () => {
      // Arrange
      const testDrug = new Drug("Fervex", 0, 5);
      // Act
      testDrug.updateBenefitValue();
      // Assert
      expect(testDrug.benefit).toBe(0);
    });
  });

  describe("Dafalgan", () => {
    it(`"Dafalgan" degrades in Benefit twice as fast as normal drugs.`, () => {
      // Arrange
      const testDrug = new Drug("Dafalgan", 0, 5);
      // Act
      testDrug.updateBenefitValue();
      // Assert
      expect(testDrug.benefit).toBe(1);
    });
  });
});
