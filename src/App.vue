<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <main>
    <!-- here we will get the router component visualized -->
    <router-view></router-view>
  </main>
  <footer>
    <AppFooter></AppFooter>
  </footer>
</template>

<style scoped></style>
