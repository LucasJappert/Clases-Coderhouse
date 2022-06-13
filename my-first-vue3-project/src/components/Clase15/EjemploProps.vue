<template>
    <div class="container">
        <div class="SubTitulo">Ejemplo trabajando con <b>props y watch</b>:</div>
        <button @click="contador++">Aumentar contador</button>
        <br>
        <Contador :contador-prop="contador"/>
    </div>
</template>

<script>
/* eslint-disable */
import Contador from "./Contador.vue";
import { ref } from 'vue';
export default {
    components:{ Contador },
    setup(props, context){
        //console.log(this);
        let contador = ref(1);

        return { contador };
    }
}
</script>

<style>

</style>
