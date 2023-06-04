// we import the router from vue-router
import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import ProjectsIndex from "./pages/projects/ProjectsIndex.vue";
import ProjectShow from "./pages/projects/ProjectShow.vue";

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
      // :slug is a dynamic route parameter, that we can use to get the slug from the url and then pass it to the component
      path: "/projects/:slug",
      // we can pass a name to the route, that we can use to reference it in the navigation
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
