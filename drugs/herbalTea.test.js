import { HerbalTea } from ".";

describe("HerbalTea drug", () => {
  it("should increase herbal tea benefit twice as fast after the expiration date", () => {
    const expiresIn = 5;
    const herbalTea = new HerbalTea(expiresIn, 0);

    for (let i = expiresIn; i > -5; i--) {
      herbalTea.simulateOneDay();
    }

    expect(herbalTea.benefit).toEqual(15);
    expect(herbalTea.expiresIn).toEqual(-5);
  });
});
