import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import "highlight.js/styles/color-brewer.css";

import VcSnippet from "./components/snippet";
Vue.component("vc-snippet", VcSnippet);

import IkeaUIDocs from "../src/index";
Vue.use(IkeaUIDocs);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
