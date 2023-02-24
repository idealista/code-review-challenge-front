import GetAdsService from "../GetAdsService";

const repository = {
  getAds() {
    return Promise.resolve([]);
  }
};

describe("GetAdsService tests", () => {
  test("Given no params, execute method must to return an array", async () => {
    const service = GetAdsService(repository);

    const res = await service.execute();

    expect(res).toEqual([]);
  });

  test("Given the repository is raisen errors, execute must return a reject", () => {
    const service = GetAdsService({
      getAds() {
        return Promise.reject();
      }
    });

    expect(service.execute()).rejects.toThrow();
  });
});
