import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/base";
import "./plugins/chartist";
import "./plugins/vee-validate";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import "xe-utils";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

Vue.config.productionTip = false;
Vue.use(VXETable)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
