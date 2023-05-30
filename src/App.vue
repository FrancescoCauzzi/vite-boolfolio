<script>
import axios from "axios";

// components
import ProjectCard from "./components/ProjectCard.vue";

export default (await import("vue")).defineComponent({
  name: "App",
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      currentPage: 1,
      totalPages: 0,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
        .get("http://127.0.0.1:8000/api/projects?page=" + this.currentPage)
        .then((response) => {
          console.log(response.data.results);
          this.projects = response.data.results.data;
          this.totalPages = response.data.results.last_page;
        });
    },
    fetchPage(page) {
      this.currentPage = page;
      this.getProjects();
    },
  },
});
</script>

<template>
  <div class="container py-4">
    <h1>All the projects</h1>
    <hr />
    <div class="__projects-ctn mb-5">
      <div class="__card-ctn" v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
    <div class="__page-links d-flex gap-3 justify-content-center">
      <a
        class="btn btn-primary"
        v-if="currentPage > 1"
        @click.prevent="fetchPage(1)"
        >First</a
      >
      <a
        class="btn btn-primary"
        v-if="currentPage > 1"
        @click.prevent="fetchPage(currentPage - 1)"
        >Previous</a
      >
      <a
        class="btn btn-primary"
        v-for="page in totalPages"
        :key="page"
        @click.prevent="fetchPage(page)"
        :disabled="page === currentPage"
        >{{ page }}</a
      >
      <a
        class="btn btn-primary"
        v-if="currentPage < totalPages"
        @click.prevent="fetchPage(currentPage + 1)"
        >Next</a
      >
      <a
        class="btn btn-primary"
        v-if="currentPage < totalPages"
        @click.prevent="fetchPage(totalPages)"
        >Last</a
      >
    </div>
  </div>
</template>

<style scoped>
.__projects-ctn {
  width: 100%;
  gap: 20px;
  flex-flow: row wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.__card-ctn {
  width: calc(100% / 4 * 1 - (20px / 4 * 3));
  min-width: 200px;
}

a {
  cursor: pointer;
}
</style>
