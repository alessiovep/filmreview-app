import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "../plugins/vuetify.ts";
import router from "./router/index.ts";
import { createPinia } from "pinia";
import "./style.css";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
