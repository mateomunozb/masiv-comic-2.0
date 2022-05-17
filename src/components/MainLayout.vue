<template>
  <div class="main-layout has-background-black">
    <nav class="navbar has-background-black">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 class="has-text-danger">Random Comic</h1>
        </a>
        <a role="button"
          class="navbar-burger has-text-light"
          id="burger"
          @click="toggleNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="menuList" class="navbar-menu has-background-black">
        <div class="navbar-end">
          <router-link class=" navbar-item has-text-light" to="/">
            Home
          </router-link>
          <router-link class="navbar-item has-text-light" to="/favorites">
            Favorites
          </router-link>
        </div>
      </div>
    </nav>
    <slot></slot>
    <footer class="footer has-background-black">
      <div class="footer__sign has-text-light">
        <p>Mateo Muñoz B.</p>
        <div class="designer">
          From
          <span class="has-text-info">Masiv</span>
        </div>
      </div>
      <div class="footer__social">
        <a class="has-text-danger" href="https://xkcd.com/" target="__blank">
          xkcd
        </a>
        <a href="https://github.com/mateomunozb" target="__blank">
          <em class="fa-brands fa-github has-text-light"/>
        </a>
        <a href="https://linkedin.com/in/mateomuñozb" target="__blank">
          <em class="fa-brands fa-linkedin has-text-danger"/>
        </a>
        <a href="https://twitter.com/mambu_4" target="__blank">
          <em class="fa-brands fa-twitter has-text-light"/>
        </a>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      mobile: false,
    };
  },
  methods: {
    toggleNav() {
      const burgerIcon = document.getElementById('burger');
      const dropMenu = document.getElementById('menuList');
      burgerIcon.classList.toggle('is-active');
      dropMenu.classList.toggle('is-active');
    },
  },
};
</script>
