<template>
    <div class="container">
        <Titulo>Clase 12 - Vuex en Vue</Titulo>
        <div class="container">
            <SubTitulo>Repasamos la lectura de variables</SubTitulo>
            <div><b>⚠ Mala práctica!</b></div>
            <div>Este es el valor de la variable1 recuperada desde el <b>"$store.state..."</b>:</div>
            ➤ {{ $store.state.variable1}}
            <br>
            <div>Este es el valor de la variable2 recuperada desde el <b>"$store.state..."</b>:</div>
            ➤ {{ $store.state.variable2}}


            <SubTitulo>Ahora hacemos lo mismo pero utilizando los getters:</SubTitulo>
            <div><b>👍 Buena práctica!</b></div>
            <div>Este es el valor de la variable1 recuperada desde un <b>"$store.getters..."</b>:</div>
            ➤ {{ $store.getters.getVariable1}}
            <br>
            <div>Este es el valor de la variable2 recuperada desde un <b>"$store.getters..."</b>:</div>
            ➤ {{ $store.getters.getVariable2}}
        </div>


        <div class="container">
            <SubTitulo>Ahora veremos cómo acceder a lo mismo, implementando un mapState para reemplazar todos estos getters y que quede más prolijo!:</SubTitulo>
            <div><b>✔ Óptimo!</b></div>
            <div>Este es el valor de la variable1: (comprobamos que es el mismo)</div>
            ➤ {{ variable1}}

            <br>
            <div>Este es el valor de la variable2: (comprobamos que es el mismo)</div>
            ➤ {{ getVariable2}}
        </div>


        <div class="container">
            <SubTitulo>Accediendo al store de <b>users</b>:</SubTitulo>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    async created(){
        await this.setProducts();
        await this.setUsers();
    },
    mounted(){
        // Comprobar cómo con "strict mode" no podemos realizar la mutación de abajo.
        // this.$store.state.variable1 = 1;
    },
    methods:{
        //Seteamos productos de manera permitida pero no de la mejor
        // async setProducts(){
        //     // console.log(this.$store);//Ver en el console log cómo aparece dividido por módulo
        //     this.$store.dispatch("products/setProducts");
        // },

        //Seteamos productos de manera recomendada y óptima
        ...mapActions("products", ["setProducts"]),

        //Seteamos users de manera recomendada y óptima
        ...mapActions("users", ["setUsers"]),
    },
    computed: {
        ...mapState(["variable1", "variable2"]),// Tanto state...


        ...mapGetters(["getVariable1", "getVariable2"]),// ...como getters van en las computed!

        ...mapState("products", ["variable3", "variable4"]),
        // ...mapState("users", ["variable3"]),

        ...mapState("users", {
                usersVariable3: "variable3",
                users: "users"
            }),
        ...mapGetters("products", ["getLastProducts"]),
    }
};
</script>

<style>
</style>
