import { createApp } from "vue";
import { createPinia } from "pinia";
import * as apolloProvider from "./scripts/apollo.provider";

import App from "./App.vue";
import router from "./router";

import Particles from "vue3-particles";

import "virtual:windi.css";
import "./assets/css/global.css";

const app = createApp(App);

app.use(Particles);
app.use(createPinia());
app.use(router);
app.use(apolloProvider.provider);

app.mount("#app");
