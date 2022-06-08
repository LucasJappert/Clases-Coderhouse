<template>
    <div class="container">
        <div>
            <div class="SubTitulo">Ejemplo trabajando con el parámetro <b>context</b>:</div>
            Visualizaciones en consola...
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    setup(props, context){
        // console.log(context.attrs);
        // console.log(context.attrs.test);
        // context.emit("evento-emitido", "Hola!");
    }
}
</script>

<style>

</style>
