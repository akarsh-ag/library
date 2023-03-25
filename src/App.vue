<template>
  <v-app>
      <navbar></navbar>
      
      
      <v-main>
      <router-view />
    </v-main>
    <bottom-navbar></bottom-navbar>
  </v-app>
</template>

<script>
import BottomNavbar from './components/BottomNavbar.vue';
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar, BottomNavbar },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('@/assets/styles.css');
</style>
