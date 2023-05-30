<script>
export default {
  name: "AppFooter",

  data() {
    return {};
  },
  computed: {
    currentYear() {
      let currentYear = new Date().getFullYear();
      return currentYear;
    },
  },
};
</script>

<template>
  <footer class="text-center">
    <hr />
    <div>
      <span>Boolean Class #88 &copy; {{ currentYear }}</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
