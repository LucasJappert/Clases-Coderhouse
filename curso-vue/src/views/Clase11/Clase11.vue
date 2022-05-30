<template>
  <div class="container">
    <Titulo>Clase 11 - Introducción a Vuex</Titulo>

    <div class="container">
        <SubTitulo>Primeros ejemplos con vuex:</SubTitulo>
        <PrimerEjemplo></PrimerEjemplo>
    </div>

    <div class="container" v-if="true">
        <SubTitulo>Componente que usaremos para cargar datos al store:</SubTitulo>
        <CargarDatos></CargarDatos>
    </div>

    <div class="container" v-if="true">
        <SubTitulo>Componente que usaremos para mostrar datos del store:</SubTitulo>
        <MostrarDatos></MostrarDatos>
    </div>
    <br>
  </div>
</template>

<script>
import PrimerEjemplo from "../../components/Clase11/PrimerEjemplo.vue";
import CargarDatos from "../../components/Clase11/CargarDatos.vue";
import MostrarDatos from "../../components/Clase11/MostrarDatos.vue";
export default {
    name: "Clase11",
    components:{ PrimerEjemplo, CargarDatos, MostrarDatos },
    data(){
        return{
        }
    },
    mounted(){

    },
    methods:{
    }
}
</script>

<style>
</style>
