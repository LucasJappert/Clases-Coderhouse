<template>
    <div class="container">
        Hola! Soy el componente {{ this.$options.name }}!
        {{ contador }}
    </div>
</template>

<script>
import printHooks from "../../mixins/printHooks";
export default {
    name: "TestHijo",
    // mixins: [printHooks], //DESCOMENTAR PARA PROBAR TODOS LOS HOOKS
    data() {
        return {
            contador: 0,
        };
    },
    mounted() {
        //Descomentar para probar el hook beforeUpdate y update
        // const idInterval = setInterval(() =>{
        //     this.contador++;
        //     console.log(this.contador);
        //     if (this.contador >= 5) clearInterval(idInterval);
        // } , 1000);

        //Forzar al destroy
        //setTimeout(() => this.cancelarEventos(), 1000);
    },
    methods:{
        cancelarEventos() {
            this.$destroy();
        },
    }
};
</script>

<style>
</style>
