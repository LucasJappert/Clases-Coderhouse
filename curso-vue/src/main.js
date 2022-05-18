import Vue from 'vue';
import App from './App.vue';
import router from './routers/router.js';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.scss";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
