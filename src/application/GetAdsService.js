export default (AdsRepository) => ({
  async execute() {
    const ads = await AdsRepository.getAds();

    return ads.map((ad) => ({
      id: ad.id,
      title: ad.title,
      active: ad.isActive(),
      kind: ad.type
    }));
  }
});
