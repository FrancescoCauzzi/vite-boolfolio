<script>
import axios from "axios";

export default (await import("vue")).defineComponent({
  name: "App",

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
    <table class="table table-striped">
      <thead>
        <th>Name</th>
        <th>Slug</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <td>{{ project.name }}</td>
          <td>{{ project.slug }}</td>
          <td>{{ project.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
