import { createApp } from "vue";
import { createPinia } from "pinia";
import "@unocss/reset/tailwind.css";
import "uno.css";
import "virtual:unocss-devtools";
import "./style.css";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
