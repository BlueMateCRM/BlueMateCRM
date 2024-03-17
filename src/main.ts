import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "boxicons/css/boxicons.min.css";
import "./assets/css/main.css";
// global components import
import AppTable from "./components/tables/app/AppTable.vue";
import ParsingTable from "./components/tables/app/ParsingTable.vue";
import Button from "./components/ui/buttons/Button.vue";

// create app
const app = createApp(App);
// global components
app.component("AppTable", AppTable);
app.component("ParsingTable", ParsingTable);
app.component("Button", Button);
// main packages
app.use(router);
app.use(ElementPlus);
app.use(createPinia());
// run app
app.mount("#app");
