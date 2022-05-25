import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
    	message:'Este es nuestro primer dato guardado en el Store!',
        // nombreDelCurso: "Jquery",
        // contador: 0
    },
    mutations:{
        // nombreDelCurso: (state) => {
        //     state.nombreDelCurso = "Vue y Vuex";
        // },
        // incrementarContador: (state) => {
        //     state.contador++;
        // }
    },
    actions:{
        // cambiarNombreDelCurso: (context) => {
        //     context.commit("nombreDelCurso");
        // }
    },
    getters: {
        getMessage(state) {
            return state.message;
        },
        // getNombreDelCurso(state){
        //     return state.nombreDelCurso;
        // }
    }
})

