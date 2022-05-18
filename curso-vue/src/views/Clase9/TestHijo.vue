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
    // mixins: [printHooks],
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

        //TODO: Forzar al destroy
        //setTimeout(() => this.cancelarEventos(), 1000);
    },
    methods:{
        cancelarEventos() {
            console.log("asdas");
            this.$destroy();
        },
    }
};
</script>

<style>
</style>
