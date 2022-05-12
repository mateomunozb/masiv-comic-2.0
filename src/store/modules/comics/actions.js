import ComicApi from '@/api/comicApi';
import { typesComic as types } from './types';

const comicApi = new ComicApi();

export const actions = {
  [types.actions.GET_CURRENT_COMIC]({ commit }) {
    comicApi.getCurrentComic().then((response) => {
      commit(types.mutations.SET_CURRENT_COMIC, response.data);
    }).catch((error) => {
      console.error(`Error: ${error}`);
    });
  },
};

export default {};
