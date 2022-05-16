import ComicApi from '@/api/comicApi';
import { typesComic as types } from './types';

const comicApi = new ComicApi();

const randomNumber = (number) => Math.round(Math.random() * (number - 1) + 1);

export const actions = {
  [types.actions.GET_CURRENT_COMIC]({ commit }) {
    return comicApi.getCurrentComic().then((response) => {
      commit(types.mutations.SET_CURRENT_COMIC_NUMBER, response.data.num);
    }).catch((error) => {
      console.error(`Error: ${error}`);
    });
  },
  [types.actions.GET_RANDOM_COMIC]({ commit, state }) {
    const randomComicNumber = randomNumber(state.currentComicNumber);
    comicApi.getRandomComic(randomComicNumber).then((response) => {
      commit(types.mutations.SET_COMIC_DATA, response.data);
    }).catch((error) => {
      console.error(`Error: ${error}`);
    });
  },
  [types.actions.ADD_FAVORITE_COMIC]({ commit, state }) {
    const currentComic = { ...state.comicData };
    const newComic = {
      ...currentComic,
      favorite: !currentComic.favorite,
    };
    commit(types.mutations.SET_COMIC_DATA, newComic);
    let comics = { ...state.favoritesComics };
    if (newComic.favorite) {
      comics = {
        ...comics,
        [newComic.num]: {
          ...newComic,
        },
      };
    } else {
      delete comics[currentComic.num];
    }
    commit(types.mutations.SET_FAVORITE_COMIC, comics);
  },
  [types.actions.ADD_COMIC_RATING]({ commit, state }, payload) {
    const newRating = { ...state.favoritesComics };
    newRating[payload.key].rating = payload.rate;
    commit(types.mutations.SET_COMIC_DATA, newRating);
  },
};

export default {};
