import { MagicPill } from ".";

describe("MagicPill drug", () => {
  it("should not make magic pill expire", () => {
    const expiresIn = 123;
    const benefit = 10;
    const magicPill = new MagicPill(expiresIn, benefit);

    magicPill.simulateOneDay();

    expect(magicPill.expiresIn).toEqual(expiresIn);
    expect(magicPill.benefit).toEqual(benefit);
  });

  it("should not decrease magic pill benefit", () => {
    const magicPill = new MagicPill(5, 10);
    magicPill.simulateOneDay();
    expect(magicPill.benefit).toEqual(10);
  });
});
