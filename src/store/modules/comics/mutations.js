import { typesComic as types } from './types';

export const mutations = {
  [types.mutations.SET_CURRENT_COMIC](state, payload) {
    state.currentComic = payload;
  },
};

export default {};
