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
});
