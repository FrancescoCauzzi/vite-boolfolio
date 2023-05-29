<script>
export default {
  name: "ProjectCard",

  data() {
    return {
      baseUrl: "http://127.0.0.1:8000/",
    };
  },
  props: {
    project: Object,
  },
  computed: {
    shortDescription() {
      return this.project.description.substring(0, 100) + "...";
    },
    coverImage() {
      return this.baseUrl + "storage/" + this.project.cover_image;
    },
  },
};
</script>

<template>
  <div class="card" style="">
    <img :src="coverImage" class="card-img-top" alt="cannot retrieve image" />
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      {{ coverImage }}
      <p class="card-text">
        {{ shortDescription }}
      </p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<style scoped></style>
