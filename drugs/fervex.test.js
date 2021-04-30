import { Fervex } from ".";

describe("Fervex drug", () => {
  it("should have Fervex as name", () => {
    const fervex = new Fervex(0, 0);

    expect(fervex.name).toEqual("Fervex");
  });

  it("should increase fervex benefit by 2 when there are 10 days or less remaining", () => {
    const expiresIn = 10;
    const fervex = new Fervex(expiresIn, 0);

    for (let i = expiresIn; i > 5; i--) {
      fervex.simulateOneDay();
    }

    expect(fervex.benefit).toEqual(10);
  });

  it("should increase fervex benefit by 3 when there are 5 days or less remaining", () => {
    const expiresIn = 5;
    const fervex = new Fervex(expiresIn, 0);

    for (let i = expiresIn; i > 0; i--) {
      fervex.simulateOneDay();
    }

    expect(fervex.benefit).toEqual(15);
  });

  it("should set fervex benefit to 0 when it expires", () => {
    const fervex = new Fervex(0, 50);
    fervex.simulateOneDay();

    expect(fervex.benefit).toEqual(0);
  });
});
