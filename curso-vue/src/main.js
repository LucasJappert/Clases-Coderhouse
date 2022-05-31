import Vue from 'vue';
import App from './App.vue';
import router from './routers/router.js';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.scss";
import utils from "./mixins/utils";
import store from "./store/index.js";

//#region COMPONENTES GLOBALES
Vue.component('Titulo', ()=> import("./components/Titulo.vue"));
Vue.component('SubTitulo', ()=> import("./components/SubTitulo.vue"));
//#endregion -------------------------

//#region MIXINS GLOBALES
Vue.mixin(utils);
//#endregion -------------------------

Vue.config.productionTip = false
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
