import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import axios from "axios";
import * as echarts from 'echarts'

require("./mock/mock.js");
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store).use(router).use(ElementPlus).mount("#app");
//全局挂载axios
app.config.globalProperties.$axios = axios;
//全局挂载echarts
app.config.globalProperties.$echarts = echarts