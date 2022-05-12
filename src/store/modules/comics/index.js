import { actions } from './actions';
import { mutations } from './mutations';
import { MODULE_COMIC } from './types';

export const module = {
  namespaced: true,
  state: {
    currentComic: {},
  },
  actions,
  mutations,
};

export const name = MODULE_COMIC;
