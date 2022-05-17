<template>
  <div>
    <main-layout>
      <div class="container p-6 is-flex is-flex-direction-column is-align-items-center">
        <loader v-if="isLoadingView"/>
        <comic-card v-else/>
      </div>
    </main-layout>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesComic as types } from '@/store/modules/comics/types';

import ComicCard from '../components/ComicCard.vue';
import MainLayout from '../components/MainLayout.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    ComicCard,
    Loader,
  },
  computed: {
    ...mapState(types.PATH, ['isLoadingView']),
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
