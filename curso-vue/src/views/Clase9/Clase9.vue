<template>
  <div>
      <div class="container text-center">
          <Titulo>Clase 9 - Router y life cycle hooks</Titulo>
          <TestPadre></TestPadre>
          <!-- <Desafio2></Desafio2> -->
          <!-- <TestWatch></TestWatch> -->
      </div>
  </div>
</template>

<script>
// import TestPadre from "./TestPadre.vue";
// import Desafio2 from "./Desafio2.vue";
export default {
    components:{
        TestPadre: ()=> import("../../components/Clase9/TestPadre.vue"),
        Desafio2: ()=> import("../../components/Clase9/Desafio2.vue"),
        TestWatch: ()=> import("../../components/Clase9/TestWatch.vue"),
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
