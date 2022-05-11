import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// main.js
Vue.mixin({
    data() {
        return {
            cantidad: 0
        }
    },
    methods: {
        SaludarGlobal() {
          console.log(`HOLA MUNDO!!!`);
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')
