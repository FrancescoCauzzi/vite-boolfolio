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
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        console.log(response.data.results);
        this.projects = response.data.results;
      });
    },
  },
});
</script>

<template>
  <div class="container py-3">
    <h1>All the projects</h1>
    <hr />
    <div class="__projects-ctn">
      <div class="__card-ctn" v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>
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
</style>
