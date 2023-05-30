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
      if (this.project.cover_image == null) {
        return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      } else {
        return this.baseUrl + "storage/" + this.project.cover_image;
      }
    },
  },
};
</script>

<template>
  <div class="card __project">
    <img :src="coverImage" class="card-img-top" alt="cannot retrieve image" />
    <div class="card-body d-flex flex-column gap-3">
      <h5 class="card-title">{{ project.name }}</h5>
      <small
        >Type:{{
          project.type ? project.type.name : "Type not specified"
        }}</small
      >
      <div class="__technologies d-flex gap-1">
        <span
          class="badge rounded-pill __badge"
          v-for="tech in project.technologies"
          >{{ tech.name }}</span
        >
      </div>

      <p class="card-text">{{ shortDescription }}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.__project {
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .__technologies {
    overflow-x: auto;
    .__badge {
      background-color: rgb(20, 20, 216);
    }
  }
}
</style>
