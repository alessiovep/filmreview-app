import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "../plugins/vuetify.ts";
import router from "./router/index.ts";
import "./style.css";

createApp(App).use(router).use(vuetify).mount("#app");
