const axios = require('axios');
const apiURL = "https://dummyjson.com";
export default {
    namespaced: true,
    state: {
        users: [],
        variable3: 55
    },
    getters: {

    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
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
                console.log(result);
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
}
