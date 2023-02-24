import selectors from "../selectors";

describe("Selectors tests", () => {
  test("given no props getActiveAds selector should not fail", () => {
    expect(selectors.getActiveAds).not.toThrow();
  });

  test("given state selector should return only active ads", () => {
    expect(
      selectors.getActiveAds({
        ads: [
          {
            id: 1,
            active: false
          },
          {
            id: 2,
            active: true
          }
        ]
      })
    ).toStrictEqual([
      {
        id: 2,
        active: true
      }
    ]);
  });
});
