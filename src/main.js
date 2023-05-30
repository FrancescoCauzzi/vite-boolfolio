import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

// we import the router here
import { router } from "./router";

// then we use it before we mount the app
//createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(router);
app.mount("#app");
