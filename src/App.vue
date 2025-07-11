<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav />
  <RouterView />
</template>

<style lang="scss">
@import './assets/variables-mixins.scss';

// GENERAL

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  //  font-family: 'sansita', sans-serif;

  text-decoration: none;
}

body {
  color: $WHITE;
  overflow-x: hidden;
}

button {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  cursor: pointer;
}

li {
  list-style-type: none;
}
</style>