import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

// we import the router here
import { router } from "./router";

import "@fortawesome/fontawesome-free/css/all.css";

// then we use it before we mount the app
//createApp(App).use(router).mount("#app");
const app = createApp(App);
// Register the component globally

app.use(router);
app.mount("#app");
