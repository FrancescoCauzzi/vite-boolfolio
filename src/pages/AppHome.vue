<script>
export default {
  name: "AppHome",
};
</script>
<template>
  <div class="container py-4">
    <h1 class="text-white">You are in the homepage</h1>
  </div>
  <hr />
  <div class="container">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sit minima
      assumenda, vitae maiores odit, reiciendis accusantium, illum inventore
      cumque deserunt magni nam iusto quae in! Vero numquam fugiat quia. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa debitis aperiam
      hic necessitatibus deserunt fuga maiores animi, ullam porro, beatae atque
      maxime totam alias at eum, perspiciatis quos repellat perferendis.
    </p>
    <div>
      <!-- <a href="">Go to the about-us page</a> -->
      <router-link :to="{ name: 'about' }">Go to the about-us page</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
