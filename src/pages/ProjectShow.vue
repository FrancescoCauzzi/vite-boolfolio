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
    };
  },
  mounted() {
    this.projectSlug = this.$route.params.slug;
    this.getProject();
  },
  methods: {
    getProject() {
      axios
        .get("http://127.0.0.1:8000/api/projects/" + this.projectSlug)
        .then((response) => {
          console.log("project:", response);
          if (response.data.success == true) {
            this.project = response.data.project;
            this.projectFound = true;
            this.isLoading = false;
          } else {
            this.isLoading = false;
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
      <h1>{{ project.name }}</h1>
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
</style>
