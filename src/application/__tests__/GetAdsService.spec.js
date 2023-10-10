import GetAdsService from "../GetAdsService";

describe("GetAdsService tests", () => {
  test("Given no params, execute method must to return an array", async () => {
    const service = GetAdsService({
      getAds() {
        return Promise.resolve([]);
      }
    });

    const res = await service.execute();

    expect(res).toEqual([]);
  });

  test("Given the repository is raisen errors, execute must return a reject", () => {
    const service = GetAdsService({
      getAds() {
        return Promise.reject(new Error("Error"));
      }
    });

    const res = service.execute();

    expect(res).rejects.toThrow("Error");
  });
});
