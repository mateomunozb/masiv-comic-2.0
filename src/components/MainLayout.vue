<template>
  <div class="main-layout has-background-black">
    <nav class="navbar has-background-black">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 class="has-text-danger">Random Comic</h1>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-text-light">
            <router-link class="has-text-light" to="/">
              Home
            </router-link>
            <router-link class="has-text-light" to="/favorites">
              Favorites
            </router-link>
          </div>
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
          <ion-icon class="mx-2 has-text-light" name="logo-github"/>
        </a>
        <a href="https://linkedin.com/in/mateomuñozb" target="__blank">
          <ion-icon class="has-text-danger" name="logo-linkedin"/>
        </a>
        <a href="https://twitter.com/mambu_4" target="__blank">
          <ion-icon class="mx-2 has-text-light" name="logo-twitter"/>
        </a>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'MainLayout',
};
</script>
