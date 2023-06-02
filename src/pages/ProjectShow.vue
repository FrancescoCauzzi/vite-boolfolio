<script>
import axios from "axios";
export default {
  name: "ProjectShow",
  data() {
    return {
      project: {},
      isLoading: true,
      projectFound: false,
      projectSlug: "",
      baseUrl: "http://127.0.0.1:8000/",
    };
  },
  mounted() {
    this.projectSlug = this.$route.params.slug;
    this.getProject();
  },
  computed: {
    projectImage() {
      return this.baseUrl + "storage/" + this.project.cover_image;
    },
  },
  methods: {
    getProject() {
      axios
        .get(this.baseUrl + "api/projects/" + this.projectSlug)
        .then((response) => {
          console.log("project:", response);
          this.isLoading = false;
          if (response.data.success == true) {
            this.project = response.data.project;
            this.projectFound = true;
          } else {
            this.postFound = false;
          }
        });
    },
  },
};
</script>
<template>
  <div v-if="isLoading" id="spinner-container">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="container py-5">
    <div v-if="projectFound">
      <div class="__proj-img text-center">
        <img :src="projectImage" alt="" />
      </div>
      <h1>{{ project.name }}</h1>
      <h4>
        {{ project.type?.name }}
      </h4>
      <hr />
      <p>{{ project.description }}</p>
      <h4></h4>
    </div>
    <div v-else>
      <div class="alert danger-aler" role="alert">No project found</div>
    </div>
  </div>
</template>
<style lang="scss">
#spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
}
.__proj-img {
  img {
    max-height: 400px;
    object-fit: cover;
  }
}
</style>
