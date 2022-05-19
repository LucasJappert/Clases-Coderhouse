<template>
  <div class="container">
      Así con este parámetro podemos consultar alguna API y obtener datos, como por ejemplo, de algún producto.
      <br><hr>
      Parámetro id: {{ parametroId }}
  </div>
</template>

<script>
export default {
    name: "TestRoutDinamico",
    data(){
        return {
            parametroId: 0
        }
    },
    mounted(){
        this.parametroId = this.$route.params.id;
        console.log(this.parametroId);
    }
}
</script>

<style>

</style>
