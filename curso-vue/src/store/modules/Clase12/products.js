const axios = require('axios');
const apiURL = "https://dummyjson.com";
export default {
    namespaced: true,
    state: {
        products: [],
        variable3: 44,
        variable4: 66
    },
    getters: {
        getLastProducts: (state) => (length) => {
            return state.products.slice(0, length);
        }
    },
    mutations: {
        setProducts(state, data) {
            state.products = data;
        }
    },
    actions: {
        async setProducts({ commit }){
            console.log("llego a setProducts");
            let result = null;
            result = await axios.get(`${apiURL}/products`)
            .then(response => {
                let result = response.data.products
                            .map(item => {
                                        let {id, title, price, stock} = item;
                                        return { id, title, price, stock };
                                    }
                );
                //console.log(result);
                return result;
            })
            .catch(error => {
                console.error(error);
            });
            if (result != null){
                commit('setProducts', result);
            }
        },
    },
    modules: {

    }
}
