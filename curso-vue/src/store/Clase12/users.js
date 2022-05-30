const axios = require('axios');
const apiURL = "https://dummyjson.com";
export default {
    namespaced: true,
    state: {
        users: [],
    },
    getters: {

    },
    mutations: {
        setUsers(state, data) {
            state.users = data;
        }
    },
    actions: {
        async setUsers({ commit }){
            let result = null;
            result = await axios.get(`${apiURL}/users`)
            .then(response => {
                let result = response.data.users
                            .map(item => {
                                        let {id, firstName, lastName, age} = item;
                                        return { id, firstName, lastName, age };
                                    }
                );
                return result;
            })
            .catch(error => {
                console.error(error);
            });
            if (result != null){
                commit('setUsers', result);
            }
        }
    },
    modules: {

    }
}
