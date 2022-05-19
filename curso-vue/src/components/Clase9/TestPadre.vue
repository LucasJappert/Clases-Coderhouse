<template>
    <div class="container">
        Hola! Soy el componente {{this.$options.name}}!
        <TestHijo></TestHijo>
        <br>
        Ejemplos rutas dinámicas:
        <br>
        <router-link class="btn btn-success buttonClases" :to="{ name: 'TestRoutDinamico', params: { id: 123 }}">Ir a /Clase9/123</router-link>
        <router-link class="btn btn-success buttonClases" :to="{ name: 'TestRoutDinamico', params: { id: 124 }}">Ir a /Clase9/124</router-link>
    </div>
</template>

<script>
import TestHijo from "./TestHijo.vue";
import printHooks from "../../mixins/printHooks";
export default {
    name: "TestPadre",
    // mixins:[printHooks],
    components: {
        TestHijo,
    },
};
</script>

<style>
</style>
