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
            document.title = "Boolfolio - " + this.project.name;
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
      <div class="__technologies d-flex gap-1">
        <span
          class="badge rounded-pill __badge"
          v-for="tech in project.technologies"
          >{{ tech.name }}</span
        >
      </div>
      <h4>
        {{ project.type ? project.type.name : "No type given" }}
      </h4>
      <hr />
      <p>{{ project.description }}</p>
      <h4></h4>
    </div>
    <div v-else>
      <div class="alert alert-danger text-center" role="alert">
        No project found
      </div>
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

.__technologies {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  padding: 0.8em 0;
  overflow-x: auto;
  .__badge {
    background-color: rgb(14, 91, 147);
  }
}
</style>
