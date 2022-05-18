<template>
    <div class="container">
        Hola! Soy el componente {{this.$options.name}}!
        <TestHijo></TestHijo>
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
