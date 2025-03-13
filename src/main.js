import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
import App from "./App.vue";
import "./style.css";

// Add the necessary CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// 載入 vue-axios
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router"; // 確保這裡引入 router
import "../src/assets/css/global.css";

const app = createApp(App);

app.use(createBootstrap());
app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
