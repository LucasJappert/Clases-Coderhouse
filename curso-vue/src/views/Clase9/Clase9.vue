<template>
  <div>
      <div class="container text-center">
          <Titulo text="Clase 9 - Router y life cycle hooks"></Titulo>
          <TestPadre></TestPadre>
          <!-- <Desafio2></Desafio2> -->
      </div>
  </div>
</template>

<script>
// import TestPadre from "./TestPadre.vue";
// import Desafio2 from "./Desafio2.vue";
export default {
    components:{
        Titulo: ()=> import("../../components/Titulo.vue"),
        TestPadre: ()=> import("./TestPadre.vue"),
        Desafio2: ()=> import("./Desafio2.vue"),
    },
}
</script>

<style lang="scss">
.container{
    // width:600px;
    padding: 10px;
    box-shadow: 0 0 5px #000;
    margin: 20px auto;
}
</style>
