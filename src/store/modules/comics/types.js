export const MODULE_COMIC = '@module/comic';

export const typesComic = {
  PATH: `${MODULE_COMIC}`,
  mutations: {
    SET_COMIC_DATA: '@mutations/setComicData',
    SET_CURRENT_COMIC_NUMBER: '@mutations/setCurrentComicNumber',
    SET_FAVORITE_COMIC: '@mutations/setFavoriteComic',
  },
  actions: {
    GET_CURRENT_COMIC: '@actions/getCurrentComic',
    GET_RANDOM_COMIC: '@actions/getRandomComic',
    ADD_COMIC_RATING: '@actions/addComicRating',
    ADD_FAVORITE_COMIC: '@actions/addFavoriteComic',
  },
};

export default {};
