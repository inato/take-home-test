import Drug from "./drug";

class FooDrug extends Drug {
  constructor(expiresIn, benefit) {
    super("FooDrug", expiresIn, benefit);
  }
}

describe("Generic drug without specific rules", () => {
  it("should decrease the benefit and expiresIn at the end of each day", () => {
    const fooDrug = new FooDrug(2, 3);
    fooDrug.simulateOneDay();

    expect(fooDrug.expiresIn).toEqual(1);
    expect(fooDrug.benefit).toEqual(2);
  });

  it("should not be possible to create a drug with less than 0 or more than 50 benefit", () => {
    try {
      new FooDrug(10, -1);
    } catch (error) {
      expect(error.message).toEqual(
        "a drug benefit value can only be between 0 and 50"
      );
    }

    try {
      new FooDrug(10, 51);
    } catch (error) {
      expect(error.message).toEqual(
        "a drug benefit value can only be between 0 and 50"
      );
    }
  });

  it("should degrade benefit twice as fast once the expiration date has passed", () => {
    const expiresIn = 5;
    const fooDrug = new FooDrug(expiresIn, 50);

    for (let i = expiresIn; i > 0; i--) {
      fooDrug.simulateOneDay();
    }

    expect(fooDrug.benefit).toEqual(45);
    expect(fooDrug.expiresIn).toEqual(0);

    for (let i = 0; i < 5; i++) {
      fooDrug.simulateOneDay();
    }

    expect(fooDrug.benefit).toEqual(35);
    expect(fooDrug.expiresIn).toEqual(-5);
  });

  it("should not decrease a drug benefit below 0", () => {
    const expiresIn = 5;
    const fooDrug = new FooDrug(expiresIn, 0);

    for (let i = expiresIn; i > -5; i--) {
      fooDrug.simulateOneDay();
    }

    expect(fooDrug.benefit).toEqual(0);
    expect(fooDrug.expiresIn).toEqual(-5);
  });

  it("should not increase a drug benefit above 50", () => {
    const fooDrug = new FooDrug(5, 50);
    fooDrug.incrementBenefit();

    expect(fooDrug.benefit).toEqual(50);
  });
});
