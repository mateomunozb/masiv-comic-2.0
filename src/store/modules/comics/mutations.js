import { typesComic as types } from './types';

export const mutations = {
  [types.mutations.SET_COMIC_DATA](state, payload) {
    state.comicData = payload;
  },
  [types.mutations.SET_CURRENT_COMIC_NUMBER](state, payload) {
    state.currentComicNumber = payload;
  },
  [types.mutations.SET_FAVORITE_COMIC](state, payload) {
    state.favoritesComics = payload;
  },
  [types.mutations.SET_IS_LOADING_VIEW](state, payload) {
    state.isLoadingView = payload;
  },
};

export default {};
