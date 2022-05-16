<template>
  <div>
    <main-layout>
      <comic-card/>
    </main-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { typesComic as types } from '@/store/modules/comics/types';

import ComicCard from '../components/ComicCard.vue';
import MainLayout from '../components/MainLayout.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    ComicCard,
  },
  methods: {
    ...mapActions(types.PATH, {
      getCurrentComic: types.actions.GET_CURRENT_COMIC,
      getRandomComic: types.actions.GET_RANDOM_COMIC,
    }),
  },
  async mounted() {
    await this.getCurrentComic();
    this.getRandomComic();
  },
};
</script>
