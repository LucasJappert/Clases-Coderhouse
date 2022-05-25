<template>
    <div class="container">
        <div>Obtenemos el mensaje directamente usando el <b>"$store.state"</b>:</div>
        --> {{ $store.state.message }}
        <hr>
        <div>Ahora obtenemos el mensaje pero usando <b>"$store.getters"</b>:</div>
        --> {{ $store.getters.getMessage }}
        <div>Ahora vamos a cambiar ese dato "message" <b>"$store.getters"</b>:</div>
        <!-- <button class="btn btn-primary" @click="$store.dispatch('cambiarNombreDelCurso')">
            dispatch CambiarNombreDelCurso
        </button> -->
        <!-- {{ $store.getters.getNombreDelCurso }} -->
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
