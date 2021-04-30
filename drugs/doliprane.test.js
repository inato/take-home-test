import { Doliprane } from ".";

describe("Doliprane drug", () => {
  it("should have Doliprane as name", () => {
    const doliprane = new Doliprane(0, 0);

    expect(doliprane.name).toEqual("Doliprane");
  });
});
