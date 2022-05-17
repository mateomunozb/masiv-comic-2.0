<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="comicData.img" alt="Comic Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-2">{{ comicData.title }}</p>
            <p class="subtitle is-5">
              Num. {{ comicData.num }}
            </p>
          </div>
          <div class="media-right">
            <button
              @click="addFavoriteComic()"
              class="button is-danger is-rounded is-size-6 mr-2"
            >
              <em class="mr-2 fa-heart" :class="comicData.favorite ? 'fa-solid' : 'fa-regular'" />
              Favorite
            </button>
            <button
              @click="getRandomComic()"
              class="button is-info is-rounded is-size-6"
            >
              <em class="fa-solid fa-shuffle mr-2"></em>Random
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesComic as types } from '@/store/modules/comics/types';

export default {
  name: 'ComicCard',
  computed: {
    ...mapState(types.PATH, [
      'comicData',
    ]),
  },
  methods: {
    ...mapActions(types.PATH, {
      getRandomComic: types.actions.GET_RANDOM_COMIC,
      addFavoriteComic: types.actions.ADD_FAVORITE_COMIC,
    }),
  },
};
</script>
