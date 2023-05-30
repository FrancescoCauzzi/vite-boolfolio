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
  <AppHeader></AppHeader>
  <!-- here we will get the router component visualized -->
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
