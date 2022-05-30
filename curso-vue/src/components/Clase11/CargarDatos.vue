<template>
    <div class="container">
        <div>Utilizamos la directiva v-model para sincronizar el valor del input con el<b>"$store.state.message"</b>:</div>
        <input type="text" v-model="$store.state.message" class="form-control" >

        <hr>

        <div>Ahora agregaremos el valor que tiene nuestro input al array <b>"$store.state.messageHistory"</b>:</div>
        <div>E imprimimos en consola el valor del array :)</div>
        <button class="btn btn-primary" @click="$store.dispatch('saveMessage')">Agregar mensaje!</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
