<template>
  <div>
    <main-layout>
      <div class="container favorites-comics">
        <h1 class="title has-text-white is-1">Favorites</h1>
        <div v-for="(item, key) in favoritesComics" :key="key" class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image">
                  <img :src="item.img" alt="Comic Image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ item.title }} ({{ item. num }})</p>
                <p class="subtitle is-6">{{ item.alt }}</p>
                <rating
                  :grade="item.rating"
                  @change="rating(key, item.rating)"
                  v-model="item.rating"
                />
              </div>
            </div>
          </div>
          <footer class="card-footer is-flex is-justify-content-end">
            <button
              class="button is-danger is-rounded is-size-5 m-3"
              @click="deleteFavoriteComic(key)"
            >
              <em class="fa-solid fa-trash mr-2"></em>Delete
            </button>
          </footer>
        </div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesComic as types } from '@/store/modules/comics/types';

import MainLayout from '../components/MainLayout.vue';
import Rating from '../components/Rating.vue';

export default {
  name: 'Favorites',
  components: { MainLayout, Rating },
  computed: {
    ...mapState(types.PATH, [
      'favoritesComics',
    ]),
  },
  methods: {
    ...mapActions(types.PATH, {
      addComicRating: types.actions.ADD_COMIC_RATING,
      deleteFavoriteComic: types.actions.DELETE_FAVORITE_COMIC,
    }),
    rating(key, model) {
      this.addComicRating({ key, rate: model });
    },
  },
  mounted() {
  },
};
</script>
