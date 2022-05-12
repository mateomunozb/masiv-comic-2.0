export const MODULE_COMIC = '@module/comic';

export const typesComic = {
  PATH: `${MODULE_COMIC}`,
  mutations: {
    SET_CURRENT_COMIC: '@mutations/setCurrentComic',
  },
  actions: {
    GET_CURRENT_COMIC: '@actions/getCurrentComic',
  },
};

export default {};
