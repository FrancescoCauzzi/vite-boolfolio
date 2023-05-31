import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import ProjectsIndex from "./pages/ProjectsIndex.vue";
import ProjectShow from "./pages/ProjectShow.vue";

// we create a new router object to handle our routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about-us",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsIndex,
    },
    // single project
    {
      path: "/projects/:slug",
      name: "project.show",
      component: ProjectShow,
    },
  ],
});

router.beforeEach((to) => {
  document.title = to.meta?.title
    ? "Boolfolio - " + to.meta.title
    : "Boolfolio";
});

export { router };
