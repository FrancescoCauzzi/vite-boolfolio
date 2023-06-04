<script>
import axios from "axios";

// components
import ProjectCard from "../../components/ProjectCard.vue";

export default {
  name: "ProjectsIndex",
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      currentPage: 1,
      totalPages: 0,
      types: [],
      selectedTypeId: "",
      projectFound: false,
      isLoading: true,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
        .get(
          "http://127.0.0.1:8000/api/projects?page=" +
            this.currentPage +
            "&type_id=" +
            this.selectedTypeId
        )
        .then((response) => {
          console.log(response.data.results);
          // if (response.data.results.data) {
          //   this.projects = response.data.results.data;
          // } else {
          //   this.projects = response.data.results;
          // }
          this.isLoading = false;
          if (response.data.success) {
            this.projects = response.data.results.data;
            this.totalPages = response.data.results.last_page;
            this.types = response.data.allTypes;
            this.projectFound = true;
          } else {
            this.projectFound = false;
          }
        });
    },
    fetchPage(page) {
      this.currentPage = page;
      this.getProjects();
      console.log(this.projects);
    },
  },
};
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">All the projects</h1>
    <form action="" @submit.prevent="" class="d-flex">
      <select
        name="type_id"
        id="type_id"
        v-model="selectedTypeId"
        @change="fetchPage(1)"
        class="form-select w-25"
      >
        <option value="">All</option>
        <option v-for="type in types" :value="type.id">
          {{ type.name }}
        </option>
      </select>
    </form>
  </div>
  <hr />
  <div v-if="!isLoading" class="container mb-5 d-flex flex-column">
    <div v-if="projectFound" class="__block-ctn d-flex gap-3 flex-column">
      <div class="d-flex justify-content-center gap-3">
        <div v-for="project in projects" class="__card-ctn d-flex gap-3">
          <ProjectCard :project="project"></ProjectCard>
        </div>
      </div>
      <div>
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
            :class="page === currentPage ? 'disabled' : ''"
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
    </div>
    <div v-else>
      <div role="alert" class="alert alert-warning text-center">
        No project found
      </div>
    </div>
  </div>
  <div v-else class="loading-screen" id="spinner-container">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
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

a.disabled {
  pointer-events: none;
  opacity: 0.5;
}

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
