import Vue from "vue";
import Vuex from 'vuex';
import products from "./Clase12/products";
import users from "./Clase12/users";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state:{
    	message:'Este es nuestro primer dato guardado en el Store!',
        messageHistory: [],
        variable1: "variable1",
        variable2: "variable2"
    },
    getters: {
        getMessage(state) {
            return state.message;
        },
        getMessageHistory(state) {
            return state.messageHistory;
        },
        getVariable1(state) {
            return state.variable1;
        },
        getVariable2(state) {
            return state.variable2;
        },
    },
    mutations:{
        message: (state) => {
            state.message = "Hemos cambiado el mensaje utilizando action y mutation!";
        },
        messageHistory: (state) => {
            state.messageHistory.push(state.message);
            //state.message = "";
            state.message = `Mensaje ${state.messageHistory.length}`;
            console.log(state.messageHistory);
        },
        setVariable1(state, data) {
            state.variable1 = data;
        },
        setVariable2(state, data) {
            state.variable2 = data;
        },
    },
    actions:{
        cambiarMessage: (context) => {
            context.commit("message");
        },
        saveMessage: (context) => {
            context.commit("messageHistory");
        },
        setVariable1({ commit }, data) {
            commit("setVariable1");
        },
        setVariable2({commit}, data) {
            commit("setVariable2");
        },
    },
    modules: {
        products, users
    }
})

