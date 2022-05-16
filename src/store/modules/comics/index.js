import { actions } from './actions';
import { mutations } from './mutations';
import { MODULE_COMIC } from './types';

export const module = {
  namespaced: true,
  state: {
    comicData: {},
    currentComicNumber: null,
    favoritesComics: {},
  },
  actions,
  mutations,
};

export const name = MODULE_COMIC;
