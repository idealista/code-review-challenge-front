export default (ImagesRepo) => () => {
  return ImagesRepo.getImages(window.config.locale);
};
