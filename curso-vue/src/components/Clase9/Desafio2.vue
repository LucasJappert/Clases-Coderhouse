<template>
  <div class="container">
    Hola! Soy el componente {{this.$options.name}}!
    <p>{{ contador }}</p>
  </div>
</template>

<script>
import ejemploAccesosDesdeHooks from "../../mixins/Clase9/ejemploAccesosDesdeHooks.js";
export default {
    name: "Desafio2",
    mixins:[ ejemploAccesosDesdeHooks ],
    data(){
        return{
            contador: 0,
            idInterval: 0
        }
    },
    mounted(){
        this.idInterval = setInterval(this.AumentarContador, 1000);
        console.log(`Intervalo corriendo. Id: ${this.idInterval}`);
    },
    beforeDestroy(){
        //console.log(this.$data);
        console.log(`Limpiamos el intervalo id: ${this.idInterval}`);
        clearInterval(this.idInterval);
    },
    methods:{
        AumentarContador(){
            this.contador++;
        }
    }
}
</script>

<style lang="scss">
</style>
