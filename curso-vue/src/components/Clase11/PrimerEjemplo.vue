<template>
    <div class="container">
        <div>Obtenemos el mensaje directamente usando el <b>"$store.state"</b>:</div>
        --- {{ $store.state.message }}
        <hr>
        <div>Ahora obtenemos el mensaje pero usando <b>"$store.getters"</b>:</div>
        --- {{ $store.getters.getMessage }}
        <div>Ahora vamos a cambiar ese dato "message" <b>"$store.getters"</b>:</div>
        <button class="btn btn-primary" @click="$store.dispatch('cambiarMessage')">
            CambiarMessage
        </button>
    </div>
</template>

<script>
export default {
    mounted(){
        // console.log(this.$store.state.message);
        this.$store.state.message = "Lucas";
    }
};
</script>

<style>
</style>
