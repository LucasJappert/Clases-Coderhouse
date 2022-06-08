<template>
    <div class="Titulo">Clase 15 - Caracterísiticas avanzadas</div>
    <EjemploProps />
    <EjemploContext test="hi" @evento-emitido="EventoRecibido" />
    <EjemploSlots />
    <FormWithOptionsAPI />
    <FormWithCompositionAPI />
</template>

<script>
import EjemploProps from "../components/Clase15/EjemploProps.vue";
import EjemploContext from "../components/Clase15/EjemploContext.vue";
import EjemploSlots from "../components/Clase15/EjemploSlots.vue";
import FormWithOptionsAPI from "../components/Clase15/FormWithOptionsAPI.vue";
import FormWithCompositionAPI from "../components/Clase15/FormWithCompositionAPI.vue";
export default {
    components: { FormWithCompositionAPI, FormWithOptionsAPI, EjemploProps, EjemploContext, EjemploSlots },
    mounted(){
        // console.log("mounted");
        // console.log(this);
    },
    setup() {
        // console.log("setup");
        // console.log(this);
    },
    methods: {
        EventoRecibido(data){
            console.log(data);
        }
    }
  }
</script>

<style lang="scss">
</style>
